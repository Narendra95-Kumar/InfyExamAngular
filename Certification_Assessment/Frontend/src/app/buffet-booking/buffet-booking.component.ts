import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-buffet-booking',
  templateUrl: './buffet-booking.component.html',
  styleUrls: ['./buffet-booking.component.css']
})
export class BuffetBookingComponent implements OnInit {

  errorMessage: string;
  successMessage: string;
  buffetBookingForm: FormGroup;
  constructor(private fb: FormBuilder) { }


  ngOnInit() {
    // Add specified validators
    this.buffetBookingForm = this.fb.group({
      buffetName: [],
      emailId: [],
      plateCount: [],
      bookedOn: []
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
  }

}
