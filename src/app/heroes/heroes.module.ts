import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from '../heroes/heroe/heroe.component';
import { ListadoComponent } from '../heroes/listado/listado.component';

@NgModule({

    // que cosas tiene este modulo que componentes.
    declarations:[
        HeroeComponent,
        ListadoComponent
    ],
    // Que cosas quiero que sean visibles fuera del modulo
    exports:[
        ListadoComponent
    ],
    // van modulos
    imports:[
        CommonModule
    ],
})
export class heroesModule{}