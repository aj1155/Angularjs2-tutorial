import { Injectable } from '@angular/core';
import { Headers,Http,Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import 'rxjs/add/operator/toPromise';

import { HEROES } from '../mock/mock-heroes';
import { Hero } from './hero';
import { user } from '../mock/user';

@Injectable()
export class HeroService{

  private headers: Headers = new Headers({'Content-Type': 'application/json'});
  private heroesUrl : string = 'app/heroes';
  private url  : string = 'http://localhost:4000/user';

  constructor(private http : Http){}


  getHero(id : number): Promise<Hero>{
    return this.getHeroes()
                    .then(heroes => heroes.find(hero => hero.id ===id));
  }

  getHeroes() : Promise<Hero[]>{
    return this.http.get(this.heroesUrl)
                          .toPromise()
                          .then(response => response.json().data as Hero[])
                          .catch(this.handleError);
  }
  getUrl()  {

   this.http.get(this.url,{headers: this.getHeaders()})
      .map((res:Response) => res.json())
      .subscribe(
        res =>{ console.log(res) },
        err => console.error(err),
        () => console.log('done')
      );

  };
  private getHeaders(){
    let headers = new Headers();
    headers.append('content-type', 'application/json',);
    headers.append('Access-Control-Allow-Origin','*');
    return headers;
  }
  getHeroesSlowly(): Promise<Hero[]>{
    return new Promise<Hero[]>(resolve =>
      setTimeout(resolve,5000)).then(() => this.getHeroes());

  }

  update(hero : Hero) : Promise<Hero>{
    const update_url = this.heroesUrl+'/'+hero.id;
    return this.http
                  .put(update_url,JSON.stringify(hero),{headers:this.headers})
                  .toPromise()
                  .then(() => hero) // 변경된 결과를 다시 hero에 대입
                  .catch(this.handleError);
  }

  create(heroName: string): Promise<Hero>{
    return this.http
                 .post(this.heroesUrl,JSON.stringify({name:heroName}),{headers : this.headers})
                 .toPromise()
                 .then(reponse => reponse.json().data as Hero)
                 .catch(this.handleError);
  }

  handleError(error : any): Promise<any>{
    console.error('An error occured',error);
    return Promise.reject(error.message || error);
  }

}
