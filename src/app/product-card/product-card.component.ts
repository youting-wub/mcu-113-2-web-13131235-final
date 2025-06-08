import { booleanAttribute, Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  @Input()
  productName!: string;

  @Input()
  company!: string;

  @Input()
  author!: string;

  @Input({ transform: booleanAttribute })
  isShow!: boolean;

  @Input()
  photoUrl!: string;

  @HostBinding('class')
  class = 'app-product-card';

  onSetDisplay(isShow: boolean): void {
    this.isShow = isShow;
  }
}
