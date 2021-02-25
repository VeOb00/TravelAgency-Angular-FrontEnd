import { Component, OnChanges, OnInit, Input } from '@angular/core';
import { TravelDestinationsService } from './travel-destinations.service';
import { TravelDestination } from './travel-destinations';
import { faCoffee, faPlane, faStar } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-travels-page',
  templateUrl: './travels-page.component.html',
  styleUrls: ['./travels-page.component.scss'],
})
export class TravelsPageComponent implements OnInit {
  travelDestinations: TravelDestination[];
  continents: Set<string> = new Set();
  visibletDestinations: TravelDestination[] = [];

  filterBy: string = 'none';
  sortBy: string;

  faBreakfast = faCoffee;
  faCalender = faCalendarAlt;
  faClock = faClock;
  faPlane = faPlane;
  faStar = faStar;


  constructor(private travelDestinationsService: TravelDestinationsService) {}

  ngOnInit(): void {
    this.travelDestinationsService.getAll().subscribe((data) => {
      this.travelDestinations = data;
      this.visibletDestinations = data;
      this.continents = new Set(
        this.travelDestinations.map((e) => e.continent)
      );
      this.filterBy = 'all';
      this.setSort('name');
    });
  }

  public filterByContinent(filter: string) {
    if (filter === 'all') {
      this.visibletDestinations = this.travelDestinations.slice(0);
    } else {
      this.visibletDestinations = this.travelDestinations.filter(
        (destination) => {
          return destination.continent === filter;
        }
      );
    }
  }

  public setFilter(filter: string) {
    this.filterBy = filter;
    this.filterByContinent(this.filterBy);
  }

  public setSort(sort: string) {
    this.sortBy = sort;
    if (this.sortBy === 'name') {
      return this.visibletDestinations.sort((a, b) =>
        this.compare(a, b, 'destinationPlace')
      );
    } else if (this.sortBy === 'date') {
      return this.visibletDestinations.sort((a, b) =>
        this.compare(a, b, 'startDate')
      );
    } else {
      return this.visibletDestinations.sort((a, b) =>
        this.compare(a, b, 'price')
      );
    }
  }

  public compare(
    a: TravelDestination,
    b: TravelDestination,
    property: string
  ): number {
    if (a[property] < b[property]) {
      return -1;
    } else if (a[property] > b[property]) {
      return 1;
    } else return 0;
  }
}
