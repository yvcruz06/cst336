var fakeData = require('faker');
var randomName = fakeData.name.findName(); 
console.log(randomName);

var knockknock = require('knock-knock-jokes');
console.log(knockknock());