import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { delay, filter, map, mergeMap, Observable, of, toArray } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private _data: Product[] = [
    new Product({
      id: '1',
      name: 'A 產品',
      authors: ['作者A、作者B、作者C'],
      company: '博碩文化',
      isShow: true,
      photoUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
    }),
    new Product({
      id: '2',
      name: 'B 產品',
      authors: ['作者A、作者B、作者C'],
      company: '博碩文化',
      isShow: true,
      photoUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
    }),
    new Product({
      id: '3',
      name: 'C 產品',
      authors: ['作者A、作者B、作者C'],
      company: '博碩文化',
      isShow: true,
      photoUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
    }),
    new Product({
      id: '4',
      name: 'D 產品',
      authors: ['作者A、作者B、作者C'],
      company: '博碩文化',
      isShow: true,
      photoUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
    }),
    new Product({
      id: '5',
      name: 'E 產品',
      authors: ['作者A、作者B、作者C'],
      company: '博碩文化',
      isShow: true,
      photoUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
    }),
    new Product({
      id: '6',
      name: 'F 產品',
      authors: ['作者A、作者B、作者C'],
      company: '博碩文化',
      isShow: true,
      photoUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
    }),
    new Product({
      id: '7',
      name: 'G 產品',
      authors: ['作者A、作者B、作者C'],
      company: '博碩文化',
      isShow: true,
      photoUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
    }),
    new Product({
      id: '8',
      name: 'H 產品',
      authors: ['作者A、作者B、作者C'],
      company: '博碩文化',
      isShow: true,
      photoUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
    }),
    new Product({
      id: '9',
      name: 'I 產品',
      authors: ['作者A、作者B、作者C'],
      company: '博碩文化',
      isShow: true,
      photoUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
    }),
    new Product({
      id: '10',
      name: 'J 產品',
      authors: ['作者A、作者B、作者C'],
      company: '博碩文化',
      isShow: true,
      photoUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
    }),
  ];

  getById(productId: string): Observable<Product> {
    return of(this._data).pipe(
      mergeMap((data) => data),
      filter(({ id }) => id === productId)
    );
    // return this._data.find(({ id }) => id === productId)!;
  }

  getList(
    name: string | undefined,
    index: number,
    size: number
  ): Observable<{ data: Product[]; count: number }> {
    return of(this._data).pipe(
      mergeMap((data) => data),
      filter((item) => (name ? item.name === name : true)),
      toArray(),
      map((data) => {
        const startIndex = (index - 1) * size;
        const endIndex = startIndex + size;
        return { data: data.slice(startIndex, endIndex), count: data.length };
      }),
      delay(500)
    );
  }
  add(product: Readonly<Product>): Observable<Product> {
    const id =
      this._data.length === 0
        ? 1
        : Math.max(...this._data.map(({ id }) => +id)) + 1;
    const newProduct = new Product({ ...product, id: id.toString() });
    this._data.push(newProduct);
    return of(newProduct);
  }

  update(product: Readonly<Product>): Observable<Product> {
    throw new Error('Not implement');
  }
}
