let Warrior = Object.assign(Object.create(Character), {
  classPower (target) {
    let endMessage = ''
    let care = this.strength*4
    let manaCost = this.mana
    endMessage = this.lostMana(manaCost)
    if (endMessage == true)
    {
      endMessage = this.treat(target, care)
      endMessage += ` et  ${this.name} a utilisé ${manaCost} points de mana`
    }
    return endMessage
  }
})
