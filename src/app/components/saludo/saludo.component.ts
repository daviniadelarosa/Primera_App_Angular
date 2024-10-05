import { Component } from '@angular/core';

@Component({
  selector: 'saludo',
  standalone: true,
  imports: [],
  templateUrl: './saludo.component.html',
  styleUrl: './saludo.component.css'
})
export class SaludoComponent {

  nombre: string = 'Rigoberto';

  constructor() {
    setTimeout(() => {
      this.nombre = 'Lorenzo';
    }, 3000);
  }

  mostrarMensaje() {
    return 'Este es mi mensaje';
  }

}
