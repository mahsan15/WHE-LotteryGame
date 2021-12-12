import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-betSystem',
  templateUrl: './betSystem.component.html',
  styleUrls: ['./betSystem.component.css']
})
export class BetSystemComponent implements OnInit {



  bet:number=0;

  addBet = (i:number) =>{
    this.bet += i;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
