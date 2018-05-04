"use strict"

// CLASS PERSONNAGE *****************************************************************
class Personnage {
  constructor(nom, pv, force, magie, damage, armure, esquive, mana, ultime) {
    this.nom = nom,
      this.pv = pv,
      this.force = force,
      this.magie = magie,
      this.damage = damage,
      this.armure = armure,
      this.esquive = esquive,
      this.mana = mana,
      this.ultime = ultime
  }
  objectSword() {
    this.damage += this.force;
  }
  objectScepter() {
    this.damage += this.magie;
  }
  objectRedPotion() {
    this.pv += 400;
  }
  objectShield() {
    this.armure += 50;
  }
  objectBluePotion() {
    this.mana += 200;
  }
  objectBoots(cible) {
    this.esquive += 0.25;
  }
  moustache() {
    this.pv = 9000,
      this.force = 900,
      this.magie = 900,
      this.damage = 900,
      this.armure = 0,
      this.esquive = 0.50,
      this.mana = 0,
      this.ultime = 900
  }
}

// SOUS CLASS MAGE ******************************************************************
class Mage extends Personnage {
  constructor(nom, pv, force, magie, damage, armure, esquive, mana, ultime) {
    super(nom, pv, force, magie, damage, armure, esquive, mana, ultime)
  }
  attaquer(cible) {
    let degat = this.damage - cible.armure;
    if (degat <= 0) {
      degat = 0;
      console.log(`${this.nom} à infligé ${degat} de dégats à ${cible.nom}`)
      document.querySelector(".action_warriors").textContent = `${degat}`;
    } else if (Math.random() * 1 < cible.esquive) {
      console.log(`${cible.nom} à esquivé ${degat} de dégats de ${this.nom}`)
      document.querySelector(".action_warriors").textContent = "esquive!";
    } else {
      console.log(`${this.nom} à infligé ${degat} de dégats à ${cible.nom}`)
      cible.pv = cible.pv - degat
      document.querySelector(".action_warriors").textContent = `-${degat}`;
      document.querySelector("#pv_guerrier").textContent = cible.pv;
    }
  }
  afficherStatMage() {
    document.querySelector(".force_mage").textContent = ` ${this.force}`
    document.querySelector(".magie_mage").textContent = ` ${this.magie}`
    document.querySelector(".degats_mage").textContent = ` ${this.damage}`
    document.querySelector(".armure_mage").textContent = ` ${this.armure}`
    document.querySelector(".esquive_mage").textContent = ` ${this.esquive}`
    document.querySelector(".mana_mage").textContent = ` ${this.mana}`
    document.querySelector("#pv_mage").textContent = ` ${this.pv}`
  }
  abilityMage(cible) {
    let degat = this.ultime - cible.armure;
    if (degat <= 0) {
      degat = 0;
      console.log(`${this.nom} à infligé ${degat} de dégats à ${cible.nom}`)
      document.querySelector(".action_mage").textContent = `${degat}`;
      this.mana -= 50
    } else if (this.mana < 50) {
      document.querySelector(".action_mage").textContent = `Pas assez de mana`;
    } else {
      console.log(`${this.nom} à infligé ${degat} de dégats à ${cible.nom}`)
      cible.pv = cible.pv - degat
      document.querySelector(".action_warriors").textContent = `-${degat}`;
      document.querySelector("#pv_guerrier").textContent = cible.pv;
      this.mana -= 50
    }
  }
  yourDead(cible) {
    if (cible.pv <= 0) {
      document.querySelector(".action_mage").textContent = `GG`;
      document.querySelector(".action_warriors").textContent = `GAME OVER`;
      cible.pv = 0
      document.querySelector("#pv_guerrier").textContent = cible.pv;
    }
  }
}


