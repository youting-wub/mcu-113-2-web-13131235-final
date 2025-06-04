import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductCardComponent } from './product-card/product-card.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  ProductName = 'A 產品';
  author = '作者A、作者B、作者C';
  company = '博碩文化';
  isShow = true;
  photoUrl = 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img';
}
