import { ErrorHandler, Injectable, Injector, NgZone } from "@angular/core";
import { Router } from "@angular/router";

@Injectable()
export class GeneralErrorHandler implements ErrorHandler {
	private router: Router;

	constructor(injector: Injector, private zone: NgZone) {
		this.router = injector.get(Router);
	}
	handleError(error) {
	  console.log(error);
	  this.zone.run(() => this.router.navigate(["/404"]));
	}
  }