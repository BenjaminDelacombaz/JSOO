window.onload = function() 
{
  var divCharacter1 = document.getElementById('character1')
  var character1 = new Character('Marcel')
  var enemy1 = new Character('Turlusse')
  divCharacter1.innerHTML = character1.status() + "<br/>"
  divCharacter1.innerHTML += enemy1.status() + "<br/>"
  divCharacter1.innerHTML += character1.treat(character1) + "<br/>"
  divCharacter1.innerHTML += character1.status() + "<br/>"
  divCharacter1.innerHTML += character1.attack(enemy1) + "<br/>"
  divCharacter1.innerHTML += enemy1.status() + "<br/>"
}
