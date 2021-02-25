import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

import { NavbarComponent } from './components/navbar/navbar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { TravelsPageComponent } from './travels-page/travels-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { ShoppingCartPageComponent } from './shopping-cart-page/shopping-cart-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { TravelDestinationDetailsComponent } from './travels-page/travel-destination-details/travel-destination-details.component';
import { BlogpostComponent } from './blog-page/blogpost/blogpost.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { GeneralErrorHandler } from "./shared/general-error-handler";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { durationPipe } from './travels-page/duration.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    BlogPageComponent,
    TravelsPageComponent,
    FooterComponent,
    ShoppingCartPageComponent,
    ContactPageComponent,
    TravelDestinationDetailsComponent,
    BlogpostComponent,
    NotFoundPageComponent,
    durationPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [{provide: ErrorHandler, useClass: GeneralErrorHandler}],
  bootstrap: [AppComponent]
})
export class AppModule { }
