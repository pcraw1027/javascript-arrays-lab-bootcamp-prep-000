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

function appendKitten(newkitten) {
  newkitten = "Broom";
  [...kittens,newkitten];
}

function prependKitten(newkitten) {
  newkitten = "Arnold";
  [newkitten,...kittens];
}