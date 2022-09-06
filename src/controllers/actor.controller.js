import mActor from '../models/actor.model.js'
import respuesta from '../helpers/respuesta.js'


const cActor ={};



cActor.fncActoresListar=async (req,res)=>{
    const filtrado={ page: Math.floor(Math.random() * 500)};
    const datos = await mActor.find(filtrado)
    .lean();
    res.json( await respuesta.game({datos,type:'actor'}));
}

export default cActor;