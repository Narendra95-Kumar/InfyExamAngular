import { TestBed, inject, async } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import {BuffetBooking} from '../buffet-booking/buffet-booking';
import { BuffetBookingService } from '../buffet-booking/buffet-booking.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

/////////////////////// Fetching valid data///////////////
fdescribe('Testing fetching data through BuffetBookingService', () => {

  let httpMock: HttpTestingController;
  let dataService: BuffetBookingService;
  const mockResponse: any = '{"buffetName":"ChineseSpcl","bookedOn":2018-6-14,"emailId":"luvina@infy.com","plateCount":4}';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BuffetBookingService]
    });
    httpMock = TestBed.inject(HttpTestingController);
    dataService = TestBed.inject(BuffetBookingService);
  });

  it('Testing fetching data through BuffetBookingService - Buffet_Booking:Service should return observable',
  inject([HttpTestingController, BuffetBookingService], (httpMock1, service) => {
    service.bookBuffet().subscribe((response) => {
      expect(response).toBe('{"buffetName":"ChineseSpcl","bookedOn":2018-6-14,"emailId":"luvina@infy.com","plateCount":4}');
    });
    const mockReq = httpMock1.expectOne(dataService.url);
    mockReq.flush(mockResponse);
    httpMock1.verify();
  }));

  it('Testing fetching data through BuffetBookingService - Service Should call appropriate URL', () => {
    expect(dataService.url).toBe('http://localhost:3000/buffetBookings');
  });

  it('Testing fetching data through BuffetBookingService - Buffet_Booking:Service should be called using POST method',
  inject([HttpClient], (http: HttpClient) => {
    const spy = spyOn(http, 'post').and.returnValue(of({ message: 'Success' }));
    dataService.bookBuffet(mockResponse);
    expect(spy).toHaveBeenCalled();
  }));
});



