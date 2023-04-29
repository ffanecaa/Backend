








import {Element} from "./db.mjs"



  async function controllerelementNome(req, res) {
    try {
      const page = parseInt(req.query.page) ;
      const limit = parseInt(req.query.limit )
   
      const offset = (page - 1) * limit
      const elements = await Element.findAll({
        offset,
        limit
      });
      const nextPage = page + 1;
    const previousPage = page - 1;
      res.status(200).json({
         elements,
        pagination: {
          page,
          limit,
          nextPAge: `/pax/?page=${nextPage}&limit=${limit}`,
          previousPage:`/pax/?page=${previousPage}&limit=${limit}`
        },
      });
    } catch (error) {
      res.status(500)
      res.send("error");
    }
  }
  


export{controllerelementNome
}