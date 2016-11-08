"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/toPromise");
var HeroService = (function () {
    function HeroService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.heroesUrl = 'app/heroes';
        this.url = 'http://localhost:4000/user';
    }
    HeroService.prototype.getHero = function (id) {
        return this.getHeroes()
            .then(function (heroes) { return heroes.find(function (hero) { return hero.id === id; }); });
    };
    HeroService.prototype.getHeroes = function () {
        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    HeroService.prototype.getUrl = function () {
        this.http.get(this.url, { headers: this.getHeaders() })
            .map(function (res) { return res.json(); })
            .subscribe(function (res) { console.log(res); }, function (err) { return console.error(err); }, function () { return console.log('done'); });
    };
    ;
    HeroService.prototype.getHeaders = function () {
        var headers = new http_1.Headers();
        headers.append('content-type', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');
        return headers;
    };
    HeroService.prototype.getHeroesSlowly = function () {
        var _this = this;
        return new Promise(function (resolve) {
            return setTimeout(resolve, 5000);
        }).then(function () { return _this.getHeroes(); });
    };
    HeroService.prototype.update = function (hero) {
        var update_url = this.heroesUrl + '/' + hero.id;
        return this.http
            .put(update_url, JSON.stringify(hero), { headers: this.headers })
            .toPromise()
            .then(function () { return hero; }) // 변경된 결과를 다시 hero에 대입
            .catch(this.handleError);
    };
    HeroService.prototype.create = function (heroName) {
        return this.http
            .post(this.heroesUrl, JSON.stringify({ name: heroName }), { headers: this.headers })
            .toPromise()
            .then(function (reponse) { return reponse.json().data; })
            .catch(this.handleError);
    };
    HeroService.prototype.handleError = function (error) {
        console.error('An error occured', error);
        return Promise.reject(error.message || error);
    };
    return HeroService;
}());
HeroService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], HeroService);
exports.HeroService = HeroService;
//# sourceMappingURL=hero.service.js.map