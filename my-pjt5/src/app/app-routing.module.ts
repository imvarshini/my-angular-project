import { ERROR_COMPONENT_TYPE } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { LaptopComponent } from './laptop/laptop.component';
import { MobileComponent } from './mobile/mobile.component';
import { ProductsComponent } from './products/products.component';
import { TvComponent } from './tv/tv.component';

const routes: Routes = [
  
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'landing',component:LandingComponent},
  {path:'contact',component:ContactComponent},
  {path:'product',component:ProductsComponent, children:[
    
    {path:'mobile',component:MobileComponent},
    {path:'laptop',component:LaptopComponent},
    {path:'tv',component:TvComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
