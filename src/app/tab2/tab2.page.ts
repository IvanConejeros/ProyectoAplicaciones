import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,

})
export class Tab2Page {
  usuario: string='';
  nombre: string='';
  apellidos: string='';
  constructor() {}

  capturaDatos() {
    console.log("Usuario ->",this.usuario);
    console.log("Usuario ->",this.nombre);
    console.log("Usuario ->",this.apellidos);
  }

}
