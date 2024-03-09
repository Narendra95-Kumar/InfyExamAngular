/*
  Add the route paths to navigate to appropriate
  1. /bookBuffet -> BuffetBookingComponent
  2. /getbooking -> GetBookingComponent
  3. In case an Invalid URL is provided, the user must be redirected to the bookBuffet page.
  */

 import { NgModule } from '@angular/core';
 import { Routes, RouterModule } from '@angular/router';

 export const routes: Routes = [];

 @NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
 })
 export class AppRoutingModule { }
