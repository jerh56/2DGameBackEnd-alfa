import mFrase from '../models/frase.model.js'
import respuesta from '../helpers/respuesta.js'


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
    const datos = await mFrase.aggregate(
        [ { $sample: { size: 1 } } ]
     );
    res.json( await respuesta.game({datos,type:'frase'}));
}

export default cFrase;