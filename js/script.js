'use strict'

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
  objectRedPotion() {
    this.pv += 400
  }
  objectShield() {
    this.armure += 50
  }
  objectBluePotion(){
    this.mana =+ 200
  }
  objectboots(cible){
    this.esquive = 0.25
  }
}


// SOUS CLASS MAGE ******************************************************************
class Mage extends Personnage {
  constructor( nom, pv, force, magie, damage, armure, esquive, mana, ultime ){
    super(nom, pv, force, magie, damage, armure, esquive, mana, ultime)
  }
  attaquer(cible){
    let degat = this.damage - cible.armure;
    if(degat<0){
      degat = 0;
      console.log(`${this.nom} à infligé ${degat} de dégats à ${cible.nom}`)
    }else if(Math.random()*1<=cible.esquive){
      console.log(`${cible.nom} à esquivé ${degat} de dégats de ${this.nom}`)
      document.querySelector(".action_warriors").textContent = "esquive!";
    }else{
      console.log(`${this.nom} à infligé ${degat} de dégats à ${cible.nom}`)
      cible.pv = cible.pv - degat
      document.querySelector("#pv_guerrier").textContent = cible.pv;
    }
  }
  afficherStatMage(){
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
  constructor( nom, pv, force, magie, damage, armure, esquive, mana, ultime ){
    super(nom, pv, force, magie, damage, armure, esquive, mana, ultime)
  }
  attaquer(cible){
    let degat = this.damage - cible.armure;
    console.log(`${this.nom} à infligé ${degat} de dégats à ${cible.nom}`)
    cible.pv = cible.pv - degat
    document.querySelector("#pv_mage").textContent = Syndra.pv;
  }
  afficherStatWarriors() {
    document.querySelector(".force_warriors").textContent = ` ${this.force}`
    document.querySelector(".magie_warriors").textContent = ` ${this.magie}`
    document.querySelector(".damage_warriors").textContent = ` ${this.damage}`
    document.querySelector(".armure_warriors").textContent = ` ${this.armure}`
    document.querySelector(".esquive_warriors").textContent = ` ${this.esquive}`
    document.querySelector(".mana_warriors").textContent = ` ${this.mana}`
    document.querySelector("#pv_guerrier").textContent = ` ${this.pv}`
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

var oneSwordMage=true
var oneScepterMage = true
var oneRedPotionMage = true
var oneShieldMage = true
var oneBluePotionMage = true
var oneBootsMage = true


swordMage.addEventListener("click", function() {
  if(oneSwordMage===true){
  Syndra.objectSword()
  Syndra.afficherStatMage()
  console.log(Syndra.damage)
  oneSwordMage=false
  }
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
