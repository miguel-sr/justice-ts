import API from "@/services/api.service";
import alertService from "./alert.service";

export default {
  async get(id?: string) {
    const response = await API().get("/videos/" + id, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
    });
    return response.data;
  },
  async post(body: JSON) {
    try {
      await API().post("/videos", body, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      });
      alertService.success("Vídeo criado com sucesso.");
    } catch (err) {
      alertService.error("Erro ao criar vídeo.");
    }
  },
  async update(id: string, body: JSON) {
    try {
      await API().patch("/videos/" + id, body, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      });
      alertService.success("Vídeo atualizado com sucesso.");
    } catch (err) {
      alertService.error("Erro ao atualizar vídeo.");
    }
  },
  async delete(id: string) {
    try {
      await API().delete("/videos/" + id, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      });
      alertService.success("Vídeo deletado com sucesso.");
    } catch (err) {
      alertService.error("Erro ao deletar vídeo.");
    }
  },
};
