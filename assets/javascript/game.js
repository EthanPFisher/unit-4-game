// constructs hero objects
function heroConstructor(name, health, aPower, dPower, imgSource) {
    var thisHero = {
        name: this.name,
        health: this.health,
        aPower: this.aPower,
        dPower: this.dPower,
        imgSource: this.imgSource
    };
    return thisHero;
};

// create heros
var kBlack    = heroConstructor("Black Knight",             80,  12, 2,  "assets/images/black-knight.jpg");
var kGrail    = heroConstructor("Knight of the Grail",      120, 10, 10, "../images/grail-knight.jpg");
var kBigBoy   = heroConstructor("Big Boy",                  200, 8,  20, "../images/generic-knight.jpg");
var kSolaire  = heroConstructor("Knight Solaire",           220, 6,  25, "../images/solaire.jpg");
var gladiator = heroConstructor("Maximus Decimus Meridius", 300, 4,  27, "assets/images/gladiator.jpg");

var img = document.createElement("img");
img.src = kSolaire.imgSource;
var src = document.getElementById("hero1");
src.appendChild(img);