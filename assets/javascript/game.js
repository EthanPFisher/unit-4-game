
// constructs hero objects
function heroConstructor(name, health, basePower, dPower, imgSource) {
    var thisHero = {
        name: name,
        health: health,
        basePower: basePower,
        aPower: basePower,
        dPower: dPower,
        imgSource: imgSource
    };
    thisHero.className = "hero";
    return thisHero;
};

// create heros
var kBlack = heroConstructor("The Black Knight",    100, 15, 2, "assets/images/black-knight.jpg");
var kGrail = heroConstructor("Knight of the Grail", 120, 12, 10, "assets/images/grail-knight.png");
var kSolaire = heroConstructor("Knight Solaire",    160, 8, 20, "assets/images/solaire.jpg");
var kMaximus = heroConstructor("Maximus",           190, 5, 25, "assets/images/gladiator.jpg");

var heros = [kBlack, kGrail, kSolaire, kMaximus];

for (i = 0; i < heros.length; i++) {
    $("#hero" + (i + 1) + " > .name").text(heros[i].name);
    $("#hero" + (i + 1) + " > .img").attr("src", heros[i].imgSource);
    $("#hero" + (i + 1) + " > .health").text(heros[i].health);
}

var userHero;
var defender;
var $enemyDiv = $("#enemy-div");
var $defendDiv = $("#defend-div");
var $deadDiv = $("#dead-div");
var $statusText = $("#status-text");

function getHero(cardID) {
    for (i = 0; i < heros.length; i++) {
        if ($("#" + cardID + " > .name").text() === heros[i].name) {
            return heros[i];
        }
    }
}

function getCardID(aHero) {
    for (i = 0; i < heros.length; i++) {
        if (aHero.name === $("#hero" + (i + 1) + " > .name").text()) {
            return "hero" + (i + 1);
        }
    }
}

function placeCards() {
    $("#choose-text").text("Your fighter:");
    $("#hero-div").append($("#" + getCardID(userHero)));
    for (i = 0; i < heros.length; i++) {
        if (getHero("hero" + (i + 1)) !== userHero) {
            $enemyDiv.append($("#hero" + (i + 1)));
        }
    }
}

// card click code
$(".card").on("click", function () {
    var clickedHero = getHero(this.id);
    if (userHero == null) {
        userHero = clickedHero;
        $statusText.text("You enter the Arena as " + userHero.name + "!");
        placeCards();
    } else if (clickedHero !== userHero && clickedHero.health > 0 && defender == null) {
        defender = clickedHero;
        $statusText.text("You challenge " + defender.name + ". He accepts.");
        $defendDiv.append($("#" + this.id));
    }
});

// attack code
var killCount = 0;
$("#attack-button").on("click", function () {
    if (userHero.health > 0 && killCount != 3) {
        if (defender != null) {
            defender.health -= userHero.aPower;
            $("#" + getCardID(defender) + " > .health").text(defender.health);
            if (defender.health > 0) {
                userHero.health -= defender.dPower;
                $("#" + getCardID(userHero) + " > .health").text(userHero.health);
                $statusText.text("You attack " + defender.name + " for " + userHero.aPower + " damage. " + defender.name + " counter-attacks for " + defender.dPower + " damage.");
                if (userHero.health <= 0) {
                    // loss case
                    $statusText.text("You died, but at least you entertained... GAME OVER");
                }
            } else {
                $statusText.text("You have slain " + defender.name + ". Challenge another opponent.")
                $deadDiv.append($("#" + getCardID(defender)));
                defender = null;
                killCount++;
                if (killCount == 3) {
                    // win case
                    $statusText.text("You are the champion of the Arena!! GAME OVER");
                }
            }
            userHero.aPower += userHero.basePower;
        } else {
            $statusText.text("No defender to attack");
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
//until you win or die?
