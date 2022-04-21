import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';



// este decorador es especial para los servicios. le dice que es una clase que se puede inyectar
@Injectable()
// Creas la clase. y pones export para poder usarla fuera
// INFORMACION Y METODOS PARA INTERACTUAR CON FUENTES EXTERNAS (PETICIONES HTTP)
export class DbzService {

  // crear una propiedad privada
    private _personajes: Personaje[] = [
        {
          nombre: 'Goku',
          poder: 15000
        },
        {
          nombre: 'Vegeta',
          poder: 7500
        }
    ];
// []array] ... separa cada uno de los elemento independientes de este array y crea una nuevo
// ... (los 3 puntos se llaman SPREAD)
// retorna un array de personajes
    get personajes(): Personaje[] {
        return [...this._personajes];
    }

    constructor() {}

    // tenemos que recibir un personaje que es de tipo personaje
    agregarPersonaje( personaje: Personaje ) {
      //añadir a la propiedad privada
        this._personajes.push( personaje );
    }

}