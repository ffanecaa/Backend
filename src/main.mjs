import express  from "express";
import cors from "cors"
import {controllerElementGet,controllerElementPost} from "./lib/controllersElemento.mjs"




const app = express()
app.use(cors())
app.use(express.json())

 app.get("/elements/",controllerElementGet)
app.post("/elements/",controllerElementPost)






app.listen(8000, function () {
    console.log("express funcionando")
})

