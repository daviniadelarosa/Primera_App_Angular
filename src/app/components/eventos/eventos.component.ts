import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos',
  standalone: true,
  imports: [],
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.css'
})
export class EventosComponent {

  mensaje: string = '';

  manejarClick() {
    console.log('Funsiona!!!');
  }

  manejarInput($event: Event) {
    if ($event.target) {
      const htmlInput = $event.target as HTMLInputElement;
      this.mensaje = htmlInput.value;
    }
  }

  onMouseEnter($event: MouseEvent) {
    const div = $event.target as HTMLDivElement;
    div.style.backgroundColor = 'red';
  }

  onMouseLeave($event: MouseEvent) {
    const div = $event.target as HTMLDivElement;
    div.style.backgroundColor = 'rebeccapurple';
  }

}
