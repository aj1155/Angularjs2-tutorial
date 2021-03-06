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
var HeroListComponent = (function () {
    function HeroListComponent() {
    }
    HeroListComponent.prototype.setHeroList = function (name) {
        this.heroList.push(name);
    };
    return HeroListComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], HeroListComponent.prototype, "heroList", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HeroListComponent.prototype, "setHeroList", null);
HeroListComponent = __decorate([
    core_1.Component({
        selector: 'my-hero-list',
        template: "\n  <div *ngFor = \"let hName of heroList\">\n  <h2>{{hName}}</h2>\n</div>\n  "
    }),
    __metadata("design:paramtypes", [])
], HeroListComponent);
exports.HeroListComponent = HeroListComponent;
//# sourceMappingURL=hero-list.js.map