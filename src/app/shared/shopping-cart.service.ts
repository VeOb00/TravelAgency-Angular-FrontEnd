import { Injectable } from '@angular/core';
import { TravelDestination } from '../travels-page/travel-destinations';

@Injectable({
    providedIn: 'root'
})
export class ShoppingCartService {
    chosenDestinations: TravelDestination[] = [];

    constructor() { }

    addToCart(travelDestinations: TravelDestination) {
        this.chosenDestinations.push(travelDestinations);
    }

    getDestinations() {
        return this.chosenDestinations;
    }

    clearCart() {
        this.chosenDestinations = [];
        return this.chosenDestinations;
    }

    calculateTotal() {
        let calculateTotal: number = 0;
        this.chosenDestinations.forEach((destination) => {
            calculateTotal += destination.price 
        })
        let discount: number = 0;
        if (calculateTotal >= 500) {
            discount = calculateTotal*0.2
        } else if (calculateTotal >= 200) {
            discount = calculateTotal*0.1
        }

        let finalPrice = calculateTotal - discount;
        return {
            calculateTotal,
            discount,
            finalPrice
        }

    }

}
