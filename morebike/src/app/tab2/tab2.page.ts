import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  slideOpts = {
    initialSlide: 0,
    slidesPerView: 1,
    speed: 400,
    autoplay: true,
    loop: true
  };
  constructor() {}

}
