import { Professional } from "./Professional";
import { Movie } from "./Movies";
import { Imdb } from "./IMDB";

let origen = new Movie("Origen", 2010, "USA", "Ciencia ficción");
let lalaLanda = new Movie("lala landa", 2016, "USA", "Romance, musical");
let granHotel:Movie = new Movie("El Gran Hotel Budapest", 2014, "UK", "Comedia, drama");

let peliculasNuevasArr:Movie[] = [origen, lalaLanda, granHotel];

let peliculasNuevas:Imdb = new Imdb(peliculasNuevasArr);
console.log(peliculasNuevas.peliculas);
