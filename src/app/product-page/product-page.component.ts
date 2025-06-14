import { ProductService } from './../services/product.service';
import { Component, inject, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductCardListComponent } from '../product-card-list/product-card-list.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-page',
  imports: [ProductCardListComponent],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss',
})
export class ProductPageComponent implements OnInit {
  private router = inject(Router);

  products: Product[] = [];

  productService = inject(ProductService);

  ngOnInit(): void {
    this.products = this.productService.getList();
  }

  onView(product: Product): void {
    this.router.navigate(['product', 'view']);
  }

  onEdit(product: Product): void {
    this.router.navigate(['product', 'form']);
  }
}
