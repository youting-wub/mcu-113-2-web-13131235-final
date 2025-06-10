import { Component } from '@angular/core';

import { ProductCardListComponent } from './product-card-list/product-card-list.component';
import { Product } from './models/product';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  imports: [ProductCardListComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  products = [
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
  ];
}
