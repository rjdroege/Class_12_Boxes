import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {
  boxNumber = "";
  isEmpty = false;

  constructor() { }

  ngOnInit(): void {
    this.isEmpty = Math.random()>.5;
  }

  getColor(){
    return this.isEmpty === true ? 'red' : 'green';
  }

}
