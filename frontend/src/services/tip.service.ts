import API from "@/services/api.service";
import alertService from "./alert.service";

export default {
  async get(id?: string) {
    const response = await API().get("/tips/" + id, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
    });
    return response.data;
  },
  async post(body: JSON) {
    try {
      await API().post("/tips", body, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      });
      alertService.success("Dica criada com sucesso.");
    } catch (err) {
      alertService.error("Erro ao criar dica.");
    }
  },
  async update(id: string, body: JSON) {
    try {
      await API().patch("/tips/" + id, body, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      });
      alertService.success("Dica atualizada com sucesso.");
    } catch (err) {
      alertService.error("Erro ao atualizar dica.");
    }
  },
  async delete(id: string) {
    try {
      await API().delete("/tips/" + id, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      });
      alertService.success("Dica deletada com sucesso.");
    } catch (err) {
      alertService.error("Erro ao deletar dica.");
    }
  },
};
