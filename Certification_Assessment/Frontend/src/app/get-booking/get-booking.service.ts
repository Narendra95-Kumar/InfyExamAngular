import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { BuffetBooking } from '../buffet-booking/buffet-booking';
import { catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GetBookingService {
  baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getBooking(bookingId: string) : Observable<BuffetBooking> {
    return this.http.get(`${this.baseUrl}/buffetBookings/${bookingId}`).pipe(
      map((response: any) => {
        return response; // Extract message from response
      }),
      catchError((error: any) => {
        return throwError(error.error.message); // Handle error response
      })
    );
  }
 
}
