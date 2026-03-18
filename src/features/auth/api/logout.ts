import { api } from "@/src/api/api";

export default async function logout() {
  try {
    return await api.post(
      `/auth/logout`,
      {},
      {
        headers: { "Content-Type": "application/json" },
      },
    );
  } catch (err) {
    console.log(err);
  }
}
