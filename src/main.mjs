import express  from "express";
import cors from "cors"
import {ControllerElementGet,ControllerElementPost} from "./lib/controllersElemento.mjs"




const app = express()
app.use(cors())
app.use(express.json())

app.get("Elemento/",ControllerElementGet)
app.post("Elemento/",ControllerElementPost)






app.listen(8000, function (){
    console.log("express funcionando")
})

