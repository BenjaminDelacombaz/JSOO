let Wizard = Object.assign(Object.create(Character), {
  classPower (target) {
    let endMessage = ''
    let damage = this.strength*2
    let manaCost = 20
    endMessage = this.lostMana(manaCost)
    if (endMessage == true)
    {
      endMessage = this.attack(target, damage)
      endMessage += ` et ${this.name} a utilisé ${manaCost} points de mana`
    }
    return endMessage
  }
})
