import {
  booleanAttribute,
  Component,
  HostBinding,
  input,
  Input,
  model,
  numberAttribute,
  output,
} from '@angular/core';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  readonly id = input.required<number, string | number>({
    transform: numberAttribute,
  });

  readonly productName = input<string>();

  readonly company = input<string>();

  readonly author = input<string>();

  readonly isShow = input.required<boolean, string | boolean>({
    transform: booleanAttribute,
  });

  readonly photoUrl = input<string>();

  readonly edit = output<void>();

  readonly view = output<void>();

  @HostBinding('class')
  class = 'app-product-card';
}
