import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class sharedService {

  private sub = new Subject();
  subj$ = this.sub.asObservable();

  send(value: string) {
    this.sub.next(value);
  }

}