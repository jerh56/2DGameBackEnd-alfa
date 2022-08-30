import mActor from '../models/actor.model.js'

const cActor ={};



cActor.fncActoresListar=async (req,res)=>{
    const actor = await mActor.find(req.query)
    .lean();
    let result={};
    result.data=actor;
    result.rowCount=actor.length;
    res.send(result);
}

export default cActor;