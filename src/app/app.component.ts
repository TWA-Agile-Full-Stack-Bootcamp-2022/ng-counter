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
}
