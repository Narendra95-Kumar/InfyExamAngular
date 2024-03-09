import { Component, OnInit } from '@angular/core';
import { BuffetBooking } from '../buffet-booking/buffet-booking';
import { GetBookingService } from './get-booking.service';

@Component({
  selector: 'app-get-booking',
  templateUrl: './get-booking.component.html',
  styleUrls: ['./get-booking.component.css']
})
export class GetBookingComponent implements OnInit {


  errorMessage: string;
  bookingId: string;
  selectedBooking: BuffetBooking;


  constructor(private getBookingService: GetBookingService) { }

  ngOnInit() {
  }

  getBooking() {
     /*
    It should invoke getBooking(id) of getBookingService
    by passing the value of id as a parameter, which in turn returns a observable
    The success callback should populate the selectedBooking with the data in response
    The error callback should populate the errorMessage with the message in response
  */
   }

}