// SOUS CLASS GUERRIER **************************************************************
class Guerrier extends Personnage {
  constructor(nom, pv, force, magie, damage, armure, esquive, mana, ultime) {
    super(nom, pv, force, magie, damage, armure, esquive, mana, ultime)
  }
  attaquer(cible) {
    let degat = this.damage - cible.armure;
    if (degat <= 0) {
      degat = 0;
      console.log(`${this.nom} à infligé ${degat} de dégats à ${cible.nom}`)
      document.querySelector(".action_mage").textContent = `${degat}`;
    } else if (Math.random() * 1 <= cible.esquive) {
      console.log(`${cible.nom} à esquivé ${degat} de dégats de ${this.nom}`)
      document.querySelector(".action_mage").textContent = "esquive!";
    } else {
      console.log(`${this.nom} à infligé ${degat} de dégats à ${cible.nom}`)
      cible.pv = cible.pv - degat
      document.querySelector(".action_mage").textContent = `-${degat}`;
      document.querySelector("#pv_mage").textContent = cible.pv;
    }
  }
  afficherStatWarriors() {
    document.querySelector(".force_guerrier").textContent = ` ${this.force}`
    document.querySelector(".magie_guerrier").textContent = ` ${this.magie}`
    document.querySelector(".degats_guerrier").textContent = ` ${this.damage}`
    document.querySelector(".armure_guerrier").textContent = ` ${this.armure}`
    document.querySelector(".esquive_guerrier").textContent = ` ${this.esquive}`
    document.querySelector(".mana_guerrier").textContent = ` ${this.mana}`
    document.querySelector("#pv_guerrier").textContent = ` ${this.pv}`
  }
  abilityWarriors(cible) {
    let degat = this.ultime - cible.armure;
    if (degat <= 0) {
      degat = 0;
      console.log(`${this.nom} à infligé ${degat} de dégats à ${cible.nom}`)
    } else {
      console.log(`${this.nom} à infligé ${degat} de dégats à ${cible.nom}`)
      cible.pv = cible.pv - degat
      document.querySelector(".action_mage").textContent = `-${degat}`;
      document.querySelector("#pv_mage").textContent = cible.pv;
    }
    this.pv = Math.floor(this.pv / 2)
  }
  yourDead(cible) {
    if (cible.pv <= 0) {
      document.querySelector(".action_warriors").textContent = `GG`;
      document.querySelector(".action_mage").textContent = `GAME OVER`;
      cible.pv = 0
      document.querySelector("#pv_mage").textContent = cible.pv;
    }
  }
}

// DECLARATION DES HEROS EN VARIABLES QUI CORRESPOND A UNE CLASS MAGE ET GUERRIER ***
const Syndra = new Mage("Syndra", 1500, 50, 200, 50, 50, 0, 100, 300)
const Mordekaizer = new Guerrier("Mordekaizer", 1500, 220, 10, 50, 100, 0, 0, 400)

// RESET *******************************************************************************

let reset = document.getElementById("reset");
reset.addEventListener("click", function() {
  location.reload();
})

// INVENTAIRE **************************************************************************

// Inventaire du mage--------
let swordMage = document.querySelector("#sword_mage")
let scepterMage = document.querySelector("#scepter_mage")
let redPotionMage = document.querySelector("#red-potion_mage")
let shieldMage = document.querySelector("#shield_mage")
let bluePotionMage = document.querySelector("#blue-potion_mage")
let bootsMage = document.querySelector("#boots_mage")


//Inventaire du warriors----
let swordWarriors = document.querySelector("#sword_warriors")
let scepterWarriors = document.querySelector("#scepter_warriors")
let redPotionWarriors = document.querySelector("#red-potion_warriors")
let shieldWarriors = document.querySelector("#shield_warriors")
let bluePotionWarriors = document.querySelector("#blue-potion_warriors")
let bootsWarriors = document.querySelector("#boots_warriors")

//ADDEVENTLISTENER OBJECT MAGE**********************************************************

var oneSwordMage = true
var oneScepterMage = true
var oneRedPotionMage = true
var oneShieldMage = true
var oneBluePotionMage = true
var oneBootsMage = true
var troisObjectsMage = 1;


swordMage.addEventListener("click", function() {
  if (oneSwordMage === true && troisObjectsMage <= 3) {
    Syndra.objectSword()
    Syndra.afficherStatMage()
    console.log(Syndra.damage)
    oneSwordMage = false
    swordMage.style.backgroundColor = "#FFA726";
    document.querySelector(".degats_mage").style.color = "blue"
    troisObjectsMage++
  }
})


scepterMage.addEventListener("click", function() {
  if (oneScepterMage === true && troisObjectsMage <= 3) {
    Syndra.objectScepter()
    Syndra.afficherStatMage()
    console.log(Syndra.damage)
    oneScepterMage = false
    scepterMage.style.backgroundColor = "#FFA726";
    document.querySelector(".degats_mage").style.color = "blue"
    troisObjectsMage++
  }
})

redPotionMage.addEventListener("click", function() {
  if (oneRedPotionMage === true && troisObjectsMage <= 3) {
    Syndra.objectRedPotion()
    Syndra.afficherStatMage()
    console.log(Syndra.pv)
    oneRedPotionMage = false
    redPotionMage.style.backgroundColor = "#FFA726";
    troisObjectsMage++
  }
})

shieldMage.addEventListener("click", function() {
  if (oneShieldMage === true && troisObjectsMage <= 3) {
    Syndra.objectShield()
    Syndra.afficherStatMage()
    console.log(Syndra.armure)
    oneShieldMage = false
    shieldMage.style.backgroundColor = "#FFA726";
    document.querySelector(".armure_mage").style.color = "blue"
    troisObjectsMage++
  }
})

bluePotionMage.addEventListener("click", function() {
  if (oneBluePotionMage === true && troisObjectsMage <= 3) {
    Syndra.objectBluePotion()
    Syndra.afficherStatMage()
    console.log(Syndra.mana)
    oneBluePotionMage = false
    bluePotionMage.style.backgroundColor = "#FFA726";
    document.querySelector(".mana_mage").style.color = "blue"
    troisObjectsMage++
  }
})

