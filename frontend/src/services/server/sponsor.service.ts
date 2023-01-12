import API from "@/services/server/api.service";
import alertService from "../alert.service";

export default {
  async get(id?: string) {
    const response = await API().get("/sponsors/" + id, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
    });
    return response.data;
  },
  async post(body: JSON) {
    try {
      await API().post("/sponsors", body, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      });
      alertService.success("Patrocinador criado com sucesso.");
    } catch (err) {
      alertService.error("Erro ao criar patrocinador.");
    }
  },
  async update(id: string, body: JSON) {
    try {
      await API().patch("/sponsors/" + id, body, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      });
      alertService.success("Patrocinador atualizado com sucesso.");
    } catch (err) {
      alertService.error("Erro ao atualizar patrocinador.");
    }
  },
  async delete(id: string) {
    try {
      await API().delete("/sponsors/" + id, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      });
      alertService.success("Patrocinador deletado com sucesso.");
    } catch (err) {
      alertService.error("Erro ao deletar patrocinador.");
    }
  },
};
