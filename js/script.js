"use strict"

class  Personnage {
  constructor( nom, pv, force, magie, damage, armure, esquive, mana, ultime ){
    this.nom = nom,
    this.pv = pv,
    this.force = force,
    this.damage = damage,
    this.armure = armure,
    this.esquive = esquive,
    this.mana = mana,
    this.ultime= ultime
  }
}

class Mage extends Personnage {
  constructor( nom, pv, force, magie, damage, armure, esquive, mana, ultime ){
    super(nom, pv, force, damage, armure, esquive, mana, ultime)
  }
  attaquer(cible){
    let degat = this.damage - cible.armure;
    console.log(`${this.nom} à infligé ${degat} de dégats à ${cible.nom}`)
    cible.pv = cible.pv - degat
    document.querySelector("#pv_guerrier").textContent = Mordekaizer.pv;
  }
}

class Guerrier extends Personnage {
  constructor( nom, pv, force, magie, damage, armure, esquive, mana, ultime ){
    super(nom, pv, force, damage, armure, esquive, mana, ultime)
  }
  attaquer(cible){
    let degat = this.damage - cible.armure;
    console.log(`${this.nom} à infligé ${degat} de dégats à ${cible.nom}`)
    cible.pv = cible.pv - degat
    document.querySelector("#pv_mage").textContent = Syndra.pv;
  }
}

const Syndra = new Mage("Syndra",1500, 50, 250, 50, 50, 0, 100, 400)
const Mordekaizer = new Guerrier("Mordekaizer", 1500, 300, 50, 50, 120, 0, 0, 600)


let item1 = document.querySelector("#item1")
let item2 = document.querySelector("#item2")
let item3 = document.querySelector("#item3")
let item4= document.querySelector("#item4")
let item5 = document.querySelector("#item5")
let item6 = document.querySelector("#item6")

item1.addEventListener("click" function() {
  document.querySelector("body").style.backgroundColor = "yellow"
})
