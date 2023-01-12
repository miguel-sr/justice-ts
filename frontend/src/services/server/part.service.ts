import API from "@/services/server/api.service";
import alertService from "../alert.service";

export default {
  async get(id?: string) {
    const response = await API().get("/parts/" + id, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
    });
    return response.data;
  },
  async post(body: JSON) {
    try {
      await API().post("/parts", body, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      });
      alertService.success("Peça criada com sucesso.");
    } catch (err) {
      alertService.error("Erro ao criar peça.");
    }
  },
  async update(id: string, body: JSON) {
    try {
      await API().patch("/parts/" + id, body, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      });
      alertService.success("Peça atualizada com sucesso.");
    } catch (err) {
      alertService.error("Erro ao atualizar peça.");
    }
  },
  async delete(id: string) {
    try {
      await API().delete("/parts/" + id, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      });
      alertService.success("Peça deletada com sucesso.");
    } catch (err) {
      alertService.error("Erro ao deletar peça.");
    }
  },
};
