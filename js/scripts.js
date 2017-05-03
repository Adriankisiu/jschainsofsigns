// plik scripts.js

var text = 'Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.';
var animal = 'Zielone słonie';
var animalUpperCased = animal.toUpperCase();
var textCharsAfter = text.replace('Papugi', animalUpperCased);
var partOfTextCharsAfter = textCharsAfter.slice(0, 45);

console.log(partOfTextCharsAfter);