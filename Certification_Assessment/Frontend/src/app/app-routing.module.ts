/*
  Add the route paths to navigate to appropriate
  1. /bookBuffet -> BuffetBookingComponent
  2. /getbooking -> GetBookingComponent
  3. In case an Invalid URL is provided, the user must be redirected to the bookBuffet page.
  */

 import { NgModule } from '@angular/core';
 import { Routes, RouterModule } from '@angular/router';
 import {BuffetBookingComponent} from './buffet-booking/buffet-booking.component';
 import {GetBookingComponent} from './get-booking/get-booking.component';

 export const routes: Routes = [
  { path: 'bookBuffet', component: BuffetBookingComponent },
  { path: 'getbooking', component: GetBookingComponent },
  // Add other routes as needed
 ];

 @NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
 })
 export class AppRoutingModule { }
