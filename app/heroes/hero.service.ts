import { Injectable } from '@angular/core';

import { HEROES } from '../mock/mock-heroes';
import { Hero } from './hero';


@Injectable()
export class HeroService{

  getHero(id : number): Promise<Hero>{
    return this.getHeroes()
                    .then(heroes => heroes.find(hero => hero.id ===id));
  }

  getHeroes() : Promise<Hero[]>{
    return Promise.resolve(HEROES);
  }

  getHeroesSlowly(): Promise<Hero[]>{
    return new Promise<Hero[]>(resolve =>
      setTimeout(resolve,5000)).then(() => this.getHeroes());

  }

}
