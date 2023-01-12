import API from "@/services/server/api.service";
import alertService from "../alert.service";

export default {
  async get(id?: string) {
    const response = await API().get("/categories/" + id, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
    });
    return response.data;
  },
  async post(body: JSON) {
    try {
      await API().post("/categories", body, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      });
      alertService.success("Categoria criada com sucesso.");
    } catch (err) {
      alertService.error("Erro ao criar categoria.");
    }
  },
  async update(id: string, body: JSON) {
    try {
      await API().patch("/categories/" + id, body, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      });
      alertService.success("Categoria atualizada com sucesso.");
    } catch (err) {
      alertService.error("Erro ao atualizar categoria.");
    }
  },
  async delete(id: string) {
    try {
      await API().delete("/categories/" + id, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      });
      alertService.success("Categoria deletada com sucesso.");
    } catch (err) {
      alertService.error("Erro ao deletar categoria.");
    }
  },
};
