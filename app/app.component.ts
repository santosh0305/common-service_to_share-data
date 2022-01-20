import { Component } from '@angular/core';
import { sharedService } from './shared.service';

@Component({
  selector: 'my-app',
  template: `
  <hello></hello>
  <button (click)="passData()">
    Start
  </button>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private service: sharedService) { }

  passData() {
    this.service.send("hello");
  }

}
