"use strict"

class  Personnage {
  constructor( nom, pv, dmg, power, ar, mr, ){
    this.nom = nom;
    this.pv = pv;
    this.dmg = dmg;
    this.power = power;
    this.ar = ar;
  }
  attaquer(cible){
    let degat = this.dmg - cible.ar;
    console.log(`${this.nom} à infligé ${degat} de dégats à ${cible.nom}`)
    cible.pv = cible.pv - degat
  }
}

class Sorcier extends Personnage {
  constructor( nom, pv, dmg, power, ar, ultime ){
    super(nom, pv, dmg, power, ar, mr,)
    this.ultime = ultime
  }
   utiliserUltime(cible){
     if(this.pv<500){ this.dmg = this.ultime }
 }
}
const Kassadin = new Sorcier("Kassadin", 1500, 200, 300, 50,  350)
const Olaf = new Personnage("Olaf", 1500, 400, 0, 100, 50)

Olaf.attaquer(Kassadin)
