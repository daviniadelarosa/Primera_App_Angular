import { Component, Input } from '@angular/core';

@Component({
  selector: 'profile-card',
  standalone: true,
  imports: [],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.css'
})
export class ProfileCardComponent {

  @Input() name: string = '';
  @Input() surname: string = '';
  @Input() email: string = '';
  @Input() age: number = 0;

}
