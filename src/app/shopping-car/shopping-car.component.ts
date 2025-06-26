import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ProductService } from '../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/product';

@Component({
  selector: 'app-shopping-car',
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './shopping-car.component.html',
  styleUrl: './shopping-car.component.scss',
})
export class ShoppingCarComponent {
  private readonly router = inject(Router);

  private readonly route = inject(ActivatedRoute);

  private readonly productService = inject(ProductService);

  form = new FormGroup({
    id: new FormControl<string | null>(null),
    name: new FormControl<string | null>(null, {
      validators: [Validators.required],
    }),
    authors: new FormArray<FormControl<string[] | null>>([]),
    company: new FormControl<string | null>(null, {
      validators: [Validators.required],
    }),
    price: new FormControl<number | null>(null, {
      validators: [Validators.required],
    }),
    isShow: new FormControl<boolean>(true, { nonNullable: true }),
  });

  get id(): FormControl<string | null> {
    return this.form.get('id') as FormControl<string | null>;
  }

  get name(): FormControl<string | null> {
    return this.form.get('name') as FormControl<string | null>;
  }

  get authors(): FormArray<FormControl<string | null>> {
    return this.form.get('authors') as FormArray<FormControl<string | null>>;
  }

  get company(): FormControl<string | null> {
    return this.form.get('company') as FormControl<string | null>;
  }

  get isShow(): FormControl<boolean> {
    return this.form.get('isShow') as FormControl<boolean>;
  }

  get price(): FormControl<string | null> {
    return this.form.get('price') as FormControl<string | null>;
  }
  onSave(): void {
    const formData = new Product({
      id: this.id.value || undefined,
      name: this.name.value!,
      authors: this.authors.value.map((author) => author!),
      company: this.company.value!,
      isShow: this.isShow.value,
      photoUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
    });
    const action$ = this.id.value
      ? this.productService.update(formData)
      : this.productService.add(formData);
    action$.subscribe(() => this.router.navigate(['products']));
  }
}
