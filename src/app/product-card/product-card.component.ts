import {
  booleanAttribute,
  Component,
  HostBinding,
  input,
  Input,
  model,
} from '@angular/core';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  readonly productName = input<string>();

  readonly company = input<string>();

  readonly author = input<string>();

  readonly isShow = model.required<boolean>();

  readonly photoUrl = input<string>();

  @HostBinding('class')
  class = 'app-product-card';

  onSetDisplay(isShow: boolean): void {
    this.isShow.set(isShow);
  }
}
