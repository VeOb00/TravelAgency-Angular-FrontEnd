import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TravelDestinationsService } from '../travel-destinations.service';
import { TravelDestination } from '../travel-destinations';

@Injectable({
  providedIn: 'root',
})
export class TravelDestinationResolver implements Resolve<TravelDestination> {
  constructor(private travelDestinationsService: TravelDestinationsService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<TravelDestination> {
    return this.travelDestinationsService.get(+route.params['destinationId']);
  }
}
