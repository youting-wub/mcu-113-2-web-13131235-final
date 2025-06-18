import { Product } from './../models/product';
import { ProductService } from './../services/product.service';
import { Component, computed, inject, OnInit, signal } from '@angular/core';

import { ProductCardListComponent } from '../product-card-list/product-card-list.component';
import { Router } from '@angular/router';
import { PaginationComponent } from '../pagination/pagination.component';
import {
  BehaviorSubject,
  combineLatest,
  count,
  merge,
  single,
  startWith,
  switchMap,
} from 'rxjs';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-product-page',
  imports: [PaginationComponent, ProductCardListComponent],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss',
})
export class ProductPageComponent {
  private router = inject(Router);

  productService = inject(ProductService);

  readonly pageIndex = signal(1);

  readonly pageSize = signal(5);

  private readonly data = rxResource({
    request: () => ({ pageIndex: this.pageIndex(), pageSize: this.pageSize() }),
    defaultValue: { data: [], count: 0 },
    loader: ({ request }) => {
      const { pageIndex, pageSize } = request;
      return this.productService.getList(undefined, pageIndex, pageSize);
    },
  });

  readonly totalCount = computed(() => {
    const { count } = this.data.value();
    return count;
  });

  readonly products = computed(() => {
    const { data } = this.data.value();
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
