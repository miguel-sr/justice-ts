import API from "@/services/server/api.service";
import alertService from "../alert.service";

export default {
  async login(body: JSON) {
    try {
      const response = await API().post("/login", body);
      const { token } = response.data;

      localStorage.setItem("userToken", token);

      alertService.success("Login realizado com sucesso.");
    } catch (err) {
      alertService.error("Erro ao realizar login.");
    }
  },
  async logout() {
    try {
      await API().post("/logout", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      });
      alertService.success("Logout realizado com sucesso.");
    } catch (err) {
      alertService.error("Erro ao realizar logout.");
    }
  },
};
