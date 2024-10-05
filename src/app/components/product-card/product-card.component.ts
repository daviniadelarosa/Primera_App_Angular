import { Component, Input } from '@angular/core';
import Product from '../../interfaces/product.interface';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'product-card',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

  @Input() product: Product = {
    name: '', price: 0, stock: 0, department: ''
  };

}
