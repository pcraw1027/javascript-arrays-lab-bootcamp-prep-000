var kittens = ["Milo","Otis","Garfield"] //define your array here

// Add your functions and code here

function destructivelyAppendKitten() {
  kittens.push("Ralph")
}

function destructivelyPrependKitten() {
  kittens.unshift("Bob")
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
}

var newKitten = "Broom";
var newArray2
function appendKitten(newKitten) {
  // var newKitten = "Broom";
  var newArray = [...kittens, newKitten];
  [...kittens, newKitten];
  // kittens = [...kittens, newKitten];
  console.log(newKitten,kittens,newArray)
}

function prependKitten(newkitten) {
  var newkitten = "Arnold";
  [newkitten,...kittens];
}