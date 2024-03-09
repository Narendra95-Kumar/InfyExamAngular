import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BuffetBooking } from './buffet-booking';

@Injectable()
export class BuffetBookingService {
  url = ''; /*Provide the URL of the web service to consume*/

  constructor(private httpClient: HttpClient) { }

  /*
    Consumes the web service exposed at the URI -> http://localhost:3000/buffetBookings
    After sending the request, the response must be converted to an observable object of type BuffetBooking
    Return the response back to the Buffet Booking Component
  */
  bookBuffet(data) {}

}
