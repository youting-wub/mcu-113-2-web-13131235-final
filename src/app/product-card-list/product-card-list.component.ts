import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-card-list',
  imports: [ProductCardComponent],
  templateUrl: './product-card-list.component.html',
  styleUrl: './product-card-list.component.scss',
})
export class ProductCardListComponent {
  product = new Product({
    name: 'A 產品',
    authors: '作者A、作者B、作者C',
    company: '博碩文化',
    isShow: true,
    photoUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
  });
  onSetDisplay(isShow: boolean): void {
    this.product.isShow = isShow;
  }
}
