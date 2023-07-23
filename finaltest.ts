import * as readlineSync from 'readline-sync';
import * as fs from 'fs';
import { Professional } from "./Professional";

// Función para solicitar por pantalla los datos de un nuevo professional
function obtenerDatosNuevoProfessional(): Professional{
  let name = readlineSync.question('Name: ');
  let age = parseInt(readlineSync.question('age: '));
  let weight = parseInt(readlineSync.question('weight: '));
  let height = parseInt(readlineSync.question('height: '));
  let isRetired = readlineSync.question('isRetired: ');
  let nationality = readlineSync.question('nationality: ');
  let oscarsNumber = readlineSync.question('oscarsNumber: ');
  let profession = readlineSync.question('profession: ');
  return new Professional(name,age,weight,height,isRetired,nationality,oscarsNumber,profession);
}

// Función para guardar el objeto en un archivo JSON
function guardarProfessionalEnArchivo(profecional: Professional) {
  let archivo = "imdbBBDD.json";

  try {
    let professional: Professional[] = [];
    if (fs.existsSync(archivo)) {
      let contenido = fs.readFileSync(archivo, 'utf-8');
      professional = JSON.parse(contenido);
    }

    professional.push(profecional);
    fs.writeFileSync(archivo, JSON.stringify(professional, null, 2));
    console.log("Datos guardados en el archivo imdbBBDD.json");
  } catch (error) {
    console.error("Error al guardar los datos:", error);
  }
}

// Solicitar los datos y guardar el objeto en el archivo JSON
let nuevaPersona = obtenerDatosNuevoProfessional();
guardarProfessionalEnArchivo(nuevaPersona);

