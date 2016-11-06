import { Directive,Component, Input,OnInit} from '@angular/core';

import { Hero } from './hero';

@Component({
  selector: 'my-hero-list',
  templateUrl:'/views/list.html'


})


export class HeroListComponent implements OnInit{

  @Input() ngInit;

  @Input()
  random : number;

  heroList : string[] = [];

  constructor(){
    this.heroList.push('Ian Kim');
  }
  //@Input()
  setHeroList(name : string){
    this.heroList.push(name);
  }
  go(){
    console.log('클릭');
    this.random +=1;
  }
  ngOnInit() {
    if(this.random>1){
      console.log('컹데');
    }

  }
}
