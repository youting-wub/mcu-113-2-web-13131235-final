import { Product } from './../models/product';
import { ProductService } from './../services/product.service';
import { Component, computed, inject, OnInit } from '@angular/core';

import { ProductCardListComponent } from '../product-card-list/product-card-list.component';
import { Router } from '@angular/router';
import { PaginationComponent } from '../pagination/pagination.component';
import {
  BehaviorSubject,
  combineLatest,
  count,
  merge,
  startWith,
  switchMap,
} from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-product-page',
  imports: [PaginationComponent, ProductCardListComponent],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss',
})
export class ProductPageComponent {
  private router = inject(Router);

  productService = inject(ProductService);

  private readonly pageIndex$ = new BehaviorSubject(1);
  get pageIndex() {
    return this.pageIndex$.value;
  }
  set pageIndex(value: number) {
    this.pageIndex$.next(value);
  }

  pageSize = 5;

  private readonly data$ = combineLatest([
    this.pageIndex$.pipe(startWith(undefined)),
  ]).pipe(
    switchMap(() =>
      this.productService.getList(undefined, this.pageIndex, this.pageSize)
    )
  );
  private readonly data = toSignal(this.data$, {
    initialValue: { data: [], count: 0 },
  });

  readonly totalCount = computed(() => {
    const { count } = this.data();
    return count;
  });

  readonly products = computed(() => {
    const { data } = this.data();
    return data;
  });
  // ngOnInit(): void {
  //   combineLatest([this.pageIndex$.pipe(startWith(undefined))])
  //     .pipe(
  //       switchMap(() =>
  //         this.productService.getList(undefined, this.pageIndex, this.pageSize)
  //       )
  //     )
  //     .subscribe(({ data, count }) => {
  //       this.products = data;
  //       this.totalCount = count;
  //     });
  // }

  onView(product: Product): void {
    this.router.navigate(['product', 'view', product.id]);
  }

  onEdit(product: Product): void {
    this.router.navigate(['product', 'form', product.id]);
  }
}
