const respuesta={};


respuesta.game=async(req,res)=>{
    let result={};
    result.data=req.datos;
    result.rowCount=req.datos.length;
    const indice= Math.floor(Math.random() * result.rowCount);
    const type=req.type;
    return{
        phrase: result.data[indice].title || result.data[indice].name,
        type, type,
        tries: 5,
        photo:result.data[indice].poster_path || result.data[indice].profile_path
    };
}

export default respuesta;