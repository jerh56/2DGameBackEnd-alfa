import mSeries from '../models/series.model.js'
import respuesta from '../helpers/respuesta.js'

const cSeries={};


/* Se puede filtrar por:
Id, title, overview, lenguague (en,es), page */
cSeries.fncSerieListar=async (req,res)=>{
    const filtrado={ page: Math.floor(Math.random() * 500),lenguague:"es" };
    const datos = await mSeries.find(filtrado)
    .lean();
    res.json( await respuesta.game({datos,type:'serie'}));
}

export default cSeries;
