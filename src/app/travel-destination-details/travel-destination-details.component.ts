import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { travelDestinations } from "../travels-page/travel-destinations";

@Component({
    selector: 'app-travel-destination-details',
    templateUrl: './travel-destination-details.component.html',
    styleUrls: ['./travel-destination-details.component.scss']
})
export class TravelDestinationDetailsComponent implements OnInit {
    travelDestination;

    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.route.paramMap.subscribe(params => {
            this.travelDestination = travelDestinations[+params.get('destinationId')];
        });
    }

}
