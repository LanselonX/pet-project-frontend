"use client";

import { useEffect, useState } from "react";

export function useData<T>(fetcher: () => Promise<T>) {
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetcher();
      setData(result);
    };

    fetchData();
  }, []);

  return { data };
}
