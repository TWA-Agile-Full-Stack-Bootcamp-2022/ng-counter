import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  count = 0;

  onIncrease(): void {
    this.count++;
  }

  onDecrease(): void {
    this.count--;
  }

  onReset(): void{
    this.count = 0;
  }

  get hideDecrease(): boolean {
    return this.count < 0;
  }

  get hideIncrease(): boolean {
    return this.count > 10;
  }

  get textBackground(): string {
    if (this.count < 0) {
      return 'green';
    }
    if (this.count > 10) {
      return 'red';
    }
    return 'white';
  }
}
