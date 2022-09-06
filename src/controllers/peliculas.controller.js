import mPeliculas from '../models/peliculas.model.js'
import respuesta from '../helpers/respuesta.js'

const cPeliculas={};

/* Se puede filtrar por:
Id, title, overview, lenguague (en,es), page */
cPeliculas.fncPeliculaListar=async (req,res)=>{
    const filtrado={ page: Math.floor(Math.random() * 1000),lenguague:"es" };
    const datos = await mPeliculas.find(filtrado)
    .lean();
    res.json( await respuesta.game({datos,type:'movie'}));
}

export default cPeliculas;
