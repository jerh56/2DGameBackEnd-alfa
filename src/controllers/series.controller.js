import mSeries from '../models/series.model.js'

const cSeries={};


/* Se puede filtrar por:
Id, title, overview, lenguague (en,es), page */
cSeries.fncSerieListar=async (req,res)=>{
    const serie = await mSeries.find(req.query)
    .lean();
    let result={};
    result.data=serie;
    result.rowCount=serie.length;
    res.send(result);
}

export default cSeries;
