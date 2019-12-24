import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '../../services/spinner.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  isSpinnerVisible: boolean;

  constructor(
    private spinnerService: SpinnerService,
    private ngxSpinnerService: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.spinnerService.isSpinnerVisible$
      .subscribe((isSpinnerVisible) => {
        this.isSpinnerVisible = isSpinnerVisible;
        if (isSpinnerVisible) {
          this.ngxSpinnerService.show();
        } else {
          this.ngxSpinnerService.hide();
        }
      });
  }

}
