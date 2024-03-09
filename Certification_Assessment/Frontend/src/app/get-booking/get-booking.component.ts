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

    this.errorMessage = ''; // Reset error message
    this.selectedBooking = null; // Reset selectedBooking

    // Check if bookingId is provided
    if (!this.bookingId) {
      this.errorMessage = 'Please enter a booking ID.';
      return; // Exit the method early
    }

    this.getBookingService.getBooking(this.bookingId)
      .subscribe(
        (response) => {
          console.log("response is "+response)
          this.selectedBooking = response;
          this.errorMessage = null; // Clear error message on success
        },
        (error) => {
          this.errorMessage = error; // Set error message
          this.selectedBooking = null; // Clear booking details on error
        }
      );

   }

   // Helper method to transform booking date
   transformDate(dateString: Date): string {
    const dateObj = new Date(dateString);
    const options :Intl.DateTimeFormatOptions = { month: 'long', day: 'numeric', year: 'numeric' };
    return dateObj.toLocaleDateString('en-US', options);
  }

  // Helper method to transform plate count
  transformPlateCount(plateCount: number): string {
    return plateCount > 5 ? 'More than 5 plates' : '5 or less plates';
  }

}
