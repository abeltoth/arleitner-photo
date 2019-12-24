import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  carouselImageSources: string[] = [];

  constructor(ngbCarouselConfig: NgbCarouselConfig) {
    ngbCarouselConfig.interval = 10000;
    ngbCarouselConfig.keyboard = true;
    ngbCarouselConfig.pauseOnHover = false;
    ngbCarouselConfig.showNavigationIndicators = false;
  }

  ngOnInit() {
    this.initCarousel();
  }

  initCarousel() {
    this.carouselImageSources.push('/assets/images/sibling.jpg');
    this.carouselImageSources.push('/assets/images/field.jpg');
    this.carouselImageSources.push('/assets/images/beauty.jpg');
  }

  carouselClicked() {}

}
