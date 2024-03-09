import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ReactiveFormsModule, AbstractControl } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { of, throwError } from 'rxjs';

import { BuffetBookingComponent } from '../buffet-booking/buffet-booking.component';
import { BuffetBookingService } from '../buffet-booking/buffet-booking.service';

class BuffetBookingServiceStub {
  bookBuffet() { }
}
describe('Testing BuffetBookingComponent', () => {
  let component: BuffetBookingComponent;
  let fixture: ComponentFixture<BuffetBookingComponent>;
  let buffetBookingService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, ReactiveFormsModule],
      declarations: [BuffetBookingComponent],
      providers: [{ provide: BuffetBookingService, useClass: BuffetBookingServiceStub }] // To stub the service so we can use spyOn later on
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuffetBookingComponent);
    component = fixture.componentInstance;
    buffetBookingService = TestBed.inject(BuffetBookingService);
    fixture.detectChanges();
  //  jasmine.MAX_PRETTY_PRINT_DEPTH = 2;
  });


  describe('Verifying the fields in buffetBookingForm', () => {

    // //////////////////////// 1st Field /////////////////////////////

    // buffetName field when no value is given
    describe('Buffet Name field which is empty', () => {
      let errors;
      let buffetName;
      // let buffetNameSpan;

      beforeEach(() => {
        buffetName = component.buffetBookingForm.controls.buffetName;
        buffetName.setValue('');
        fixture.detectChanges();
        errors = buffetName.errors;
       // buffetNameSpan = fixture.debugElement.query(By.css('#buffetNameError'));
      });


      it('Testing BuffetBookingComponent - Buffet_Booking:Buffet Name validation fails for no input', () => {
        expect(buffetName.valid).toBeFalsy();
      });

      it('Testing BuffetBookingComponent - Buffet_Booking:Buffet Name should verify required field', () => {
        expect(errors.required).toBeTruthy();

      });

      /*it('Testing BuffetBookingComponent- Buffet Name should not display the error message initialy', () => {
        expect(buffetNameSpan).toBeFalsy();
      });*/
    });

    // buffetName field when a value is given
    describe('Buffet Name field when correct value is given', () => {
      let errors;
      let buffetName: AbstractControl;
    //  let buffetNameSpan;

      beforeEach(() => {
        buffetName = component.buffetBookingForm.controls.buffetName;
        buffetName.setValue('SouthIndianFestivalSpecial');
        buffetName.markAsDirty();
        fixture.detectChanges();
       // buffetNameSpan = fixture.debugElement.query(By.css('#buffetNameError'));
        errors = buffetName.errors;
      });


      it('Testing BuffetBookingComponent - Buffet_Booking:Buffet Name validation passes for valid input ', () => {
        expect(buffetName.valid).toBeTruthy();
      });

      it('Testing BuffetBookingComponent - Buffet_Booking:Buffet Name error message is not displayed for valid input ', () => {
        expect(errors).toBeFalsy();

      });

    });

    // Checking options used in select
    describe('Validate if the options used are as provided', () => {
      it('Testing BuffetBookingComponent - Buffet_Booking:Checks for the options in Select tag', () => {
        const buffetNameDisabledOptionTag = fixture.debugElement.query(By.css('#buffetName'));
        const optionArray: DebugElement[] = buffetNameDisabledOptionTag.children;
        let flag = 0;

        for (const element of optionArray) {
          if (element.nativeElement.value === '') {
            if (element.nativeElement.disabled) {
              flag++;
            }
          } else if (element.nativeElement.innerHTML === 'South Indian Festival Special') {
            if (element.nativeElement.value === 'SouthIndianFestivalSpecial') {
              flag++;
            }
          } else if (element.nativeElement.innerHTML === 'North Indian Festival Special') {
            if (element.nativeElement.value === 'NorthIndianFestivalSpecial') {
              flag++;
            }
          } else if (element.nativeElement.innerHTML === 'Chinese Special') {
            if (element.nativeElement.value === 'ChineseSpecial') {
              flag++;
            }
          }
        }
        expect(flag).toBe(4);
      });
    });


    //////////////////////// 2nd Field /////////////////////////////

    // Email id when no value is given
    describe('Email id when value is not given', () => {
      let errors;
      let emailId;
    //  let emailIdSpan;

      beforeEach(() => {
        emailId = component.buffetBookingForm.controls.emailId;
        emailId.setValue('');
        fixture.detectChanges();
        errors = emailId.errors;
      });

      it('Testing BuffetBookingComponent - Buffet_Booking:Email id should fail for invalid input', () => {
        expect(emailId.valid).toBeFalsy();
      });

      it('Testing BuffetBookingComponent - Buffet_Booking:Email Id validates for required field', () => {
        expect(errors.required).toBeTruthy();

      });

     /* it('Testing BuffetBookingComponent- Buffet_Booking:Email id should not display error message initally', () => {
        //let emailIdSpanPresent = fixture.debugElement.query(By.css('#emailIdError'));
        emailIdSpan = fixture.debugElement.query(By.css('#emailIdError'));
        // alert('Data in try ' + emailIdSpan);
        expect(emailIdSpan).toBeFalsy();
      })*/
    });

    // Email id field when a correct value is given
    describe('Email id field when correct value is given', () => {
      let errors;
      let emailId: AbstractControl;
     // let emailIdSpan;

      beforeEach(() => {
        emailId = component.buffetBookingForm.controls.emailId;
        emailId.setValue('andy@gmail.com');
        emailId.markAsDirty();
        fixture.detectChanges();
        errors = emailId.errors;
      });

      it('Testing BuffetBookingComponent - Buffet_Booking:Email id passes for valid input', () => {
        expect(emailId.valid).toBeTruthy();

      });

      it('Testing BuffetBookingComponent - Buffet_Booking:Email id should not contain error for valid input', () => {
        expect(errors).toBeFalsy();

      });

     /* it('Testing BuffetBookingComponent - Buffet_Booking:Email id should not display the error message for valid input', () => {
        emailIdSpan = fixture.debugElement.query(By.css('#emailIdError'));
        // alert("Value for correct input: " + emailIdSpan)
        expect(emailIdSpan).toBeFalsy();
      })*/

      it('Testing BuffetBookingComponent - Buffet_Booking:Email id should be of type email', () => {
        const emailType = fixture.debugElement.query(By.css('#emailId'));
        expect(emailType.attributes.type).toBe('email');
      });
    });

    // Email id field when an incorrect value is given
    describe('Email id field when incorrect value is given', () => {
      let errors;
      let emailId: AbstractControl;
      // let emailIdSpan;

      beforeEach(() => {
        emailId = component.buffetBookingForm.controls.emailId;
        emailId.setValue('andy.com');
        emailId.markAsDirty();
        fixture.detectChanges();
        errors = emailId.errors;
      });

      it('Testing BuffetBookingComponent - Buffet_Booking:Email id validation fails for incorrect input', () => {
        expect(emailId.valid).toBeFalsy();

      });

      it('Testing BuffetBookingComponent - Buffet_Booking:Email id validation fails', () => {
        expect(errors).toBeTruthy();

      });

      it('Testing BuffetBookingComponent - Buffet_Booking:Email id should be of type email', () => {
        expect(errors.email).toBeTruthy();
      });
    });


    //////////////////////// 3rd Field /////////////////////////////

    // plateCount field with no input
    describe('plateCount field with no input', () => {
      let errors;
      let plateCount: AbstractControl;
     // let plateCountSpan;

      beforeEach(() => {
        plateCount = component.buffetBookingForm.controls.plateCount;
        plateCount.setValue('');
        fixture.detectChanges();
        errors = plateCount.errors;
      //  plateCountSpan = fixture.debugElement.query(By.css('#plateCountError'));
      });

      it('Testing BuffetBookingComponent - Buffet_Booking:Plate count should fail for empty input', () => {
        expect(plateCount.valid).toBeFalsy();
      });


      it('Testing BuffetBookingComponent - Buffet_Booking:Plate count should contain required error', () => {
        expect(errors.required).toBeTruthy();

      });

     /* it('Testing BuffetBookingComponent - Buffet_Booking:Plate count should not display the error message on page load', () => {
        expect(plateCountSpan).toBeFalsy();
      });*/
    });

    // Incorrect value for Plate count
    describe('Plate count field when incorrect value is given', () => {
      let errors;
      let plateCount: AbstractControl;
    //  let plateCountSpan;

      beforeEach(() => {
        plateCount = component.buffetBookingForm.controls.plateCount;
        plateCount.setValue(-1);
        plateCount.markAsDirty();
        fixture.detectChanges();
     //   plateCountSpan = fixture.debugElement.query(By.css('#plateCountError'));
        errors = plateCount.errors;
      });

      it('Testing BuffetBookingComponent - Buffet_Booking:Plate count with invalid value', () => {
        expect(plateCount.valid).toBeFalsy();
      });

      it('Testing BuffetBookingComponent - Buffet_Booking:Plate Count fails wrt min property', () => {
        expect(errors.min).toBeTruthy();
      });

     /* it('Testing BuffetBookingComponent - Plate Count should display error message for invalid value', () => {
        expect(plateCountSpan).toBeTruthy();
      })*/
    });

    //////////////////////// 4th Field /////////////////////////////

    // Booked on field without value
    describe('No value provided for Booked on field', () => {
      let errors;
      let bookedOn: AbstractControl;
      // let bookedOnSpan;

      beforeEach(() => {
        bookedOn = component.buffetBookingForm.controls.bookedOn;
        bookedOn.setValue('');
        fixture.detectChanges();
        errors = bookedOn.errors;
      //  bookedOnSpan = fixture.debugElement.query(By.css('#bookedOnError'));
      });

      it('Testing BuffetBookingComponent - Buffet_Booking:Booked on validation fails for invalid input', () => {
        expect(bookedOn.valid).toBeFalsy();
      });

      it('Testing BuffetBookingComponent - Buffet_Booking:Booked on should contain required validation', () => {
        expect(errors.required).toBeTruthy();

      });

     /* it('Testing BuffetBookingComponent - Booked on should not display the error message initialy', () => {
        expect(bookedOnSpan).toBeFalsy();
      });*/
    });

  });

  /////////////////// FormSubmission//////////////////
  describe('Submiting invalid data', () => {

    let submitBtn;

    beforeEach(() => {
      component.buffetBookingForm.controls.buffetName.setValue('ChineseSpecial');
      component.buffetBookingForm.controls.emailId.setValue('renny');
      component.buffetBookingForm.controls.plateCount.setValue('2');
      component.buffetBookingForm.controls.bookedOn.setValue(new Date('June 6, 2018 00:00:00'));
      fixture.detectChanges();
      submitBtn = fixture.debugElement.query(By.css('button')).nativeElement;
    });

    it('Testing BuffetBookingComponent - Buffet_Booking:Form level validation should be invalid', () => {
      expect(component.buffetBookingForm.valid).toBe(false);
    });

    it('Testing BuffetBookingComponent - Buffet_Booking:Submit button should have disabled property', () => {
      expect(submitBtn.disabled).toBe(true);
    });

  });

  /////////////////// Form element binding//////////////////
  describe('Checking HTML form elements binding', () => {

    let buffetBookingFormTag: DebugElement;
    let buffetNameTag: DebugElement;
    let emailIdTag: DebugElement;
    let plateCountTag: DebugElement;
    let bookedOnTag: DebugElement;

    beforeEach(() => {
      buffetBookingFormTag = fixture.debugElement.query(By.css('form'));
      buffetNameTag = fixture.debugElement.query(By.css('#buffetName'));
      emailIdTag = fixture.debugElement.query(By.css('#emailId'));
      plateCountTag = fixture.debugElement.query(By.css('#plateCount'));
      bookedOnTag = fixture.debugElement.query(By.css('#bookedOn'));
    });

    it('Testing BuffetBookingComponent - Buffet_Booking:check binding of formgroup to form tag', () => {
      expect(buffetBookingFormTag.attributes['ng-reflect-form']).toBeTruthy();
    });

    it('Testing BuffetBookingComponent - Buffet_Booking:check buffetName tag is binded correctly', () => {
      expect(buffetNameTag.attributes.formControlName).toBe('buffetName');
    });

    it('Testing BuffetBookingComponent - Buffet_Booking:check emailId tag is binded correctly', () => {
      expect(emailIdTag.attributes.formControlName).toBe('emailId');
    });

    it('Testing BuffetBookingComponent - Buffet_Booking:check plateCount tag is binded correctly', () => {
      expect(plateCountTag.attributes.formControlName).toBe('plateCount');
    });

    it('Testing BuffetBookingComponent - Buffet_Booking:check bookedOn tag is binded correctly', () => {
      expect(bookedOnTag.attributes.formControlName).toBe('bookedOn');
    });
  });

  /////////////////// Calling the method on form submit//////////////////
  describe('Submitting valid data', () => {

    beforeEach(() => {
      component.buffetBookingForm.controls.buffetName.setValue('ChineeseSpecial');
      component.buffetBookingForm.controls.emailId.setValue('renny@infy');
      component.buffetBookingForm.controls.plateCount.setValue('12');
      component.buffetBookingForm.controls.bookedOn.setValue(new Date('June 7, 2018 00:00:00'));
      fixture.detectChanges();
    });

    it('Testing BuffetBookingComponent - Buffet_Booking:Check if the bookBuffet method calls service', () => {
      const spy = spyOn(buffetBookingService, 'bookBuffet').and.returnValue(of({ message: 'Success' }));
      component.bookBuffet();
      expect(spy).toHaveBeenCalled();
    });

    it('Testing BuffetBookingComponent - Buffet_Booking:Check if the bookBuffet method nullifies the messages', () => {
      spyOn(buffetBookingService, 'bookBuffet').and.returnValue(of({ message: 'Success message is populated' }));
      component.bookBuffet();
      expect(component.errorMessage).toBe(null);
    });
    it('Testing BuffetBookingComponent - Buffet_Booking:Check if the bookBuffet method nullifies the messages', () => {
      spyOn(buffetBookingService, 'bookBuffet').and.returnValue(throwError({ error: { message: 'Failure message is populated' } }));
      component.bookBuffet();
      expect(component.successMessage).toBe(null);
    });

    it('Testing BuffetBookingComponent - Buffet_Booking:On calling service, success message must be populated', fakeAsync(() => {
      spyOn(buffetBookingService, 'bookBuffet').and.returnValue(of({ message: 'Success message is populated' }));
      component.bookBuffet();
      tick();
      expect(component.successMessage).toBe('Success message is populated');
    }));

    it('Testing BuffetBookingComponent - Buffet_Booking:Buffet_Booking:On calling service, error message must be populated',
    fakeAsync(() => {
      spyOn(buffetBookingService, 'bookBuffet').and.returnValue(throwError({ error: { message: 'Failure message is populated' } }));
      component.bookBuffet();
      tick();
      expect(component.errorMessage).toBe('Failure message is populated');
    }));
  });

});
