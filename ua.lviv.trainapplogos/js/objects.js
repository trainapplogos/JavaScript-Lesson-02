//1st task:
console.log("\n*****************[task 1]*****************");
var user = {};
user.name = 'ПИЛИП';
console.log(user);

user.surname = 'ШЕВЧЕНКО';
console.log(user);

user.name = 'СЕРГІЙ';
console.log(user);

console.log(user.name);
console.log(user['name']);

delete user.name;
console.log(user);

//2nd task:
console.log("\n*****************[task 2]*****************");
var employeeSalaries = {
	'Ivan':4500, 
	'Sergij':15000, 
	'Dmytro':13000, 
	'Andrij':7300, 
	'Taras':5200
	};
	
function sum(emp) {
	var s=0;
	for (var key in emp) {
		s+= emp[key];
	}
	return s;
}

console.log('> sum of all salaries: ' + sum(employeeSalaries));

var emptyEmployee = {};
console.log('> sum of empty list of employee: ' + sum(emptyEmployee));

//3rd task
console.log("\n*****************[task 3]*****************");
function arithmeticOps(arg1, operation, arg2) {
	let res = 0;
	try {
		switch(operation) {
			case '+':
				res = arg1 + arg2;
				break;
			case '-':
				res = arg1 - arg2;
				break;
			case '*':
				res = arg1 * arg2;
				break;
			case '/':
				res = arg1 / arg2;
				break;
			default:
			    throw Error('Incorrect operation'); 
		}
	} catch (err) {
		console.log('Invalid argument on ' + operation + ' operation');
	}
	if (isNaN(res)) { console.log('> Error: Invalid argument on operation ' + operation); }
	if (res == Infinity) { console.log("Arithmetic Error: can't divide " + arg1 + " by zero"); }

	return res;
}

function calcMath(arg1, operation, arg2) {
	console.log(arg1 + ' ' + operation + ' ' + arg2 + ' = ' + arithmeticOps(arg1, operation, arg2));
}

	//addition example
	console.log('> Addition example:');
	calcMath(5, '+', 7);
	
	//subtraction example
	console.log('\n> Subtraction example:');
	calcMath(2, '-', 9);
	
	//multiplication example
	console.log('\n> Multiplication example:');
	calcMath(3, '*', 5);
	
	//division example
	console.log('\n> Division example:');
	calcMath(15, '/', 4);

	//division by 0 example
	console.log('\n> Division by 0 example:');
	calcMath(15, '/', 0);
	
	//invalid argument example
	console.log('\nInvalid argument example:');
	calcMath('sdfsdfsdf', '*', 4);
	
	
	

