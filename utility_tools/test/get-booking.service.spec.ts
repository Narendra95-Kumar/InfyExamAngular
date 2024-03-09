import { TestBed, inject } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

import { GetBookingService } from '../get-booking/get-booking.service';
import { HttpClient } from '@angular/common/http';

/////////////////////// Fetching valid data///////////////
fdescribe('Testing fetching data through GetBookingService', () => {

  let httpMock: HttpTestingController;
  let dataService: GetBookingService;
  const mockResponse: any =
  '{"bookingId":1001,"buffetName":"SouthIndianSpcl","emailId":"absy@infy.com","plateCount":"4","bookedOn":"2018-08-12"}';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GetBookingService]
    });

    dataService = TestBed.inject(GetBookingService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('Testing fetching data through GetBookingService - Get_Booking:Service should return observable',
  inject([GetBookingService, HttpTestingController], (service, httpMock1) => {
    let data;
    service.getBooking(1001).subscribe((response) => {
      data = response;
    });
    const mockReq = httpMock1.expectOne('http://localhost:3000/buffetBookings/1001');
    mockReq.flush(mockResponse); // Send response when URL is given
    httpMock1.verify();
    expect(data)
    .toBe('{"bookingId":1001,"buffetName":"SouthIndianSpcl","emailId":"absy@infy.com","plateCount":"4","bookedOn":"2018-08-12"}');
  }));

  it('Testing fetching data through GetBookingService - Get_Booking:Service should be called using GET method',
  inject([HttpClient], (http: HttpClient) => {
    const spy = spyOn(http, 'get');
    dataService.getBooking(1001);
    expect(spy).toHaveBeenCalled();
  }));
});
