import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from "../shopping-cart.service";

@Component({
  selector: 'app-shopping-cart-page',
  templateUrl: './shopping-cart-page.component.html',
  styleUrls: ['./shopping-cart-page.component.scss']
})
export class ShoppingCartPageComponent implements OnInit {
    travelDestinations;
    priceCalculation;

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
      this.travelDestinations = this.shoppingCartService.getDestinations();
      this.priceCalculation = this.shoppingCartService.calculateTotal();
  }

}
