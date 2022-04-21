import { Component, Input } from '@angular/core';
// importamos la plantilla
import { Personaje } from '../interfaces/dbz.interface';

import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {

  // Decorador de una propiedad pero hay que importar lo de interfaces!
  // @Input() personajes: Personaje[] = [];


  // HACER ACESSO A LOS PERSONAJES
  get personajes() {
    // y retornas el get que creamos en service
    return this.dbzService.personajes;
  }

  // DEFINIR PROPIEDAD PRIVATE LA PROPIEDAD QUE QUIERO DARLE Y TIPO DE DATO
  // INYECCIÓN DE DEPENDENCIA ESTAMOS INTECTANDO EL SERVICIO EN ESTE COMPONENTE
  constructor( private dbzService: DbzService ) {}

}
