import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numSelection',
  templateUrl: './numSelection.component.html',
  styleUrls: ['./numSelection.component.css']
})
export class NumSelectionComponent implements OnInit {


  numbers:number[]=[];
  selectedNums:number[]=[];
  pressed:boolean[]=[]
  sel:number=0;

  constructor() { 


  }


  clear = () =>{
    for(var i=0;i<20;i++)
  {
    this.pressed.push(false);
  }
  this.selectedNums = [];
  }

  selectNum = (i:number) =>{
    if(this.selectedNums.length < 5 && this.pressed[i-1] === false){
        this.pressed[i-1] = true;
        this.selectedNums.push(i);
    }
  }

  

  ngOnInit(): void {
    for(var i=0;i<20;i++)
  {
    this.numbers.push(i+1);
  }
  for(var i=0;i<20;i++)
  {
    this.pressed.push(false);
  }
  }

}
