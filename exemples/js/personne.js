let Personne = {
  // Attributs
  nom: 'Karlota',
  prenom: 'Michel',
  age: 14,
  hobbies: ['la cuisine', 'le cosplay', 'le rap'],

  // Méthodes
  presentation () {
    return `Bonjour, je m'appelle ${this.prenom} ${this.nom}. J'ai ${this.age} ans. Mes hobbies sont ${this.getListHobbiesToString()}`
  },

  getListHobbiesToString() {
    hobbies = ''
    this.hobbies.forEach(function(hobby) {
      if (hobbies == '') {
        hobbies = hobby
      } else {
        hobbies += `, ${hobby}`
      }
    })
    return hobbies
  }
}
