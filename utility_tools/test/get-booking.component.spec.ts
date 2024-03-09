import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { of, throwError } from 'rxjs';

import { GetBookingComponent } from '../get-booking/get-booking.component';
import { GetBookingService } from '../get-booking/get-booking.service';
import { BuffetBooking } from '../buffet-booking/buffet-booking';

class GetBookingServiceStub {
  getBooking() { }
}

function getValue(id) {
  const data = document.getElementsByTagName('td')[id].innerHTML;
  return data;
}

fdescribe('Testing GetBookingComponent', () => {
  let component: GetBookingComponent;
  let fixture: ComponentFixture<GetBookingComponent>;
  let getBookingService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule],
      declarations: [GetBookingComponent],
      providers: [{ provide: GetBookingService, useClass: GetBookingServiceStub }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetBookingComponent);
    component = fixture.componentInstance;
    getBookingService = TestBed.inject(GetBookingService);
    fixture.detectChanges();
  //  jasmine.MAX_PRETTY_PRINT_DEPTH = 2;
  });

  it('Testing GetBookingComponent - Get_Booking:Should check Two-way binding of bookingId', fakeAsync(() => {
    const testValue = '1001';
    component.bookingId = testValue;
    fixture.detectChanges();
    tick();
    expect(fixture.debugElement.query(By.css('input')).nativeElement.value).toEqual(testValue);
  }));

  it('Testing GetBookingComponent - Get_Booking:Check if the getBooking() method calls service', () => {
    const spy = spyOn(getBookingService, 'getBooking').and.returnValue(of(BuffetBooking));
    component.getBooking();
    expect(spy).toHaveBeenCalled();
  });

  describe('Verify the Search box in GetBooking', () => {

    describe('Submitting valid data', () => {
      const obj = new BuffetBooking();
      beforeEach(() => {
        obj.bookedOn = new Date('2018-08-15');
        obj.buffetName = 'NorthIndianFestivalSpecial';
        obj.plateCount = 6;
        component.selectedBooking = obj;
        fixture.detectChanges();
      });

      /*it('Testing GetBookingComponent - Get_Booking:Check if getBooking() method nullifies Error message on Valid input', () => {
        spyOn(getBookingService, "getBooking").and.returnValue(of(BuffetBooking));
        component.getBooking();
        expect(component.errorMessage).toBe(null);
      })*/

      it('Testing GetBookingComponent - Get_Booking:Should display result in tabular form', () => {
        const result: any[] = [];
        const tableData = fixture.debugElement.queryAll(By.css('td')).length;
        for (let i = 0; i < tableData; i++) {
          const data = getValue(i);
          result.push(data);
        }
        expect(result).toEqual(['August 15, 2018', 'NorthIndianFestivalSpecial', '6']);
      });

    });


    describe('Submitting invalid data', () => {

      beforeEach(() => {
        component.errorMessage = 'Error';
        fixture.detectChanges();
      });

      it('Testing GetBookingComponent - Get_Booking:Check if getBooking() method nullifies selectedBooking on invalid input', () => {
        spyOn(getBookingService, 'getBooking').and.returnValue(throwError({ error: { message: 'Failure message is populated' } }));
        component.getBooking();
        expect(component.selectedBooking).toBe(null);
      });

      it('Testing GetBookingComponent - Get_Booking:On calling service, errorMessage must be displayed for Invalid data', fakeAsync(() => {
        spyOn(getBookingService, 'getBooking').and.returnValue(throwError({ error: { message: 'Failure message is populated' } }));
        component.getBooking();
        tick();
        expect(component.errorMessage).toBe('Failure message is populated');
      }));
    });

  });

});
