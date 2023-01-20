import { api } from "@/lib/axios";
import { Alert } from "@/lib/alert";

export default {
  async login(body: JSON) {
    try {
      const response = await api.post("/login", body);
      const { token } = response.data;

      localStorage.setItem("userToken", token);

      Alert.success("Login realizado com sucesso.");
    } catch (err) {
      Alert.error("Erro ao realizar login.");
    }
  },
  async logout() {
    try {
      await api.post("/logout", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      });
      Alert.success("Logout realizado com sucesso.");
    } catch (err) {
      Alert.error("Erro ao realizar logout.");
    }
  },
};
