import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private _data: Product[] = [
    new Product({
      name: 'A 產品',
      authors: '作者A、作者B、作者C',
      company: '博碩文化',
      isShow: true,
      photoUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
    }),
    new Product({
      name: 'B 產品',
      authors: '作者A、作者B、作者C',
      company: '博碩文化',
      isShow: true,
      photoUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
    }),
    new Product({
      name: 'C 產品',
      authors: '作者A、作者B、作者C',
      company: '博碩文化',
      isShow: true,
      photoUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
    }),
    new Product({
      name: 'D 產品',
      authors: '作者A、作者B、作者C',
      company: '博碩文化',
      isShow: true,
      photoUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
    }),
    new Product({
      name: 'E 產品',
      authors: '作者A、作者B、作者C',
      company: '博碩文化',
      isShow: true,
      photoUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
    }),
    new Product({
      name: 'F 產品',
      authors: '作者A、作者B、作者C',
      company: '博碩文化',
      isShow: true,
      photoUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
    }),
    new Product({
      name: 'G 產品',
      authors: '作者A、作者B、作者C',
      company: '博碩文化',
      isShow: true,
      photoUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
    }),
    new Product({
      name: 'H 產品',
      authors: '作者A、作者B、作者C',
      company: '博碩文化',
      isShow: true,
      photoUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
    }),
    new Product({
      name: 'I 產品',
      authors: '作者A、作者B、作者C',
      company: '博碩文化',
      isShow: true,
      photoUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
    }),
    new Product({
      name: 'J 產品',
      authors: '作者A、作者B、作者C',
      company: '博碩文化',
      isShow: true,
      photoUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
    }),
  ];
  getList(
    name: string | undefined,
    index: number,
    size: number
  ): { data: Product[]; count: number } {
    const startIndex = (index - 1) * size;
    const endIndex = startIndex + size;
    const data = name
      ? this._data.filter((item) => item.name === name)
      : [...this._data];
    return { data: data.slice(startIndex, endIndex), count: this._data.length };
  }
}
