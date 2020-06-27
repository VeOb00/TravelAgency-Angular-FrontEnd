import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

import { NavbarComponent } from './navbar/navbar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { TravelsPageComponent } from './travels-page/travels-page.component';
import { FooterComponent } from './footer/footer.component';
import { ShoppingCartPageComponent } from './shopping-cart-page/shopping-cart-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { TravelDestinationDetailsComponent } from './travel-destination-details/travel-destination-details.component';
import { BlogpostComponent } from './blogpost/blogpost.component';

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
    BlogpostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
