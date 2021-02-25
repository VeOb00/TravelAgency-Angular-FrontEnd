import { Component, OnInit } from '@angular/core';
import { faFacebook, faGooglePlus, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faAngleDoubleRight, faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
	faFacebook = faFacebook;
	faTwitter = faTwitter;
	faGoogle = faGooglePlus;
	faInstagram = faInstagram;
	faEnvelope = faEnvelope;
	faAngle = faAngleDoubleRight;

  constructor() { }

  ngOnInit(): void {
  }

}
