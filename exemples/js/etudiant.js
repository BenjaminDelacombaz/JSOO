let Etudiant = Object.assign(Object.create(Personne), {
  // Attributs
  num: 75254196527,

  // Méthode
  dormirEnCours () {
    return `${this.prenom} est en train de dormir en cours.`
  }
})
