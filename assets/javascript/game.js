
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
var kBlack   = heroConstructor("Black Knight",        80,  12, 2,  "assets/images/black-knight.jpg");
var kGrail   = heroConstructor("Knight of the Grail", 120, 10, 10, "assets/images/grail-knight.png");
var kBigBoy  = heroConstructor("Big Boy",             200, 8,  20, "assets/images/generic-knight.jpg");
var kSolaire = heroConstructor("Knight Solaire",      220, 6,  25, "assets/images/solaire.jpg");
var kMaximus = heroConstructor("Maximus",             300, 4,  27, "assets/images/gladiator.jpg");

var heros = [kBlack, kGrail, kBigBoy, kSolaire, kMaximus];

for (i=0; i<heros.length; i++) {
    $("#hero" + (i + 1) + " > .name").text(heros[i].name);
    $("#hero" + (i + 1) + " > .img").attr("src", heros[i].imgSource);
    $("#hero" + (i + 1) + " > .health").text(heros[i].health);
}

var userHero;
var defender;
var $enemyDiv = $("#enemy-div");
var $defendDiv = $("#defend-div");
var $deadDiv = $("#dead-div");

function getHero(cardID) {
    for (i=0; i<heros.length; i++) {
        if ($("#" + cardID + " > .name").text() === heros[i].name) {
            return heros[i];
        }
    }
}

function getCardID(aHero) {
    for (i=0; i<heros.length; i++) {
        if (aHero.name === $("#hero" + (i + 1) + " > .name").text()) {
            return "hero" + (i + 1);
        }
    }
}

function moveEnemies() {
    for (i=0; i<heros.length; i++) {
        if (getHero("hero" + (i + 1)) !== userHero) {
            $enemyDiv.append($("#hero" + (i + 1)));
        }
    }
}

function moveDefender(cardID) {
    $defendDiv.append($("#" + cardID));
}

function moveDead(cardID) {
    $deadDiv.append($("#" + cardID));
}

// card click code
$(".card").on("click", function() {
    var clickedHero = getHero(this.id);
    if (userHero == null) {
        userHero = clickedHero;
        moveEnemies();
    } else if (clickedHero !== userHero && clickedHero.health > 0 && defender == null) {
        defender = clickedHero;
        moveDefender(this.id);
    }
});

// attack code
$("#attack-button").on("click", function() {
    if (defender != null) {
        if (defender.health > 0 && userHero.health > 0) {
            
        } else {
            moveDead(getCardID(defender));
            defender = null;
        }
    }
});

// ON CLICK PSUDO
//store clicked hero in clickedHero
//if userHero hasnt been set, userHero = clickedHero
//else if clickedHero != userhero, clickedHero.health > 0, and defender position is empty,
//  defender = clickedHero, move defender to defender position.



// GENERAL PSUDO
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
