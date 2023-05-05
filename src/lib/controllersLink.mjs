import { Element } from "./db.mjs";
import {Op} from "sequelize"

async function controllerlink(request, response) {
  try {
    const elemento = await Element.findByPk(request.params.id);
    response.setHeader("Content-Type", "application/json");
    response.status(200);
    response.send(JSON.stringify(elemento));
  } catch (error) {
    response.status(500);
    response.send("falloget");
  }
}
async function controllerlinkName(request, response) {
  try {
    const elemento = await Element.findOne({
      where: {
        name: { [Op.substring]: request.params.name },
      },
    });
    response.setHeader("Content-Type", "application/json");
    response.status(200);
    response.send(JSON.stringify(elemento));
  } catch (error) {
    response.status(500);
    response.send("falloget");
  }
}
export { controllerlink, controllerlinkName };
