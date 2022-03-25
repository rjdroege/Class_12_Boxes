import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boxes',
  templateUrl: './boxes.component.html',
  styleUrls: ['./boxes.component.css']
})
export class BoxesComponent implements OnInit {
  canOpenMoreBoxes = false;
  boxName = "";
  boxMockText = "You should open a box.";
  haveOpenedABox = false;
  boxes = []

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
    this.canOpenMoreBoxes = true;}, 3);
  }

  onOpenBox(){
    this.boxMockText = "You just opened " + this.boxName + "!";
    this.haveOpenedABox = true;
    this.boxes.push(this.boxName);
  }

}
