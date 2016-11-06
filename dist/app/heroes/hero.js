"use strict";
var Hero = (function () {
    function Hero(argId, argName) {
        this.argId = argId;
        this.argName = argName;
        this.id = argId;
        this.name = argName;
        this.age = 5;
    }
    Hero.prototype.setAge = function (age, event) {
        event.preventDefault();
        this.age += age;
    };
    ;
    return Hero;
}());
exports.Hero = Hero;
//# sourceMappingURL=hero.js.map
