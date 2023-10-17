import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    expect(app).toBeTruthy();
  });

  it('should increase count when click the + button', () => {
    // DEMO for test from UI
    const fixture = TestBed.createComponent(AppComponent);
    const element = fixture.debugElement;
    fixture.detectChanges();
    element.query(By.css('button')).triggerEventHandler('click', null);
    fixture.detectChanges();

    const count = element.query(By.css('div')).nativeElement.textContent.trim();

    expect(count).toEqual('number: 1');
  });

  it('should increase count when click the + button', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.onIncrease();

    expect(app.count).toEqual(1);
  });

  it('should decrease count when click the - button', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.onDecrease();

    expect(app.count).toEqual(-1);
  });

  it('should hide - button when count < 0', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.count = -1;

    expect(app.hideDecrease).toEqual(true);
  });

  it('should hide + button when count > 10', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.count = 11;

    expect(app.hideIncrease).toEqual(true);
  });

  it('should set text background to green when count < 0', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.count = -1;

    expect(app.textBackground).toEqual('green');

  });

  it('should set text background to red when count > 10', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.count = 11;

    expect(app.textBackground).toEqual('red');
  });

  it('should set text background to white when count is between 0 and 10', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.count = 5;

    expect(app.textBackground).toEqual('white');
  });

});
