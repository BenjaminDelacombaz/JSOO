window.onload = function() 
{
  var divCharacter1 = document.getElementById('character1')
  var character1 = Object.create(Wizard)
  character1.name = 'Marcel'
  var enemy1 = Object.create(Warrior)
  enemy1.name = 'Turlusse'
  divCharacter1.innerHTML = character1.status() + "<br/>"
  divCharacter1.innerHTML += enemy1.status() + "<br/>"
  divCharacter1.innerHTML += character1.treat(character1) + "<br/>"
  divCharacter1.innerHTML += character1.status() + "<br/>"
  divCharacter1.innerHTML += character1.classPower(enemy1) + "<br/>"
  divCharacter1.innerHTML += enemy1.status() + "<br/>"
  divCharacter1.innerHTML += character1.status() + "<br/>"
  divCharacter1.innerHTML += character1.classPower(enemy1) + "<br/>"
  divCharacter1.innerHTML += enemy1.status() + "<br/>"
  divCharacter1.innerHTML += enemy1.classPower(enemy1) + "<br/>"
  divCharacter1.innerHTML += enemy1.status() + "<br/>"
}
