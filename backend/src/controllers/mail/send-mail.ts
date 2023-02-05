import { ok, serverError } from "../helpers";
import transporter from "../../config/transporter.config";
import { IController, IHttpRequest, IHttpResponse } from "../protocols";
import { Order } from "../../models/order";

export class SendMailController implements IController {
  async handle(
    httpRequest: IHttpRequest<Order>
  ): Promise<IHttpResponse<Order | string>> {
    const mail_options = [
      {
        from: `JUSTICE FTC TEAM <${process.env.ZOHO_USER}>`,
        to: httpRequest.body?.email,
        subject: "Solicitação de Peças",
        template: "email",
        context: {
          message: `Olá ${httpRequest.body?.name}! Sua solicitação foi recebida com sucesso.`,
          item: httpRequest.body?.cart,
        },
      },
      {
        from: `JUSTICE FTC TEAM <${process.env.ZOHO_USER}>`,
        to: process.env.ZOHO_USER,
        subject: "Solicitação de Peças",
        template: "email",
        context: {
          message: `Novo pedido de ${httpRequest.body?.name} - ${httpRequest.body?.teamName} #${httpRequest.body?.teamNumber}.`,
          contact: httpRequest.body?.email,
          item: httpRequest.body?.cart,
        },
      },
    ];

    if (!httpRequest.body) {
      throw new Error("Missing order to send mail.");
    }

    try {
      mail_options.forEach((mail) => {
        transporter.sendMail(mail, (error) => {
          if (error) {
            transporter.close();
            throw new Error(error.message);
          }

          transporter.close();
        });
      });

      return ok<Order>(httpRequest.body);
    } catch (error) {
      return serverError();
    }
  }
}
