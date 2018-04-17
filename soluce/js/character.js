let Character = {
  name: '',
  health: 50,
  strength: 10,
  mana: 50,

  status () {
    return `Status de ${this.name}: ${this.health} points de vie, ${this.strength} points de force, ${this.mana} points de mana`
  },

  treat (target, care = 10) {
    target.health += care
    if (target == this) {
      return `${this.name} s'est soigné de ${care} points de vie`
    } else {
      return `${this.name} a soigné ${target.name} de ${care} points de vie`
    }
  },

  attack (target, damage = this.strength) {
    let endMessage = ''
    endMessage = target.lostHP(damage)
    if (endMessage == true) {
      if (target == this) {
        endMessage = `${this.name} s'est infligé ${damage} points de dégats`
      } else {
        endMessage = `${this.name} a infligé ${damage} points de dégats à ${target.name}`
      }
    } else {
      endMessage = `${this.name} a infligé ${damage} points de dégats à ${target.name} et ${endMessage}`
    }
    return endMessage
  },

  lostHP (num) {
    this.health -= num
    if (this.health <= 0) {
      this.health = 0
      return `${this.name} est mort...`
    } else {
      return true
    }
  },

  lostMana (num) {
    if (this.mana <= 0) {
      this.mana = 0
      return `${this.name} n'a plus de mana`
    } else {
      if (this.mana >= num)
      {
        this.mana -= num
        return true
      } else {
        return `${this.name} n'a pas assez de mana`
      }
    }
  }
}
