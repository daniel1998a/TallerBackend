import Sequelize  from "sequelize";
import { db } from "../database/conexion.js";

const gatos = db.define("gatos",{
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
    raza_gato:{
        type: Sequelize.STRING,
        allowNull: true
    }

    
});

export {gatos}