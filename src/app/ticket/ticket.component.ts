import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  tbet:number = 0;
  Selnumbers:number[]=[];

  constructor() { }
  
  ngOnInit(): void {
    this.tbet = history.state.bet;
    this.Selnumbers = history.state.numArray;
  }

}
