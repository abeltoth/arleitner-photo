import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterEvent
} from '@angular/router';
import { SpinnerService } from './services/spinner.service';
import { ClickListenerService } from './services/click-listener.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnDestroy {
  title = 'Arleitner photo';

  subs = new SubSink();

  constructor(
    translate: TranslateService,
    private router: Router,
    private spinnerService: SpinnerService,
    private clickListener: ClickListenerService,
  ) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('hu');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('hu');

    // Show spinner during navigation
    this.subs.add(
      router.events.subscribe((routerEvent: RouterEvent) => {
        if (routerEvent instanceof NavigationStart) {
          this.spinnerService.showSpinner();
        }
        if (routerEvent instanceof NavigationEnd ||
          routerEvent instanceof NavigationCancel ||
          routerEvent instanceof NavigationError) {
          this.spinnerService.hideSpinner();
        }
      })
    );
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  ngAfterViewInit() {
    this.clickListener.init();
  }
}
