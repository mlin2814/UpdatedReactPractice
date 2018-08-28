var nameVar = 'Matthew';
console.log('nameVar', nameVar);

let nameLet = 'Joe';
nameLet = 'Julie';
console.log('nameLet', nameLet);

const nameConst = 'Steve';
console.log('nameConst', nameConst);

function getPetName(){
	var petName = 'Tim';
	return petName;
}

const petName = getPetName();

var fullName = 'Marcus Lutrell';

if (fullName) {
	const firstName = fullName.split(' ')[0];
	console.log(firstName);
} 
// else {}
