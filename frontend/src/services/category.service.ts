import { Alert } from "@/lib/alert";
import { api } from "@/lib/axios";

export interface ICategoryParams {
  id: string;
  name: string;
  slug: string;
  createdAt: Date;
}

export default {
  async get(id = "") {
    const response = await api.get(`/categories/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
    });
    return response.data;
  },
  async post(body: ICategoryParams) {
    try {
      await api.post("/categories", body, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      });
      Alert.success("Categoria criada com sucesso.");
    } catch (err) {
      Alert.error("Erro ao criar categoria.");
    }
  },
  async update(id: string, body: ICategoryParams) {
    try {
      await api.patch(`/categories/${id}`, body, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      });
      Alert.success("Categoria atualizada com sucesso.");
    } catch (err) {
      Alert.error("Erro ao atualizar categoria.");
    }
  },
  async delete(id: string) {
    try {
      await api.delete(`/categories/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      });
      Alert.success("Categoria deletada com sucesso.");
    } catch (err) {
      Alert.error("Erro ao deletar categoria.");
    }
  },
};
