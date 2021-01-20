import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transform-visualizer',
  templateUrl: './transform-visualizer.component.html',
  styleUrls: ['./transform-visualizer.component.css']
})
export class TransformVisualizerComponent implements OnInit {
  cardfacefrontcolor = "red";
  cardrotatex = 10;
  cardrotatey = 30;
  cardrotatez = 0;
  cardtranslatex = 80;
  cardtranslatey =  -40;
  cardtranslatez = -200;
  cardperspective = 600;
  selectOptions = ['left','center','right'];
  selectedOptions;
  cardperspectiveformat;
  cardperspectiveoriginx = 50;
  cardperspectiveoriginxvaluetype = "%";
  cardperspectiveoriginy = 50;
  cardperspectiveoriginyvaluetype = "%";
  cardperspectiveoriginydisplay = true;
  cardperspectiveoriginxdisplay = true;
  perspectiveOriginCSSValue;
  perspectiveOriginValues;
  formats = ['%','px','em','left','center','right'];

  constructor() { }

  ngOnInit() {
  }

}