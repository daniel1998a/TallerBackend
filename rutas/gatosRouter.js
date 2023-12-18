import express from "express";
import {crearG,buscarGaId,buscarGa,actualizarGa,eliminarGa} from "../controladores/gatosController.js";
const routerGatos = express.Router();

routerGatos.post("/crear",(req,res) =>{
    crearG(req,res)
});

routerGatos.get("/buscar/:id",(req,res)=>{
    buscarGaId(req,res)
});

routerGatos.get("/buscar",(req,res)=>{
    buscarGa(req,res)
});

routerGatos.put("/actualizar/:id",(req,res) =>{
    actualizarGa(req,res);
});

routerGatos.delete("/eliminar/:id",(req,res) =>{
    eliminarGa(req,res);
});

export {routerGatos};