import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { BuffetBooking } from './buffet-booking';
import { catchError, map} from 'rxjs/operators';


@Injectable()

export class BuffetBookingService {
  baseUrl = 'http://localhost:3000'; /*Provide the URL of the web service to consume*/

  constructor(private httpClient: HttpClient) { }

  /*
    Consumes the web service exposed at the URI -> http://localhost:3000/buffetBookings
    After sending the request, the response must be converted to an observable object of type BuffetBooking
    Return the response back to the Buffet Booking Component
  */
  bookBuffet(bookingData: any) : Observable<any>{
    return this.httpClient.post(`${this.baseUrl}/buffetBookings`, bookingData).pipe(
      map((response: any) => {
        return response.message; // Extract message from response
      }),
      catchError((error: any) => {
        return throwError(error.error.message); // Handle error response
      })
    );
  }

}
