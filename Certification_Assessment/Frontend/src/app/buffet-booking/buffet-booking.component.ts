import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { BuffetBookingService } from './buffet-booking.service';


@Component({
  selector: 'app-buffet-booking',
  templateUrl: './buffet-booking.component.html',
  styleUrls: ['./buffet-booking.component.css']
})
export class BuffetBookingComponent implements OnInit {

  errorMessage: string;
  successMessage: string;
  bookingDateObj: Date;
  buffetBookingForm: FormGroup;
  buffetOptions: { label: string, value: string, disabled: boolean }[] = [
    { label: 'Select a buffet', value: '', disabled: true },
    { label: 'South Indian Festival Special', value: 'SouthIndianFestivalSpecial', disabled: false },
    { label: 'North Indian Festival Special', value: 'NorthIndianFestivalSpecial', disabled: false },
    { label: 'Chinese Special', value: 'ChineseSpecial', disabled: false }
  ];


  constructor(private fb: FormBuilder, private buffetBookingService: BuffetBookingService) { }


  ngOnInit() {
    this.initForm();
    
  }

  initForm()
  {
    // Add specified validators
    this.buffetBookingForm = this.fb.group({
      buffetName: ['', Validators.required],
      emailId: ['', [Validators.required, Validators.email]],
      plateCount: ['', [Validators.required, Validators.min(1)]],
      bookedOn: ['', Validators.required]
    });
  }


  bookBuffet() {
    /*
    It should invoke bookBuffet() of BuffetBookingService
    by passing the value of buffetBookingForm object as a parameter, which in turn returns a observable
    The success callback should populate the successMessage with the message in response
    The error callback should populate the errorMessage with the message in response
    Note: successMessage and errorMessage should not have any value in case of no response from success and error callback repectively.
  */
    this.successMessage = '';
    this.errorMessage = '';
    this.bookingDateObj = null;

    // Get the selected booking date from the form
    const bookingDate: Date = this.buffetBookingForm.get('bookedOn').value;

    // Get today's date
    const today: Date = new Date();
    today.setHours(0, 0, 0, 0); // Set hours, minutes, seconds, and milliseconds to 0 for accurate comparison

    // Parse the booking date into a Date object
    this.bookingDateObj = new Date(bookingDate);

    // Check if the booking date is in the past
    if (this.bookingDateObj < today) {
      this.errorMessage = 'Booking date cannot be before today';
      return; // Exit the method early
    } 

    this.buffetBookingService.bookBuffet(this.buffetBookingForm.value)
      .subscribe(
        (response) => {
          this.successMessage = response;
          this.errorMessage = null; // Clear error message on success
        },
        (error) => {
          this.errorMessage = error; // Set error message
          this.successMessage = null; // Clear success message on error
        }
      );
    
  }

}
