import { Component, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
export interface Istudent {
  name: string;
  id: number;
  mark: number;
  image: string;
}
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  //inputs: ["count"]
})
export class HeroesComponent implements OnChanges {
  public students: Istudent = {
    id:1,
    name:"tin",
    mark:1,
    image: "r"
  };
  @Input()
  public count! : number ;

  changee(){
    console.log("change");
  } 

  ngOnChanges (changes : SimpleChanges){
    for(let property in changes){
      if(property === "count"){
        console.log('Previous:', changes[property].previousValue);
        console.log('Current:', changes[property].currentValue);
        console.log('firstChange:', changes[property].firstChange);
      }
    }
  }
}
