// constructs hero objects
function heroConstructor(name, health, aPower, dPower, imgSource) {
    var thisHero = {
        name: name,
        health: health,
        aPower: aPower,
        dPower: dPower,
        imgSource: imgSource
    };
    thisHero.className = "hero";
    return thisHero;
};

// create heros
var kBlack    = heroConstructor("Black Knight",             80,  12, 2,  "assets/images/black-knight.jpg");
var kGrail    = heroConstructor("Knight of the Grail",      120, 10, 10, "assets/images/grail-knight.jpg");
var kBigBoy   = heroConstructor("Big Boy",                  200, 8,  20, "assets/images/generic-knight.jpg");
var kSolaire  = heroConstructor("Knight Solaire",           220, 6,  25, "assets/images/solaire.jpg");
var kMaximus  = heroConstructor("Maximus Decimus Meridius", 300, 4,  27, "assets/images/gladiator.jpg");

// var heros = [kBlack, kGrail, kBigBoy, kSolaire, kMaximus];

$("#hero1").attr("src", kBlack.imgSource);
$("#black-knight > #health1").text(kBlack.health);

//put dudes in first card positions
//if dude is clicked, store dude obj in userHero variable
//move other dudes down to enemy card positions
//move only first enemy clicked to defender card position
//when attack button is clicked, subtract userHero.aPower from defender.health
//if defender.health > 0, subtract defender.dPower from userHero.health
//then add initial userHero.aPower to current userHero.aPower (store initial aPower seperately)
//continue until one dude dies
//(loss conditional)
//move dead guy to dead card pos
//loop until you win or die?
