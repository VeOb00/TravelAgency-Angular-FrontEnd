import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shared/shopping-cart.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-shopping-cart-page',
  templateUrl: './shopping-cart-page.component.html',
  styleUrls: ['./shopping-cart-page.component.scss'],
})
export class ShoppingCartPageComponent implements OnInit {
  travelDestinations;
  priceCalculation;
  checkoutForm;

  constructor(
    private shoppingCartService: ShoppingCartService,
    private formBuilder: FormBuilder
  ) {
    this.checkoutForm = this.formBuilder.group({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      zip: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.email, Validators.required]),
    });
  }

  ngOnInit(): void {
    this.travelDestinations = this.shoppingCartService.getDestinations();
    this.priceCalculation = this.shoppingCartService.calculateTotal();
  }

  onSubmit(customerData) {
    if (this.checkoutForm.valid) {
      window.alert('Your order has been submitted');
      this.travelDestinations = this.shoppingCartService.clearCart();
      this.checkoutForm.reset();
    } else {
      window.alert('Please fill out all the required fields correctly');
    }
  }
}
