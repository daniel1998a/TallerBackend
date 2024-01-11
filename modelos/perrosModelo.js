import Sequelize  from "sequelize";
import { db } from "../database/conexion.js";

const perros = db.define("perros",{
    id:{
        type:Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        primaryKey: true
    },
    nombre:{
        type: Sequelize.STRING,
        allowNull: true
    },
    edad:{
        type: Sequelize.INTEGER,
        allowNull:true
    },
    raza:{
        type: Sequelize.STRING,
        allowNull: true
    },
    url:{
        type: Sequelize.STRING,
        allowNull: true
    },
    descrip_cor:{
        type: Sequelize.STRING,
        allowNull: true
    },
    descrip_larg:{
        type: Sequelize.STRING,
        allowNull: true
    },

    
});

export {perros}