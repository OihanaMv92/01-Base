import { Component, OnInit } from '@angular/core';




interface Animal{
  nombre:string;
  poder:number
}

@Component({
  selector: 'app-main-pagina',
  templateUrl: './main-pagina.component.html',

})
export class MainPaginaComponent {


animales: Animal[] =[{
  nombre:'Wartortle',
  poder: 840
},{
  nombre: 'pichu',
  poder: 999
}
]

  nuevo: Animal = {
    nombre: '',
    poder: 0
  }
  // crear la funcion.
  agregar(){
    if(this.nuevo.nombre.trim().length ===0){
      return;
    }
    console.log(this.nuevo);

    this.animales.push(this.nuevo);
    this.nuevo={
      nombre:'',
      poder:0
    }
    
  }
 
}
