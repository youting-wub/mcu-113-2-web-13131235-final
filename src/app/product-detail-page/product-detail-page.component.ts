import { Component, inject } from '@angular/core';
import { Product } from '../models/product';
import { CurrencyPipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-detail-page',
  imports: [CurrencyPipe],
  templateUrl: './product-detail-page.component.html',
  styleUrl: './product-detail-page.component.scss',
})
export class ProductDetailPageComponent {
  product = new Product({
    name: 'B 產品',
    authors: '作者A、作者B、作者C',
    company: '博碩文化',
    isShow: true,
    photoUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
  });

  readonly router = inject(Router);

  onEdit(): void {
    this.router.navigate(['product', 'form']);
  }

  onBack(): void {
    this.router.navigate(['products']);
  }
}
