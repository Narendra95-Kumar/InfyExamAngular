import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from '../app.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

fdescribe('Testing AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let link: DebugElement;
  let routerOutletTag: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    link = fixture.debugElement.query(By.css('.nav > li > a'));
    routerOutletTag = fixture.debugElement.query(By.css('router-outlet'));
  });

  it('Testing AppComponent - Checking presence of routerOutletTag', () => { // 2. Router tag
    expect(routerOutletTag).toBeTruthy();
  });

});
