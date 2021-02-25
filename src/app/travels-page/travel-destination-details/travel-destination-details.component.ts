import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TravelDestination } from '../travel-destinations';
import { ShoppingCartService } from '../../shared/shopping-cart.service';
import {
  faCalendarAlt,
  faClock,
  faCoffee,
  faPlane,
  faStar,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-travel-destination-details',
  templateUrl: './travel-destination-details.component.html',
  styleUrls: ['./travel-destination-details.component.scss'],
})
export class TravelDestinationDetailsComponent implements OnInit {
  travelDestination: TravelDestination;
  faBreakfast = faCoffee;
  faCalender = faCalendarAlt;
  faClock = faClock;
  faPlane = faPlane;
  faStar = faStar;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private shoppingCartService: ShoppingCartService
  ) {}

  addToCart(travelDestination: TravelDestination) {
    window.alert('Your destination has been added to the cart!');
    this.shoppingCartService.addToCart(travelDestination);
  }
  ngOnInit(): void {
    this.route.data.forEach((data) => {
      this.travelDestination = data['destination'];
    });
    if (this.travelDestination == null) {
      this.router.navigate(['/travels']);
    }
  }
}
