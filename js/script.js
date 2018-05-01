"use strict"

// CLASS PERSONNAGE *****************************************************************
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
    // document.querySelector(".img_warriors").style.transitionProperty="opacity"
    // document.querySelector(".img_warriors").style.transitionDuration="4s"
    // document.querySelector(".img_warriors").style.opacity = "0.4"
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
// RESET ********************************************************************************

var reset = document.getElementById("reset");
reset.addEventListener("click", function(){
  location.reload() ;
})


// INVENTAIRE ***************************************************************************

// let item1 = document.querySelector("#item1")
// let item2 = document.querySelector("#item2")
// let item3 = document.querySelector("#item3")
// let item4 = document.querySelector("#item4")
// let item5 = document.querySelector("#item5")
// let item6 = document.querySelector("#item6")

let itemGame1 = document.querySelector(".item1")
let itemGame2 = document.querySelector(".item2")
let itemGame3 = document.querySelector(".item3")
//
// item1.addEventListener("click", function() {
//   if(itemGame1.ClassName!=="item_game item1 full"){
//   document.querySelector("body").style.backgroundColor = "yellow"
//   itemGame1.setAttribute("class","item_game item1 full")
//   Syndra.attaquer(Mordekaizer);
//  }
// })



//  const InventaireMage = [
//   {
//   id:'sword_mage',
//   backgroundImage: 'url(../images/sword.png)'
//   },
//   {
//   id:'scepter_mage',
//   backgroundImage: 'url(../images/scepter.png)'
//   },
//   {
//   id:'red-potion_mage',
//   backgroundImage: 'url(../images/red-potion.png)'
//   },
//   {
//   id:'shield_mage',
//   backgroundImage: 'url(../images/shield.png)'
//   },
//   {
//   id:'blue-potion_mage',
//   backgroundImage: 'url(../images/blue-potion.png)'
//   },
//   {
//   id:'boots_mage',
//   backgroundImage: 'url(../images/botts.png)'
//   }
// ];
//
// //fonction forEach qui fait appelle achaque élément du tableau
//
// InventaireMage.forEach(function(element){
//   let button = document.getElementById(element.id);
//
//   button.addEventListener("click", function(e){
//       itemGame1.style.backgroundColor = "element.backgroundImage"
//   });
// });
