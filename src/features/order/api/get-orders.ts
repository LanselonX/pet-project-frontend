import { api } from "@/src/api/api";

export default async function getOrders() {
  try {
    const response = await api.get(`orders`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}