bootsMage.addEventListener("click", function() {
  if (oneBootsMage === true && troisObjectsMage <= 3) {
    Syndra.objectBoots()
    Syndra.afficherStatMage()
    console.log(Syndra.esquive)
    oneBootsMage = false
    bootsMage.style.backgroundColor = "#FFA726";
    document.querySelector(".esquive_mage").style.color = "blue"
    troisObjectsMage++
  }
})

//ADDEVENTLISTENER OBEJECT WARRIORS****************************************************

var oneSwordWarriors = true
var oneScepterWarriors = true
var oneRedPotionWarriors = true
var oneShieldWarriors = true
var oneBluePotionWarriors = true
var oneBootsWarriors = true
var troisObjectsWarriors = 1

swordWarriors.addEventListener("click", function() {
  if (oneSwordWarriors === true && troisObjectsWarriors <= 3) {
    Mordekaizer.objectSword()
    Mordekaizer.afficherStatWarriors()
    console.log(Mordekaizer.damage)
    oneSwordWarriors = false
    swordWarriors.style.backgroundColor = "#FFA726";
    document.querySelector(".degats_guerrier").style.color = "red"
    troisObjectsWarriors++
  }
})
redPotionWarriors.addEventListener("click", function() {
  if (oneRedPotionWarriors === true && troisObjectsWarriors <= 3) {
    Mordekaizer.objectRedPotion()
    Mordekaizer.afficherStatWarriors()
    console.log(Mordekaizer.pv)
    oneRedPotionWarriors = false
    redPotionWarriors.style.backgroundColor = "#FFA726";
    troisObjectsWarriors++
  }
})

scepterWarriors.addEventListener("click", function() {
  if (oneScepterWarriors === true && troisObjectsWarriors <= 3) {
    Mordekaizer.objectScepter()
    Mordekaizer.afficherStatWarriors()
    console.log(Mordekaizer.damage)
    oneScepterWarriors = false
    scepterWarriors.style.backgroundColor = "#FFA726";
    document.querySelector(".degats_guerrier").style.color = "red"
    troisObjectsWarriors++
  }
})

shieldWarriors.addEventListener("click", function() {
  if (oneShieldWarriors === true && troisObjectsWarriors <= 3) {
    Mordekaizer.objectShield()
    Mordekaizer.afficherStatWarriors()
    console.log(Mordekaizer.armure)
    oneShieldWarriors = false
    shieldWarriors.style.backgroundColor = "#FFA726";
    document.querySelector(".armure_guerrier").style.color = "red"
    troisObjectsWarriors++
  }
})

bluePotionWarriors.addEventListener("click", function() {
  if (oneBluePotionWarriors === true && troisObjectsWarriors <= 3) {
    Mordekaizer.objectBluePotion()
    Mordekaizer.afficherStatWarriors()
    console.log(Mordekaizer.mana)
    oneBluePotionWarriors = false
    bluePotionWarriors.style.backgroundColor = "#FFA726";
    document.querySelector(".mana_guerrier").style.color = "red"
    troisObjectsWarriors++
  }
})

bootsWarriors.addEventListener("click", function() {
  if (oneBootsWarriors === true && troisObjectsWarriors <= 3) {
    Mordekaizer.objectBoots()
    Mordekaizer.afficherStatWarriors()
    console.log(Mordekaizer.esquive)
    oneBootsWarriors = false
    bootsWarriors.style.backgroundColor = "#FFA726";
    document.querySelector(".esquive_guerrier").style.color = "red"
    troisObjectsWarriors++
  }
})

//ADDEVENTLISTENER ACTION *************************************************************

let abilityMage = document.querySelector(".ability_mage")
let attackMage = document.querySelector(".attack_mage")
let abilityWarriors = document.querySelector(".ability_warriors")
let attackWarriors = document.querySelector(".attack_warriors")


attackMage.addEventListener("click", function() {
  Syndra.attaquer(Mordekaizer)
  Syndra.yourDead(Mordekaizer)
})

abilityMage.addEventListener("click", function() {
  Syndra.abilityMage(Mordekaizer)
  Syndra.afficherStatMage()
  Syndra.yourDead(Mordekaizer)
})

attackWarriors.addEventListener("click", function() {
  Mordekaizer.attaquer(Syndra)
  Mordekaizer.yourDead(Syndra)
})

abilityWarriors.addEventListener("click", function() {
  Mordekaizer.abilityWarriors(Syndra)
  Mordekaizer.afficherStatWarriors()
  Mordekaizer.yourDead(Syndra)
  Mordekaizer.yourDead(Mordekaizer)
})

// PERSO CACHé *************************************************************************

document.addEventListener('keypress', (event) => {
  if (event.key === "c") {
    var code = prompt('Entrer un code');
    if (code === "vincent") {
      document.querySelector(".img_warriors").style.backgroundImage = "url('../images/strongman2.jpeg')"
      document.querySelector("#strongman").textContent = "Strongman"
      Mordekaizer.moustache()
      Mordekaizer.afficherStatWarriors()
    }
  }
});
