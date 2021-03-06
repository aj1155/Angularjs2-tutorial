import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './heroes/hero';
import { HeroService } from './heroes/hero.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'views/dashboard.component.html',
  styleUrls:['css/dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes : Hero[] = [];

  constructor(
    private heroService: HeroService,
    private router: Router
   ){}

  ngOnInit(): void{
    this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes.slice(1,5));

  }

  gotoDetail(hero : Hero): void{
      let link = ['/detail', hero.id];
      this.router.navigate(link);
  }

}
