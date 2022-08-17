import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MOREBIKE } from '../constants/visualizations';
declare var tableau: any;

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  counter: number = 0;
  showVisualizations: Array<boolean> = new Array<boolean>();
  visualizations: Array<any> = new Array<any>();
  @ViewChild("vizContainer1") containerDiv1: ElementRef;
  @ViewChild("vizContainer2") containerDiv2: ElementRef;
  @ViewChild("vizContainer3") containerDiv3: ElementRef;
  @ViewChild("vizContainer4") containerDiv4: ElementRef;
  divContainers: Array<ElementRef> = new Array<ElementRef>();

  viz: Array<any> = new Array<any>;

  tableauOptions = {
    // width: '100%',
    // height: '1000px',
    device: 'desktop',
    hideTabs: true,
    onFirstInteractive: () => {
      
    },
    onFirstVizSizeKnown: () => {
      this.showVisualizations[this.counter] = true;
      this.counter++;
    }
  };

  constructor(private elem: ElementRef) {

  }

  ngOnInit(): void {
    this.visualizations = MOREBIKE.origin.graphs;
  }

  ngAfterViewInit() {
    this.divContainers = this.elem.nativeElement.querySelectorAll('.dashboard');
    this.initTableau();
  }

  initTableau() {
    let vizUrl = '';
    this.divContainers.forEach((visualization, index) => {
      vizUrl = this.visualizations[index].tableauURL;
      this.viz[index] = new tableau.Viz(
        visualization,
        vizUrl,
        this.tableauOptions
      );
    });
  }
}
