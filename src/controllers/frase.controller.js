import mFrase from '../models/frase.model.js'

const cFrase ={};

cFrase.fncFraseGuardar=async(req,res)=>{
    let nuevaFrase ={
        "title":req.body.title
    } 
    const nFrase = new mFrase(nuevaFrase);
    nFrase.save();
    res.send(nFrase);
}

cFrase.fncFraseListar=async (req,res)=>{
    const frase = await mFrase.find(req.query)
    .lean();
    let result={};
    result.data=frase;
    result.rowCount=frase.length;
    res.send(result);
}

export default cFrase;