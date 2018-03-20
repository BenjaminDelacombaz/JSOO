function Character(name) {
  this.name = name
  this.health = 50
  this.strength = 10
  this.mana = 50
  this.exp = 0
}

Character.prototype.status = function() {
  return "Status de " + this.name + ": " + this.health + " points de vie, " + this.strength + " points de force, " + this.mana + " points de mana et " + this.exp + " points d'exp"
}

Character.prototype.treat = function(character) {
  character.health += 10
  if (character == this) {
    return this.name + " s'est soigné de 10 points de vie"
  } else {
    return this.name + " a soigné " + character.name + " de 10 points de vie"
  }
}

Character.prototype.attack = function(character) {
  character.health -= this.strength
  if (character == this) {
    return this.name + " s'est infligé " + this.strength + " points de dégats"
  } else {
    return this.name + " a infligé " + this.strength  + " points de dégats à " + character.name
  }
}
