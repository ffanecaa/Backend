import {Element,Cathegory} from "./db.mjs"


async function controllerCatheEle(request, response) {
    try {
      const name = request.query.name
      const page = parseInt(request.query.page);
      const limit = parseInt(request.query.limit);
      const offset = (page - 1) * limit;
  
      const elements = await Element.findAll({
        offset,
        limit,
        include: { model: Cathegory,
             where: { name: request.query.name } },
      });
  
      const nextPage = page + 1;
      const previousPage = page - 1;
      response.setHeader("Content-Type", "application/json");
      response.status(200).json({
        elements,
        pagination: {
          page,
          limit,
          nextPage: `/cate/?page=${nextPage}&limit=${limit}&name=${name}`,
          previousPage: `/cate/?page=${previousPage}&limit=${limit}&name=${name}`,
        },
      });
    } catch (error) {
      response.status(500).send("Error");
    }
  }

  export{
    controllerCatheEle

  }