"use strict"

// CLASS PERSONNAGE *****************************************************************
class  Personnage {
  constructor( nom, pv, force, magie, damage, armure, esquive, mana, ultime ){
    this.nom = nom,
    this.pv = pv,
    this.force = force,
    this.magie = magie,
    this.damage = damage,
    this.armure = armure,
    this.esquive = esquive,
    this.mana = mana,
    this.ultime= ultime
  }
  objectSword() {
    this.damage += this.force
  }
  objectScepter() {
    this.damage += this.magie
  }

}

// SOUS CLASS MAGE ******************************************************************
class Mage extends Personnage {
  constructor( nom, pv, force, magie, damage, armure, esquive, mana, ultime ){
    super(nom, pv, force, magie, damage, armure, esquive, mana, ultime)
  }
  attaquer(cible){
    let degat = this.damage - cible.armure;
    console.log(`${this.nom} à infligé ${degat} de dégats à ${cible.nom}`)
    cible.pv = cible.pv - degat
    document.querySelector("#pv_guerrier").textContent = cible.pv;
    // document.querySelector(".img_warriors").style.transitionProperty="opacity"
    // document.querySelector(".img_warriors").style.transitionDuration="4s"
    // document.querySelector(".img_warriors").style.opacity = "0.4"
  }
}

// SOUS CLASS GUERRIER **************************************************************
class Guerrier extends Personnage {
  constructor( nom, pv, force, magie, damage, armure, esquive, mana, ultime ){
    super(nom, pv, force, magie, damage, armure, esquive, mana, ultime)
  }
  attaquer(cible){
    let degat = this.damage - cible.armure;
    console.log(`${this.nom} à infligé ${degat} de dégats à ${cible.nom}`)
    cible.pv = cible.pv - degat
    document.querySelector("#pv_mage").textContent = Syndra.pv;
  }
}

// DECLARATION DES HEROS EN VARIABLES QUI CORRESPOND A UNE CLASS MAGE ET GUERRIER ***
const Syndra = new Mage("Syndra", 1500, 50, 120, 50, 50, 0, 100, 250)
const Mordekaizer = new Guerrier("Mordekaizer", 1500, 130, 10, 50, 100, 0, 0, 400 )


// RESET *******************************************************************************

let reset = document.getElementById("reset");
reset.addEventListener("click", function(){
  location.reload() ;
})

// INVENTAIRE **************************************************************************

// Inventaire du mage--------
let swordMage = document.querySelector("#sword_mage")
let scepterMage= document.querySelector("#scepter_mage")
let redPotionMage= document.querySelector("#red-potion_mage")
let shieldMage= document.querySelector("#shield_mage")
let bluePotionMage= document.querySelector("#blue-potion_mage")
let bootsMage= document.querySelector("#boots_mage")


//Inventaire du warriors----
let swordWarriors= document.querySelector("#sword_warriors")
let scepterWarriors= document.querySelector("#scepter_warriors")
let redPotionWarriors= document.querySelector("#red-potion_warriors")
let shieldWarriors= document.querySelector("#shield_warriors")
let bluePotionWarriors= document.querySelector("#blue-potion_warriors")
let bootsWarriors= document.querySelector("#boots_warriors")

//ADDEVENTLISTENER OBJECT MAGE**********************************************************


// let oneScepterMage = true
// let oneRedPotionMage = true
// let oneShieldMage = true
// let oneBluePotionMage = true
// let oneBootsMage = true

swordMage.addEventListener("click", function() {
  Syndra.objectSword()
  console.log(Syndra.damage)
})

scepterMage.addEventListener("click", function() {
  Syndra.objectScepter()
  console.log(Syndra.damage)
})

redPotionMage.addEventListener("click", function() {
  Syndra.objectScepter()
  console.log(Syndra.damage)
})

shieldMage.addEventListener("click", function() {
  Syndra.objectScepter()
  console.log(Syndra.damage)
})

bluePotionMage.addEventListener("click", function() {
  Syndra.objectScepter()
  console.log(Syndra.damage)
})

bootsMage.addEventListener("click", function() {
  Syndra.objectScepter()
  console.log(Syndra.damage)
})

//ADDEVENTLISTENER OBEJECT WARRIORS****************************************************

swordWarriors.addEventListener("click", function() {
  Mordekaizer.objectSword()
  console.log(Mordekaizer.damage)
})

scepterWarriors.addEventListener("click", function() {
  Mordekaizer.objectScepter()
  console.log(Mordekaizer.damage)
})

redPotionWarriors.addEventListener("click", function() {
  Mordekaizer.objectScepter()
  console.log(Mordekaizer.damage)
})

shieldWarriors.addEventListener("click", function() {
  Mordekaizer.objectScepter()
  console.log(Mordekaizer.damage)
})

bluePotionWarriors.addEventListener("click", function() {
  Mordekaizer.objectScepter()
  console.log(Mordekaizer.damage)
})

bootsWarriors.addEventListener("click", function() {
  Mordekaizer.objectScepter()
  console.log(Mordekaizer.damage)
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
