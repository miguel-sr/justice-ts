import API from "@/services/server/api.service";
import alertService from "../alert.service";

export default {
  async get(id?: string) {
    const response = await API().get("/orders/" + id, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
    });
    return response.data;
  },
  async post(body: JSON) {
    try {
      await API().post("/orders", body, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      });
      alertService.success("Pedido criado com sucesso.");
    } catch (err) {
      alertService.error("Erro ao criar pedido.");
    }
  },
  async delete(id: string) {
    try {
      await API().delete("/orders/" + id, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      });
      alertService.success("Pedido deletado com sucesso.");
    } catch (err) {
      alertService.error("Erro ao deletar pedido.");
    }
  },
};
