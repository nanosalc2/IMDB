import { Professional } from "./Professional";
import { Movie } from "./Movies";
//--- origen//
// actors//
let leonardo:Professional = new Professional("Leonardo Dcaprio", 48, 78, 1.83, false, "USA", 1, "actor");
let marion:Professional = new Professional("Marion Cotillard", 47, 56, 1.69, false, "France", 1, "actor");

// director //
let christopher:Professional = new Professional("Christopher Nolan", 52, 80, 1.85, false, "UK", 0, "director and writer");

// producers//
let emma:Professional = new Professional("Emma Thomas", 51, 60, 1.70, false, "UK", 1, "producer");

// writers //
// Christopher Nolan//

// ---lala landa// 
//actors// 
let ryan:Professional = new Professional("Ryan Gosling", 42, 80, 1.84, false, "Canadian", 0, "actor");
let emmaA:Professional = new Professional("Emma Stone", 34, 55, 1.68, false, "USA", 0, "Actor");

// director //
let damien:Professional = new Professional("Damien Chazelle", 38, 75, 1.77, false, "USA", 0, "director and writer");

// producers//
let fred:Professional = new Professional("Fred Berger", 42, 75, 1.7, false, "USA", 0, "producer");

// writers //
// Damien Chazelle//

// ---El Gran Hotel Budapest //
// actors// 
let ralph:Professional = new Professional("Ralph Fiennes", 60, 79, 1.8, false, "UK", 0, "actor");
let bill: Professional = new Professional("Bill Murray", 72, 80, 1.87, true, "USA", 1, "actor");

// director //
let wes:Professional = new Professional("Wes Anderson", 54, 72, 1.75, false, "USA", 0, "director and writer");

// producers//
let scott:Professional = new Professional("Scott Rudin", 65, 86, 1.73, false, "USA", 0, "producer");

// writers //
// Wes Anderson//



let origen = new Movie("Origen", 2010, "USA", "Ciencia ficción");
let lalaLanda = new Movie("lala landa", 2016, "USA", "Romance, musical");
let granHotel:Movie = new Movie("El Gran Hotel Budapest", 2014, "UK", "Comedia, drama"); 

origen.actors = [leonardo, marion];
origen.director = christopher;
origen.writer = christopher;
origen.language = "ingles";
origen.plataforma = "netflix";
origen.isMCU = false;
origen.mainCharacterName = "Leonardo Dcaprio";
origen.producer = "Emma Thomas";
origen.distributor = "Warner";

lalaLanda.actors = [ryan, emmaA];
lalaLanda.director = damien;
lalaLanda.writer = damien;
lalaLanda.language = "ingles";
lalaLanda.plataforma = "Amazon Prime";
lalaLanda.isMCU = false;
lalaLanda.mainCharacterName = "Ryan Gosling";
lalaLanda.producer = "Fred Berger";
lalaLanda.distributor = "Amazon Prime";

granHotel.actors = [ralph, bill];
granHotel.director = wes;
granHotel.writer = wes;
granHotel.language = "ingles";
granHotel.plataforma = "Disney+";
granHotel.isMCU = true;
granHotel.mainCharacterName = "Ralph Fiennes";
granHotel.producer = "Scott Rudin";
granHotel.distributor = "Dusney+";

origen.showAll();
lalaLanda.showAll();
granHotel.showAll();