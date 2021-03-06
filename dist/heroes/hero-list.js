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
var core_1 = require('@angular/core');
var HeroListComponent = (function () {
    function HeroListComponent() {
        this.heroList = [];
        this.heroList.push('Ian Kim');
    }
    //@Input()
    HeroListComponent.prototype.setHeroList = function (name) {
        this.heroList.push(name);
    };
    HeroListComponent.prototype.go = function () {
        console.log('클릭');
        this.random += 1;
    };
    HeroListComponent.prototype.ngOnInit = function () {
        if (this.random > 1) {
            console.log('컹데');
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], HeroListComponent.prototype, "ngInit", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], HeroListComponent.prototype, "random", void 0);
    HeroListComponent = __decorate([
        core_1.Component({
            selector: 'my-hero-list',
            templateUrl: '/views/list.html'
        }), 
        __metadata('design:paramtypes', [])
    ], HeroListComponent);
    return HeroListComponent;
}());
exports.HeroListComponent = HeroListComponent;
//# sourceMappingURL=hero-list.js.map