import app from "./app.js";
import cnnDB from "./database.js";


async function main()
{
    //Conectamos DB
    await cnnDB.mongoose();
    //Iniciar el servidor
    app.listen(process.env.PORT || app.get('port'),()=>{
        console.log('servidor puerto', app.get('port'));
    });
}

main();