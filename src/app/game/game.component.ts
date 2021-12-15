import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NumSelectionComponent } from '../numSelection/numSelection.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {

  totalBet:number = 0;
  numbers:number[] = [];

  constructor(private router: Router) { }
  
  @ViewChild(NumSelectionComponent) child!:NumSelectionComponent;

  betrec = (betReceived:number) => {
    this.totalBet += betReceived;
  } 

  navigate(){
    if(this.totalBet > 0 && this.numbers.length === 5){
    this.router.navigate(['ticket'], {
      state: { bet: this.totalBet, numArray : this.numbers }
    });
  }else{

    if(this.numbers.length !== 5)
    window.alert("Please Select no less than 5 numbers.");
    else
    window.alert("Please place a bet.");
  }
  }

  numrec = (numsReceived:number) => {
    this.numbers.push(numsReceived);
  }

  clear = () =>{
  this.numbers = [];
  this.totalBet = 0;
  this.child.clearPressed();
  }
}
