import {gatos} from "../modelos/gatosModelo.js";

const crearG = (req,res)=>{
    if(!req.body.nombre){
        res.status(400).json({

            mensaje: "el nombre no puede estar vacio."
        });
        return;
    }
    const dataset={
        nombre: req.body.nombre,
        edad: req.body.edad,
        raza_gato: req.body.raza_gato
    };

    gatos.create(dataset).then((resultado)=>{
        res.status(200).json({
            mensaje:"Registro del Gato fue creado correctamente"
        })
    }).catch((err)=>{
        res.status(500).json({
           mensaje: `Error al crear el registro del Gato ::: ${err}`
        })       
    })
};

const buscarGaId =(req,res)=>{
    const id = req.params.id;
    if(id==null){
        res.status(203).json({
            mensaje:  `El id no puede estar vacio`
        });
        return
    }

    gatos.findByPk(id).then((resultado)=>{
        res.status(200).json(resultado);
    }).catch((err)=>{
        res.status(500).json({
            mensaje:  `Registro del Gato no fue encontrado ::: ${err}`
        });
    });
}

const buscarGa = (req,res)=>{
    gatos.findAll().then((resultado)=>{
        res.status(200).json(resultado);
    }).catch((err)=>{
        res.status(500).json({
            mensaje:  `no se econtro ningun gato con ese ID ::: ${err}`
        });
    });
};

const actualizarGa=(req,res)=>{
    const id= req.params.id;
    if(!req.body.nombre && !req.body.edad && !req.body.raza_gato){
        res.status(500).json({
            mensaje:  `no se ecuentraron Datos del Gato para actualizar`
        });
        return;
    }
    else{
        const nombre= req.body.nombre;
        const edad= req.body.edad;
        const raza_gato= req.body.raza_gato;
        gatos.update({nombre,edad,raza_gato},{where:{id}})
        .then((resultado)=>{
            res.status(200).json({
                mensaje: `Registro del Gato Actualizado`
            });
        })
        .catch((err)=>{
            res.status(500).json({
                mensaje:  `error a actualizar registro del Gato ::: ${err}`
            });
        })    
    }
};

const eliminarGa=(req,res)=>{
    const id= req.params.id;
    if(id == null){
        res.status(203).json({
            mensaje: `El id no puede estar vacio`
        });
        return;
    }
    gatos.destroy({where:{id}})
    .then((resultado)=>{
        res.status(200).json({
            mensaje: `Registro del Gato fue Eliminado`
        });
    })
    .catch((err)=>{
        res.status(500).json({
            mensaje: `Error al eliminar el Registro del gato ::: ${err}`
        });
    })
    

};
export {crearG,buscarGaId,buscarGa,actualizarGa,eliminarGa}