import { Alert } from "@/lib/alert";
import { api } from "@/lib/axios";

export interface IOrderParams {
  name: string;
  teamName: string;
  teamNumber: string;
  email: string;
  reason: string;
  cart: Array<{
    id: string;
    description: string;
    amount: number;
    image: string;
  }>;
}

export default {
  async get(id = "") {
    const response = await api.get(`/orders/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
    });
    return response.data;
  },
  async post(body: IOrderParams) {
    try {
      await api.post("/orders", body, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      });
      Alert.success("Pedido criado com sucesso.");
    } catch (err) {
      Alert.error("Erro ao criar pedido.");
    }
  },
  async delete(id: string) {
    try {
      await api.delete(`/orders/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      });
      Alert.success("Pedido deletado com sucesso.");
    } catch (err) {
      Alert.error("Erro ao deletar pedido.");
    }
  },
};
