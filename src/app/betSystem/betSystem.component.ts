import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-betSystem',
  templateUrl: './betSystem.component.html',
  styleUrls: ['./betSystem.component.css']
})
export class BetSystemComponent implements OnInit {

  

  @Output() newBet = new EventEmitter<number>();

  addBet = (i:number) =>{
    
    this.newBet.emit(i);
  }
  constructor() { 

  }

  ngOnInit(): void {
  }

  

}
