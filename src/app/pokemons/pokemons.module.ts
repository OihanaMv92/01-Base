import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPaginaComponent } from './main-pagina/main-pagina.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    MainPaginaComponent,
    
  ],exports:[
MainPaginaComponent
  ],
  imports: [
    CommonModule,
    // añadir el modulo de formularios
    FormsModule
    

  ]
})
export class PokemonsModule { }
