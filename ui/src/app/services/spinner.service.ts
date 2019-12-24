import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  private counter = 0;
  private isSpinnerVisible = new BehaviorSubject(false);
  isSpinnerVisible$ = this.isSpinnerVisible.asObservable();

  constructor() { }

  showSpinner() {
    this.counter++;
    this.isSpinnerVisible.next(true);
  }

  hideSpinner() {
    this.counter--;
    if (this.counter === 0) {
      this.isSpinnerVisible.next(false);
    }
  }
}
