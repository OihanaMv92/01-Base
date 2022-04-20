import {Component} from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
<h1>Hola Mundo!!</h1>
<h2>{{titulo}}</h2>
<h3>la base es: <strong>{{base}}</strong></h3>
<!-- llamamos a la funcion acumular -->
<button (click)="acumular(base)">{{base}}</button>

<span>{{numero}}</span>

<!-- Sumas dentro de la funcion de click (cada vez que de click hace sumar 1) -->

<!-- <button (click)="numero = numero-1;">-1</button> -->
<button (click)="acumular(-base)">{{-base}}</button>


    `
})

export class ContadorComponent{
    titulo: string = 'Contador App';
    numero:number = 10;
    base:number =5;
  
  
    sumar(){
  this.numero += 1;
    }
  
    acumular(valor:number){
  this.numero += valor;
    }
  
}