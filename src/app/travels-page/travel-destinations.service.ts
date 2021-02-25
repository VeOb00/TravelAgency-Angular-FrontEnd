import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { FakeHttpClient } from '../shared/fake-http.client';
import {
  TravelDestination,
  TravelDestinationBackendRaw,
} from '../travels-page/travel-destinations';

@Injectable({
  providedIn: 'root',
})
export class TravelDestinationsService {
  constructor(private httpClient: FakeHttpClient) {}

  public getAll(): Observable<TravelDestination[]> {
    return this.httpClient
      .get<TravelDestinationBackendRaw[]>('/api/destinations')
      .pipe(map((rawDestinations) => this.mapToDestination(rawDestinations)));
  }

  public get(destinationId: number): Observable<TravelDestination> {
    return this.httpClient
      .get<TravelDestinationBackendRaw>(`/api/destinations/${destinationId}`)
      .pipe(
        map((destinationRaw) => {
          return this.toDestination(destinationRaw);
        })
      );
  }

  private mapToDestination(
    destinationsRaw: TravelDestinationBackendRaw[]
  ): TravelDestination[] {
    return destinationsRaw.map((rawDestination) =>
      this.toDestination(rawDestination)
    );
  }

  private toDestination(
    rawDestination: TravelDestinationBackendRaw
  ): TravelDestination {
    return new TravelDestination(
      rawDestination.destinationId,
      rawDestination.destinationPlace,
      rawDestination.destinationCountry,
      rawDestination.continent,
      rawDestination.description,
      this.parseDate(rawDestination.startDate),
      rawDestination.duration,
      rawDestination.price,
      rawDestination.currency,
      rawDestination.image,
      rawDestination.descriptionLong,
      rawDestination.image1,
      rawDestination.image2,
      rawDestination.image3,
      rawDestination.image4
    );
  }

  private parseDate(dateString: string): Date {
    return new Date(dateString);
  }
}
