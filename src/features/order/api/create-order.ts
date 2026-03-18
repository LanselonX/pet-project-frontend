import { api } from "@/src/api/api";

export default async function createOrder() {
  try {
    return await api.post(`orders`, {});
  } catch (err) {
    console.log(err);
  }
}
