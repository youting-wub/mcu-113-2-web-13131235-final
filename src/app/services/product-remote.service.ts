import { Item } from './../../../node_modules/json-server/lib/service.d';
import { Product } from './../models/product';
import { inject, Injectable } from '@angular/core';
import { ProductService } from './product.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductRemoteService extends ProductService {
  private readonly url = 'http://localhost:3000/products';

  private readonly httpClient = inject(HttpClient);

  override getById(productId: string): Observable<Product> {
    const url = `${this.url}/${productId}`;
    return this.httpClient.get<Product>(url);
  }

  override getList(
    name: string | undefined,
    index: number,
    size: number
  ): Observable<{ data: Product[]; count: number }> {
    const params = new HttpParams({
      fromObject: { _page: index, _per_page: size },
    });
    return this.httpClient
      .get<{ data: Product[]; item: number }>(this.url, { params })
      .pipe(map(({ data, item: count }) => ({ data, count })));
  }
}
