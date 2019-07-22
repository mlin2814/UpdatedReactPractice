'use strict';

var nameVar = 'Matthew';
console.log('nameVar', nameVar);

var nameLet = 'Joe';
nameLet = 'Julie';
console.log('nameLet', nameLet);

var nameConst = 'Steve';
console.log('nameConst', nameConst);

function getPetName() {
	var petName = 'Tim';
	return petName;
}

var petName = getPetName();

var fullName = 'Marcus Lutrell';

if (fullName) {
	var firstName = fullName.split(' ')[0];
	console.log(firstName);
}
// else {}
