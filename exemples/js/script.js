window.onload = function() 
{
  var divPersonne = document.getElementById('personne')

  // Instance d'objets
  var etudiant = Object.create(Etudiant)
  var personne = Object.create(Personne)
  
  // Modification d'une instance
  personne.nom = 'Chuazzua'
  personne.prenom = 'Carmen'

  divPersonne.innerHTML = etudiant.presentation() + "<br/>"
  divPersonne.innerHTML += etudiant.dormirEnCours() + "<br/>"
  divPersonne.innerHTML += personne.presentation() + "<br/>"
}
