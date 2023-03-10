import { Alert } from "@/lib/alert";
import { api } from "@/lib/axios";

export interface ITipParams {
  id: string;
  name: string;
  role: string;
  text: string;
  image: string;
}

export default {
  async get(id = "") {
    const response = await api.get(`/tips/${id}`);
    return response.data;
  },
  async getPagination(itemsPerPage?: number, skip?: number) {
    if (!itemsPerPage && !skip) {
      const response = await api.get(`/tips-pagination/`);
      return response.data;
    }
    const response = await api.get(`/tips-pagination/${itemsPerPage}/${skip}`);
    return response.data;
  },
  async post(body: ITipParams) {
    try {
      await api.post("/tips", body, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      });
      Alert.success("Dica criada com sucesso.");
    } catch (err) {
      Alert.error("Erro ao criar dica.");
    }
  },
  async update(id: string, body: ITipParams) {
    try {
      await api.patch(`/tips/${id}`, body, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      });
      Alert.success("Dica atualizada com sucesso.");
    } catch (err) {
      Alert.error("Erro ao atualizar dica.");
    }
  },
  async delete(id: string) {
    try {
      await api.delete(`/tips/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      });
      Alert.success("Dica deletada com sucesso.");
    } catch (err) {
      Alert.error("Erro ao deletar dica.");
    }
  },
};
