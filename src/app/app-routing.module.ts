import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { TravelsPageComponent } from './travels-page/travels-page.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { ShoppingCartPageComponent } from './shopping-cart-page/shopping-cart-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { TravelDestinationDetailsComponent } from './travels-page/travel-destination-details/travel-destination-details.component';
import { BlogpostComponent } from './blog-page/blogpost/blogpost.component';
import { TravelDestinationResolver } from './travels-page/travel-destination-details/travel-destination.resolver';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { BlogPostResolver } from './blog-page/blogpost/blogpost.resolver';

const routes: Routes = [
  {
    path: 'destinationDetail/:destinationId',
    component: TravelDestinationDetailsComponent,
    resolve: { destination: TravelDestinationResolver },
  },
  {
    path: 'blogpost/:postID',
    component: BlogpostComponent,
	resolve: { blogpost: BlogPostResolver }
  },
  {
    path: 'travels',
    component: TravelsPageComponent,
  },
  {
    path: 'blog',
    component: BlogPageComponent,
  },
  {
    path: 'checkout',
    component: ShoppingCartPageComponent,
  },
  {
    path: 'contact',
    component: ContactPageComponent,
  },
  {
    path: '',
    redirectTo: 'home', pathMatch: 'full' 
  },
  {
    path: 'home',
    component: HomePageComponent,
  },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
