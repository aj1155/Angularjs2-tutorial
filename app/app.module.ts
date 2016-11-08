import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';


import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService } from './mock/in-memory-data.service';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeroDetailComponent } from './heroes/hero-detail.component';
import { HeroListComponent } from'./heroes/hero-list';
import { AppHeaderComponent }   from './shared/app-header.component';
import { AppFooterComponent }   from './shared/app-footer.component';
import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroService } from './heroes/hero.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroListComponent,
    HeroesComponent,
    DashboardComponent,
    AppHeaderComponent,
    AppFooterComponent,

  ],
  providers : [
    HeroService
  ],
  bootstrap : [ AppComponent ]
})

export class AppModule {}
