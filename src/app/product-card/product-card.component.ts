import {
  booleanAttribute,
  Component,
  HostBinding,
  input,
  Input,
  model,
  output,
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

  readonly isShow = input.required<boolean, string | boolean>({
    transform: booleanAttribute,
  });

  readonly photoUrl = input<string>();

  readonly view = output<void>();

  @HostBinding('class')
  class = 'app-product-card';
}
