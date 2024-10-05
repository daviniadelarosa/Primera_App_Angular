import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'suma',
  standalone: true,
  imports: [],
  templateUrl: './suma.component.html',
  styleUrl: './suma.component.css'
})
export class SumaComponent {

  @Input() num1: number = 0;
  @Input() num2: number = 0;

  @Output() resultadoObtenido: EventEmitter<number> = new EventEmitter();

  resultado: number = 0;

  onClick() {
    this.resultado = this.num1 + this.num2;
    //! Se calcula el resultado
    this.resultadoObtenido.emit(this.resultado);
  }

}