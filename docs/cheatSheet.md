# JSOO JavaScript Orienté Objet

Benjamin Delacombaz

benjamin.delacombaz@cpnv.ch

SI-T1a

## Cheat sheet

### Introduction

Il existe plusieurs façon de créer des objets en JavaScript. Dans cette cheat sheet, une seul façon sera utilisé. Vous pouvez trouvez les autres façons dans les documents se trouvant dans le document [sources.md](https://github.com/BenjaminDelacombaz/JSOO/blob/master/docs/sources.md).

### Créer un objet

```javascript
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
```

### Créer une instance

```javascript
var personne1 = Object.create(Personne)
```

### Héritage

```javascript
let Etudiant = Object.assign(Object.create(Personne), {
  // Attributs
  num: 75254196527,

  // Méthode
  dormirEnCours () {
    return `${this.prenom} est en train de dormir en cours.`
  }
})
```

### Exemple

L'exemple de la cheat sheet est disponible dans le répertoire suivant: [../exemples/](https://github.com/BenjaminDelacombaz/JSOO/tree/master/exemples)
