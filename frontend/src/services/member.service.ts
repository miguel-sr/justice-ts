import { Alert } from "@/lib/alert";
import { api } from "@/lib/axios";

export interface IMemberParams {
  id: string;
  name: string;
  role: string;
  text: string;
  image: string;
}

export default {
  async get(id = "") {
    const response = await api.get(`/members/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
    });
    return response.data;
  },
  async post(body: IMemberParams) {
    try {
      await api.post("/members", body, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      });
      Alert.success("Membro criado com sucesso.");
    } catch (err) {
      Alert.error("Erro ao criar membro.");
    }
  },
  async update(id: string, body: IMemberParams) {
    try {
      await api.patch(`/members/${id}`, body, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      });
      Alert.success("Membro atualizado com sucesso.");
    } catch (err) {
      Alert.error("Erro ao atualizar membro.");
    }
  },
  async delete(id: string) {
    try {
      await api.delete(`/members/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      });
      Alert.success("Membro deletado com sucesso.");
    } catch (err) {
      Alert.error("Erro ao deletar membro.");
    }
  },
};
