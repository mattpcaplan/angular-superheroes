let superHeroData = [
  {
    name: "Spiderman",
    phone_number: "800-WEB-CRWL",
    group: "Marvel",
    img: "img/spiderman.png"
  },
  {
    name: "The Incredible Hulk",
    phone_number: "800-HLK-SMSH",
    group: "Marvel",
    img: "img/hulk.jpg"
  },
  {
    name: "Wonder Woman",
    phone_number: "800-GRL-WNDR",
    group: "DC",
    img: "img/wonder_woman.jpg"
  },
  {
    name: "Storm",
    phone_number: "800-DRK-CLDS",
    group: "Marvel",
    img: "img/storm.gif"
  },
  {
    name: "Iron Man",
    phone_number: "800-STA-RKME",
    group: "Marvel",
    img: "img/ironman.png"
  },
  {
    name: "Black Panther",
    phone_number: "800-TCH-ALLA",
    group: "Marvel",
    img: "img/black_panther.gif"
  },
  {
    name: "Princess Peach",
    phone_number: "800-NO-DAMSL",
    group: "Independent",
    img: "img/princess_peach.jpg"
  },
  {
    name: "Batman",
    phone_number: "800-DRK-NITE",
    group: "DC",
    img: "img/batman.jpg"
  },
  {
    name: "Supergirl",
    phone_number: "800-KYR-PTON",
    group: "DC",
    img: "img/supergirl.jpg"
  }
]



angular
  .module("superheroApp", [])
  .controller("SuperHeroController", [
    SuperHeroControllerFunction
])

function SuperHeroControllerFunction () {
  this.superhero = superHeroData
  this.selectSuperHero = null
  this.addSuperHero = function () {
    let superhero = this.newSuperHero
    this.superhero.push(superhero)
    this.newSuperHero = []
  }
  this.selectSuperHero = function(superhero) {
    this.selectSuperHero = superhero
  }
}
