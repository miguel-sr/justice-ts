import { api } from "@/lib/axios";
import { Alert } from "@/lib/alert";

interface ILoginParams {
  email: string;
  password: string;
}

export default {
  async login(body: ILoginParams) {
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
      await api.post(
        "/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          },
        }
      );
      Alert.success("Logout realizado com sucesso.");
    } catch (error) {
      console.log(error);
      Alert.error("Erro ao realizar logout.");
    }
  },
  async verifyToken() {
    try {
      await api.get("/token", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      });
      return true;
    } catch (err) {
      Alert.error("Token inválido.");
      return false;
    }
  },
};
