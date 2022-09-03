import mPeliculas from '../models/peliculas.model.js'

const cPeliculas={};

/* Se puede filtrar por:
Id, title, overview, lenguague (en,es), page */
cPeliculas.fncPeliculaListar=async (req,res)=>{
    const filtrado={ page: Math.floor(Math.random() * 1000), lenguague: 'es' }
    const pelicula = await mPeliculas.find(filtrado)
    .lean();
    let result={};
    result.data=pelicula;
    result.rowCount=pelicula.length;
    const indice= Math.floor(Math.random() * 20);
    res.json({
        phrase: result.data[indice].title,
        type: result.data[indice].media_type,
        tries: 5
    });
}

export default cPeliculas;
