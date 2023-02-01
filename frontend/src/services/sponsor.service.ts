import { api } from "@/lib/axios";
import { Alert } from "@/lib/alert";

export interface ISponsorParams {
  id: string;
  name: string;
  site: string;
  logo: string;
}

export default {
  async get(id = "") {
    const response = await api.get(`/sponsors/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
    });
    return response.data;
  },
  async post(body: ISponsorParams) {
    try {
      await api.post("/sponsors", body, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      });
      Alert.success("Patrocinador criado com sucesso.");
    } catch (err) {
      Alert.error("Erro ao criar patrocinador.");
    }
  },
  async update(id: string, body: ISponsorParams) {
    try {
      await api.patch(`/sponsors/${id}`, body, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      });
      Alert.success("Patrocinador atualizado com sucesso.");
    } catch (err) {
      Alert.error("Erro ao atualizar patrocinador.");
    }
  },
  async delete(id: string) {
    try {
      await api.delete(`/sponsors/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      });
      Alert.success("Patrocinador deletado com sucesso.");
    } catch (err) {
      Alert.error("Erro ao deletar patrocinador.");
    }
  },
};
