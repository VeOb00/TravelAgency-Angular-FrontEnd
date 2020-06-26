import { Component, OnInit } from '@angular/core';
import { travelDestinations } from "./travel-destinations";

@Component({
  selector: 'app-travels-page',
  templateUrl: './travels-page.component.html',
  styleUrls: ['./travels-page.component.scss']
})
export class TravelsPageComponent implements OnInit {
    travelDestinations = travelDestinations;

  constructor() { }

  ngOnInit(): void {
  }

}
