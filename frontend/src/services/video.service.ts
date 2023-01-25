import { api } from "@/lib/axios";
import { Alert } from "@/lib/alert";

export interface IVideoParams {
  id: string;
  title: string;
  description: string;
  video: string;
}

export default {
  async get(id = "") {
    const response = await api.get("/videos/" + id, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
    });
    return response.data;
  },
  async post(body: IVideoParams) {
    try {
      await api.post("/videos", body, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      });
      Alert.success("Vídeo criado com sucesso.");
    } catch (err) {
      Alert.error("Erro ao criar vídeo.");
    }
  },
  async update(id: string, body: IVideoParams) {
    try {
      await api.patch("/videos/" + id, body, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      });
      Alert.success("Vídeo atualizado com sucesso.");
    } catch (err) {
      Alert.error("Erro ao atualizar vídeo.");
    }
  },
  async delete(id: string) {
    try {
      await api.delete("/videos/" + id, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      });
      Alert.success("Vídeo deletado com sucesso.");
    } catch (err) {
      Alert.error("Erro ao deletar vídeo.");
    }
  },
};
