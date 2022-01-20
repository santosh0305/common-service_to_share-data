import { Component, Input } from '@angular/core';
import { sharedService } from './shared.service';
import { Subscription }   from 'rxjs/Subscription';

@Component({
  selector: 'hello',
  template: `<h1>Hello!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
  
})
export class HelloComponent  {
  subscription: Subscription;
    constructor(private shared : sharedService){
    this.subscription =  shared.subj$.subscribe(val=>{
    console.log(val);
    })
  }
}
