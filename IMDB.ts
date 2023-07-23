import * as fs from 'fs';
import { Movie } from "./Movies";

export class Imdb
{
    public peliculas:Movie[];

    constructor(peliculas:Movie[])
    {
        this.peliculas = peliculas;
    }

    public escribirEnFicheroJSON(nombreFichero: string)
    {
      let nuevaJSON = JSON.stringify(this.peliculas, null, 2);

      fs.writeFileSync(nombreFichero, nuevaJSON);
    };

    public obtenerInstanciaIMDB(nombreFichero:string):Imdb
    {
          
        let archivoJSON = fs.readFileSync(nombreFichero, 'utf-8');
        
        let objNuevoJSON = JSON.parse(archivoJSON);

        let intaObjNuevoJSON = new Imdb(objNuevoJSON);
        console.log('Instancia creada:', intaObjNuevoJSON);
        return intaObjNuevoJSON;
    };
};
