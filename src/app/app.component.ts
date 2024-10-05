import { Component } from '@angular/core';

import { SaludoComponent } from './components/saludo/saludo.component';
import { PropiedadesComponent } from './components/propiedades/propiedades.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { CuentaAtrasComponent } from './components/cuenta-atras/cuenta-atras.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { SumaComponent } from './components/suma/suma.component';
import Product from './interfaces/product.interface';
import { FormularioComponent } from './components/formulario/formulario.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SaludoComponent, PropiedadesComponent, EventosComponent, CuentaAtrasComponent, ProfileCardComponent, ProductCardComponent, SumaComponent, FormularioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  arrProductos: Product[] = [
    { name: 'Thermomix', price: 799, stock: 12, department: 'home' },
    { name: 'Camisa con mangas', price: 25.99, stock: 200, department: 'man' },
  ];

  onCuentaTerminada($event: string) {
    console.log($event);
  }

  onResultadoObtenido($event: number) {
    console.log(`Se ha calculado una suma con resultado ${$event}`);
  }

}
