import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { travelDestinations } from "../travels-page/travel-destinations";
import { ShoppingCartService } from "../shopping-cart.service";

@Component({
    selector: 'app-travel-destination-details',
    templateUrl: './travel-destination-details.component.html',
    styleUrls: ['./travel-destination-details.component.scss']
})
export class TravelDestinationDetailsComponent implements OnInit {
    travelDestination;

    constructor(private route: ActivatedRoute, private shoppingCartService: ShoppingCartService) { }

    addToCart(travelDestination) {
        window.alert("Your destination has been added to the cart!");
        this.shoppingCartService.addToCart(travelDestination);
    }
    ngOnInit(): void {
        this.route.paramMap.subscribe(params => {
            this.travelDestination = travelDestinations[+params.get('destinationId')];
        });
    }

}
