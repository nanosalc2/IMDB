import * as fs from "fs";
import { Professional } from "./Professional";
import { Movie } from "./Movies";
import { Imdb } from "./IMDB";

let origen = new Movie("Origen", 2010, "USA", "Ciencia ficción");
let lalaLanda = new Movie("lala landa", 2016, "USA", "Romance, musical");
let granHotel:Movie = new Movie("El Gran Hotel Budapest", 2014, "UK", "Comedia, drama");

let peliculasNuevasArr:Movie[] = [origen, lalaLanda, granHotel];

let peliculasNuevas:Imdb = new Imdb(peliculasNuevasArr);
// console.log(peliculasNuevas.peliculas);



let rutaArchivo = `imdbBBDD.json`


peliculasNuevas.escribirEnFicheroJSON(rutaArchivo);
peliculasNuevas.obtenerInstanciaIMDB(rutaArchivo);



// ------------------// RETO 6 Lectura/Escritura en Fichero//---------------------------------//
try 
{
    // Convertimos el objeto a formato JSON
    let peliculasString = JSON.stringify(peliculasNuevas.peliculas, null, 2);
  
    // Guardamos el objeto en el archivo JSON
    fs.writeFileSync(rutaArchivo, peliculasString);
  
    console.log('Objeto guardado exitosamente en el archivo JSON.');
} 
  catch (error) 
{
  console.error('Error al guardar el objeto en el archivo JSON:', error);
}

try 
{
  // Leemos el contenido del archivo JSON
  let archivoJSON = fs.readFileSync(rutaArchivo, 'utf-8');

  // Convertimos el contenido JSON en un objeto JavaScript
  let objNuevoJSON = JSON.parse(archivoJSON);

  // Creamos una instancia de intaObjNuevoJSON utilizando los datos del objeto
  let intaObjNuevoJSON = new Imdb(objNuevoJSON);
  intaObjNuevoJSON.peliculas
  console.log('Instancia creada:', intaObjNuevoJSON.peliculas);
} 
catch (error) 
{
  console.error('Error al leer el archivo JSON:', error);
}