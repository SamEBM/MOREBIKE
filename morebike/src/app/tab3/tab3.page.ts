import { Component, ElementRef, ViewChild } from '@angular/core';
import { MOREBIKE } from '../constants/visualizations';
declare var tableau: any;

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
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
      console.log("onFirstInteractive");
    },
    onFirstVizSizeKnown: () => {
      console.log("onFirstVizSizeKnown");
      this.showVisualizations[this.counter] = true;
      this.counter++;
    }
  };

  constructor(private elem: ElementRef) {

  }

  ngOnInit(): void {
    this.visualizations = MOREBIKE.destination.graphs;
  }

  ngAfterViewInit() {
    this.divContainers = this.elem.nativeElement.querySelectorAll('.dashboard');
    console.log(this.divContainers)
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

