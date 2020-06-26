import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { TravelsPageComponent } from './travels-page/travels-page.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { ShoppingCartPageComponent } from './shopping-cart-page/shopping-cart-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';


const routes: Routes = [
    {
        path: "", component: HomePageComponent
    },
    {
        path: "travels", component: TravelsPageComponent
    },
    {
        path: "blog", component: BlogPageComponent
    },
    {
        path: "checkout", component: ShoppingCartPageComponent
    },
    {
        path: "contact", component: ContactPageComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
