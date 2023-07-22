import { Professional } from "./Professional";

export class Movie
{
public title: string;
public releaseYear: number;
public actors: Professional[];
public nacionality: string;
public director: Professional;
public writer: Professional;
public language: string;
public plataforma: string;
public isMCU: boolean;
public mainCharacterName: string;
public producer: string;
public distributor: string;
public genre: string;

    constructor(title:string, releaseYear: number, nacionality: string, genre: string)
            {
                this.title = title;
                this.releaseYear = releaseYear;
                this.nacionality = nacionality;
                this.genre = genre;
            }

public showAll():void
{   
    console.log( `Title - ${this.title} \nReleaseYear - ${ this.releaseYear } \nNacionality - ${this.nacionality} \nLanguage - ${this.language} \nPlataforma - ${this.plataforma} \nIsMCU - ${this.isMCU} \nMainCharacterName - ${this.mainCharacterName} \nProducer - ${this.producer} \nDistributor - ${this.distributor} \nGenre - ${this.genre}\n`);
    this.director.printAll()
    this.writer.printAll()
    for(let actor of this.actors)
        {
            actor.printAll()
        }
};

};