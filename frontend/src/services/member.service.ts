import API from "@/services/api.service";
import alertService from "./alert.service";

export default {
  async get(id?: string) {
    const response = await API().get("/members/" + id, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
    });
    return response.data;
  },
  async post(body: JSON) {
    try {
      await API().post("/members", body, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      });
      alertService.success("Membro criado com sucesso.");
    } catch (err) {
      alertService.error("Erro ao criar membro.");
    }
  },
  async update(id: string, body: JSON) {
    try {
      await API().patch("/members/" + id, body, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      });
      alertService.success("Membro atualizado com sucesso.");
    } catch (err) {
      alertService.error("Erro ao atualizar membro.");
    }
  },
  async delete(id: string) {
    try {
      await API().delete("/members/" + id, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      });
      alertService.success("Membro deletado com sucesso.");
    } catch (err) {
      alertService.error("Erro ao deletar membro.");
    }
  },
};
