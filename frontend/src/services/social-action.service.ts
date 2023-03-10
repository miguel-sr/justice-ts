import { api } from "@/lib/axios";
import { Alert } from "@/lib/alert";

export interface ISocialActionParams {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
}

export default {
  async get(id = "") {
    const response = await api.get(`/social-actions/${id}`);
    return response.data;
  },
  async getPagination(itemsPerPage?: number, skip?: number) {
    if (!itemsPerPage && !skip) {
      const response = await api.get(`/social-actions-pagination/`);
      return response.data;
    }
    const response = await api.get(
      `/social-actions-pagination/${itemsPerPage}/${skip}`
    );
    return response.data;
  },
  async post(body: ISocialActionParams) {
    try {
      await api.post("/social-actions", body, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      });
      Alert.success("Ação criada com sucesso.");
    } catch (err) {
      Alert.error("Erro ao criar ação.");
    }
  },
  async update(id: string, body: ISocialActionParams) {
    try {
      await api.patch(`/social-actions/${id}`, body, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      });
      Alert.success("Ação atualizada com sucesso.");
    } catch (err) {
      Alert.error("Erro ao atualizar ação.");
    }
  },
  async delete(id: string) {
    try {
      await api.delete(`/social-actions/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      });
      Alert.success("Ação deletada com sucesso.");
    } catch (err) {
      Alert.error("Erro ao deletar ação.");
    }
  },
};
