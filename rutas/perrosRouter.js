import express from "express";
import {crear,buscarId,buscar,actualizar,eliminar} from "../controladores/perrosController.js";
const routerPerros = express.Router();

routerPerros.get("/",(req,res) =>{
    res.send("Bienvenido a lista de Perro");
})
;
routerPerros.post("/crear",(req,res) =>{
    crear(req,res)
});

routerPerros.get("/buscar/:id",(req,res)=>{
    buscarId(req,res)
});

routerPerros.get("/buscar",(req,res)=>{
    buscar(req,res)
});

routerPerros.put("/actualizar/:id",(req,res) =>{
    actualizar(req,res);
});

routerPerros.delete("/eliminar/:id",(req,res) =>{
    eliminar(req,res);
});

export {routerPerros};