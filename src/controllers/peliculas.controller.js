import mPeliculas from '../models/peliculas.model.js'

const cPeliculas={};

/* Se puede filtrar por:
Id, title, overview, lenguague (en,es), page */
cPeliculas.fncPeliculaListar=async (req,res)=>{
    const pelicula = await mPeliculas.find(req.query)
    .lean();
    let result={};
    result.data=pelicula;
    result.rowCount=pelicula.length;
    res.send(result);
}

export default cPeliculas;
