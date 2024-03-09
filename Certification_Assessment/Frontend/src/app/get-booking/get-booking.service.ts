import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BuffetBooking } from '../buffet-booking/buffet-booking';


@Injectable({
  providedIn: 'root'
})
export class GetBookingService {

  constructor(private http: HttpClient) { }

  getBooking(id) {
    /*
    Consumes the web service exposed at the URI -> http://localhost:3000/buffetBookings/:id
    After sending the request, the response must be converted to an observable object of type BuffetBooking
    Return the response back to the Get booking Component
  */
  }
}
