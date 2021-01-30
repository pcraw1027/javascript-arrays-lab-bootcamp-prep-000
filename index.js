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

// var newKitten = "Broom";
function appendKitten() {
  // var newKitten = "Broom";
  // var newArray = [...kittens, newKitten];
  var newArray = [...kittens, "Broom"];
  // kittens = [...kittens, newKitten];
}

function prependKitten(newkitten) {
  var newkitten = "Arnold";
  [newkitten,...kittens];
}