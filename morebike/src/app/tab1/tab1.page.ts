import { Component, OnInit } from '@angular/core';
import { MOREBIKE } from '../constants/visualizations';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  visualizations: Array<any> = new Array<any>();
  constructor() {}

  ngOnInit(): void {
    //DOCS:
    //https://help.tableau.com/current/api/embedding_api/en-us/index.html
    this.visualizations = MOREBIKE.origin.graphs;
  }
}
