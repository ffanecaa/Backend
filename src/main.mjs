import express  from "express";
import cors from "cors"
import {controllerElementGet,controllerElementPost,controllerElementDelete} from "./lib/controllersElemento.mjs"
import {controllerIconPost,controllerIconGet} from "./lib/controllersIcon.mjs";
import {controllerCathegoryPost} from "./lib/controllersCathegory.mjs"



const app = express()
app.use(cors())
app.use(express.json())

 app.get("/elements/",controllerElementGet)
app.post("/elements/",controllerElementPost)
app.delete("/elements/",controllerElementDelete)
app.post("/icons/",controllerIconPost)
app.get("/icons/",controllerIconGet)
app.post("/cathegory/" ,controllerCathegoryPost)





app.listen(8000, function () {
    console.log("express funcionando")
})

