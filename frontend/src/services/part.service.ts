import { api } from "@/lib/axios";
import { Alert } from "@/lib/alert";

export default {
  async get(id = "") {
    const response = await api.get("/parts/" + id, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
    });
    return response.data;
  },
  async post(body: JSON) {
    try {
      await api.post("/parts", body, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      });
      Alert.success("Peça criada com sucesso.");
    } catch (err) {
      Alert.error("Erro ao criar peça.");
    }
  },
  async update(id: string, body: JSON) {
    try {
      await api.patch("/parts/" + id, body, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      });
      Alert.success("Peça atualizada com sucesso.");
    } catch (err) {
      Alert.error("Erro ao atualizar peça.");
    }
  },
  async delete(id: string) {
    try {
      await api.delete("/parts/" + id, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      });
      Alert.success("Peça deletada com sucesso.");
    } catch (err) {
      Alert.error("Erro ao deletar peça.");
    }
  },
};