import API from "@/services/server/api.service";
import alertService from "./alert.service";

export default {
  async get(id?: string) {
    const response = await API().get("/social-actions/" + id, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
    });
    return response.data;
  },
  async post(body: JSON) {
    try {
      await API().post("/social-actions", body, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      });
      alertService.success("Ação criada com sucesso.");
    } catch (err) {
      alertService.error("Erro ao criar ação.");
    }
  },
  async update(id: string, body: JSON) {
    try {
      await API().patch("/social-actions/" + id, body, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      });
      alertService.success("Ação atualizada com sucesso.");
    } catch (err) {
      alertService.error("Erro ao atualizar ação.");
    }
  },
  async delete(id: string) {
    try {
      await API().delete("/social-actions/" + id, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      });
      alertService.success("Ação deletada com sucesso.");
    } catch (err) {
      alertService.error("Erro ao deletar ação.");
    }
  },
};
