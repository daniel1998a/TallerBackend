import Sequelize from "sequelize";

const db = new Sequelize("adopcion-PG","adopcion","adopcion2023",{
    dialect: "mysql",
    host: "localhost"
});

export {db}