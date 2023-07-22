import { Movie } from "./Movies";

export class Imdb
{
    public peliculas:Movie[];

    constructor(peliculas:Movie[])
    {
        this.peliculas = peliculas;
    }
};
