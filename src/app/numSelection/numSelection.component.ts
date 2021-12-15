import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-numSelection',
  templateUrl: './numSelection.component.html',
  styleUrls: ['./numSelection.component.css']
})
export class NumSelectionComponent implements OnInit {


  numbers:number[]=[];
  selectedNums:number=0;
  pressed:boolean[]=[]
  sel:number=0;
  @Output() numArr = new EventEmitter<number>();


  clearPressed (){
    for(var i=0;i<20;i++)
  { this.pressed[i] = false; }
  this.selectedNums = 0;
  }

  selectNum = (i:number) =>{
    if(this.selectedNums < 5 && this.pressed[i-1] === false){
        this.pressed[i-1] = true;
        this.selectedNums++;
        this.numArr.emit(i);
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
