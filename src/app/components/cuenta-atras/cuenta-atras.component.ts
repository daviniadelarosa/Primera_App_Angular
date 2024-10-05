import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'cuenta-atras',
  standalone: true,
  imports: [],
  templateUrl: './cuenta-atras.component.html',
  styleUrl: './cuenta-atras.component.css'
})
export class CuentaAtrasComponent {

  @Input() inicio: number = 10;
  @Input() fin: number = 0;

  @Output() cuentaTerminada: EventEmitter<string> = new EventEmitter();

  onClick() {
    const interval = setInterval(() => {
      this.inicio--;
      if (this.inicio === this.fin) {
        clearInterval(interval);
        //! Termina la cuenta atrás
        this.cuentaTerminada.emit('Ha terminado la cuenta atrás');
      }
    }, 1000);
  }

}