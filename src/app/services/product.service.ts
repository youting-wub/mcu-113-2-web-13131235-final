import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { delay, filter, map, mergeMap, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private _data: Product[] = [
    new Product({
      id: 1,
      name: 'A 產品',
      authors: '作者A、作者B、作者C',
      company: '博碩文化',
      isShow: true,
      photoUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
    }),
    new Product({
      id: 2,
      name: 'B 產品',
      authors: '作者A、作者B、作者C',
      company: '博碩文化',
      isShow: true,
      photoUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
    }),
    new Product({
      id: 3,
      name: 'C 產品',
      authors: '作者A、作者B、作者C',
      company: '博碩文化',
      isShow: true,
      photoUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
    }),
    new Product({
      id: 4,
      name: 'D 產品',
      authors: '作者A、作者B、作者C',
      company: '博碩文化',
      isShow: true,
      photoUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
    }),
    new Product({
      id: 5,
      name: 'E 產品',
      authors: '作者A、作者B、作者C',
      company: '博碩文化',
      isShow: true,
      photoUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
    }),
    new Product({
      id: 6,
      name: 'F 產品',
      authors: '作者A、作者B、作者C',
      company: '博碩文化',
      isShow: true,
      photoUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
    }),
    new Product({
      id: 7,
      name: 'G 產品',
      authors: '作者A、作者B、作者C',
      company: '博碩文化',
      isShow: true,
      photoUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
    }),
    new Product({
      id: 8,
      name: 'H 產品',
      authors: '作者A、作者B、作者C',
      company: '博碩文化',
      isShow: true,
      photoUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
    }),
    new Product({
      id: 9,
      name: 'I 產品',
      authors: '作者A、作者B、作者C',
      company: '博碩文化',
      isShow: true,
      photoUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
    }),
    new Product({
      id: 10,
      name: 'J 產品',
      authors: '作者A、作者B、作者C',
      company: '博碩文化',
      isShow: true,
      photoUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
    }),
  ];

  getById(productId: number): Observable<Product> {
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
    const startIndex = (index - 1) * size;
    const endIndex = startIndex + size;
    const data = name
      ? this._data.filter((item) => item.name === name)
      : [...this._data];
    return of({
      data: data.slice(startIndex, endIndex),
      count: this._data.length,
    }).pipe(delay(1000));
  }
}
