import { ProductService } from './../services/product.service';
import {
  Component,
  inject,
  input,
  numberAttribute,
  OnInit,
} from '@angular/core';
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
  readonly product = input.required<Product>();

  readonly router = inject(Router);

  private ProductService = inject(ProductService);

  onEdit(): void {
    this.router.navigate(['product', 'form', this.product().id]);
  }

  onBack(): void {
    this.router.navigate(['products']);
  }
}
