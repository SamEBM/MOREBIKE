import { Component, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  @ViewChild(IonSlides) slides: IonSlides;
  slideOpts = {
    initialSlide: 0,
    slidesPerView: 1,
    speed: 400,
    autoplay: true,
    loop: true
  };
  constructor() {}

  public ionViewWillLeave(){  
    this.slides.stopAutoplay();
  }

  public ionViewWillEnter(){
    this.slides.startAutoplay();
  }
}
