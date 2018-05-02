'use strict'

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
    this.damage += this.force
  }
  objectScepter() {
    this.damage += this.magie
  }
  objectRedPotion() {
    this.pv += 400
  }
  objectShield() {
    this.armure += 50
  }
  objectBluePotion() {
    this.mana = +200
  }
  objectBoots(cible) {
    this.esquive = 0.25
  }
}


// SOUS CLASS MAGE ******************************************************************
class Mage extends Personnage {
  constructor(nom, pv, force, magie, damage, armure, esquive, mana, ultime) {
    super(nom, pv, force, magie, damage, armure, esquive, mana, ultime)
  }
  attaquer(cible) {
    let degat = this.damage - cible.armure;
    if (degat < 0) {
      degat = 0;
      console.log(`${this.nom} à infligé ${degat} de dégats à ${cible.nom}`)
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
}


// SOUS CLASS GUERRIER **************************************************************
class Guerrier extends Personnage {
  constructor(nom, pv, force, magie, damage, armure, esquive, mana, ultime) {
    super(nom, pv, force, magie, damage, armure, esquive, mana, ultime)
  }
  attaquer(cible) {
    let degat = this.damage - cible.armure;
    if (degat < 0) {
      degat = 0;
      console.log(`${this.nom} à infligé ${degat} de dégats à ${cible.nom}`)
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
}

// DECLARATION DES HEROS EN VARIABLES QUI CORRESPOND A UNE CLASS MAGE ET GUERRIER ***
const Syndra = new Mage("Syndra", 1500, 50, 120, 50, 50, 0, 100, 250)
const Mordekaizer = new Guerrier("Mordekaizer", 1500, 130, 10, 50, 100, 0, 0, 400)


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
  if (oneSwordMage === true && troisObjectsMage<=3) {
    Syndra.objectSword()
    Syndra.afficherStatMage()
    console.log(Syndra.damage)
    oneSwordMage = false
    troisObjectsMage ++
  }
})


scepterMage.addEventListener("click", function() {
  if (oneScepterMage === true && troisObjectsMage<=3) {
    Syndra.objectScepter()
    Syndra.afficherStatMage()
    console.log(Syndra.damage)
    oneScepterMage = false
    troisObjectsMage ++
  }
})

redPotionMage.addEventListener("click", function() {
  if (oneRedPotionMage === true && troisObjectsMage<=3) {
    Syndra.objectRedPotion()
    Syndra.afficherStatMage()
    console.log(Syndra.pv)
    oneRedPotionMage = false
    troisObjectsMage ++
  }
})

shieldMage.addEventListener("click", function() {
  if (oneShieldMage === true && troisObjectsMage<=3) {
    Syndra.objectShield()
    Syndra.afficherStatMage()
    console.log(Syndra.armure)
    oneShieldMage = false
    troisObjectsMage ++
  }
})

bluePotionMage.addEventListener("click", function() {
  if (oneBluePotionMage === true && troisObjectsMage<=3) {
    Syndra.objectBluePotion()
    Syndra.afficherStatMage()
    console.log(Syndra.mana)
    oneBluePotionMage = false
    troisObjectsMage ++
  }
})

bootsMage.addEventListener("click", function() {
  if (oneBootsMage === true && troisObjectsMage<=3) {
    Syndra.objectBoots()
    Syndra.afficherStatMage()
    console.log(Syndra.esquive)
    oneBootsMage = false
    troisObjectsMage ++
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
    troisObjectsWarriors ++
  }
})
redPotionWarriors.addEventListener("click", function() {
  if (oneRedPotionWarriors === true && troisObjectsWarriors <= 3) {
    Mordekaizer.objectRedPotion()
    Mordekaizer.afficherStatWarriors()
    console.log(Mordekaizer.pv)
    oneRedPotionWarriors = false
    troisObjectsWarriors ++

  }
})

scepterWarriors.addEventListener("click", function() {
  if (oneScepterWarriors === true && troisObjectsWarriors <= 3) {
    Mordekaizer.objectScepter()
    Mordekaizer.afficherStatWarriors()
    console.log(Mordekaizer.damage)
    oneScepterWarriors = false
    troisObjectsWarriors ++

  }
})

shieldWarriors.addEventListener("click", function() {
  if (oneShieldWarriors === true && troisObjectsWarriors <= 3) {
    Mordekaizer.objectShield()
    Mordekaizer.afficherStatWarriors()
    console.log(Mordekaizer.armure)
    oneShieldWarriors = false
    troisObjectsWarriors ++

  }
})

bluePotionWarriors.addEventListener("click", function() {
  if (oneBluePotionWarriors === true && troisObjectsWarriors <= 3) {
    Mordekaizer.objectBluePotion()
    Mordekaizer.afficherStatWarriors()
    console.log(Mordekaizer.mana)
    oneBluePotionWarriors = false
    troisObjectsWarriors ++

  }
})

bootsWarriors.addEventListener("click", function() {
  if (oneBootsWarriors === true && troisObjectsWarriors <= 3) {
    Mordekaizer.objectBoots()
    Mordekaizer.afficherStatWarriors()
    console.log(Mordekaizer.esquive)
    oneBootsWarriors = false
    troisObjectsWarriors ++

  }
})

//ADDEVENTLISTENER ACTION *************************************************************

let attackMage = document.querySelector(".attack_mage")
let attackWarriors = document.querySelector(".attack_warriors")

attackMage.addEventListener("click", function() {
  Syndra.attaquer(Mordekaizer)
})

attackWarriors.addEventListener("click", function() {
  Mordekaizer.attaquer(Syndra)
})




//  const InventaireMage = [
//   {id:'sword_mage', Mordekaizer.objectSword()},
//   {id:'scepter_mage'}
//   {id:'red-potion_mage'},
//   {id:'shield_mage'},
//   {id:'blue-potion_mage'},
//   {id:'boots_mage'}
// ];

//fonction forEach qui fait appelle achaque élément du tableau

// InventaireMage.forEach(function(element){
//   let press = document.getElementById(element.id);
//   press.addEventListener("click", function(e){
//
//   });
// }
