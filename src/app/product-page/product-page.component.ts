import { Product } from './../models/product';
import { ProductService } from './../services/product.service';
import { Component, inject, OnInit } from '@angular/core';

import { ProductCardListComponent } from '../product-card-list/product-card-list.component';
import { Router } from '@angular/router';
import { PaginationComponent } from '../pagination/pagination.component';
import { BehaviorSubject, merge, switchMap } from 'rxjs';

@Component({
  selector: 'app-product-page',
  imports: [PaginationComponent, ProductCardListComponent],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss',
})
export class ProductPageComponent implements OnInit {
  private router = inject(Router);

  products: Product[] = [];

  productService = inject(ProductService);

  private readonly pageIndex$ = new BehaviorSubject(1);
  get pageIndex() {
    return this.pageIndex$.value;
  }
  set pageIndex(value: number) {
    this.pageIndex$.next(value);
  }

  pageSize = 5;

  totalCount = 0;

  ngOnInit(): void {
    this.pageIndex$
      .pipe(
        switchMap(() =>
          this.productService.getList(undefined, this.pageIndex, this.pageSize)
        )
      )
      .subscribe(({ data, count }) => {
        this.products = data;
        this.totalCount = count;
      });
  }

  onView(product: Product): void {
    this.router.navigate(['product', 'view', product.id]);
  }

  onEdit(product: Product): void {
    this.router.navigate(['product', 'form', product.id]);
  }
}
