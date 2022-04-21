import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { contadorModule } from './contador/contador.module';
import { heroesModule } from './heroes/heroes.module';
import { DbzModule } from './dbz/dbz.module';
import { PokemonsModule } from './pokemons/pokemons.module';


@NgModule({
  declarations: [
    AppComponent,
    
    // meter el componente creado
   

  ],
  imports: [
    BrowserModule,
    heroesModule,
    contadorModule,
    DbzModule,
    PokemonsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
