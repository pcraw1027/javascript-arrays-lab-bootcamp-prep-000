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
  var appendkitten = [...kittens,"Broom"]
}

function prependKitten(newkitten) {
  var prependkitten = ["Arnold",...kittens]
}