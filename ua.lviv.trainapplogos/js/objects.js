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
	switch(operation) {
		case '+':
			try {
				return arg1 + arg2;
			} catch (err) {
				console.log('Invalid argument on ' + operation + ' operation');
			}
			break;
		case '-':
			try {
				return arg1 - arg2;
			} catch (err) {
				console.log('Invalid argument on ' + operation + ' operation');
			}
			break;
		case '*':
			try {
				return arg1 * arg2;
			} catch (err) {
				console.log('Invalid argument on ' + operation + ' operation');
			}
			break;
		case '/':
			try {
				let res = arg1 / arg2;
				if (res == Infinity) {
					console.log("Arithmetic Error: can't divide " + arg1 + " by zero");
				} else {
					return res;
				}
			} catch (err) {
				console.log('Invalid argument on ' + operation + ' operation');
			}
			break;
		default:
		    throw Error('Incorrect operation'); 
	}
}
	//addition example
	let arg1 = 5;
	let arg2 = 7;
	let operation = '+';
	
	console.log(arg1 + ' ' + operation + ' ' + arg2 + ' = ' + arithmeticOps(arg1, operation, arg2));
	
	//subtraction example
	arg1 = 2;
	arg2 = 9;
	operation = '-';
	console.log(arg1 + ' ' + operation + ' ' + arg2 + ' = ' + arithmeticOps(arg1, operation, arg2));
	
	//multiplication example
	arg1 = 3;
	arg2 = 5;
	operation = '*';
	console.log(arg1 + ' ' + operation + ' ' + arg2 + ' = ' + arithmeticOps(arg1, operation, arg2));
	
	//division example
	arg1 = 15;
	arg2 = 4;
	operation = '/';
	console.log(arg1 + ' ' + operation + ' ' + arg2 + ' = ' + arithmeticOps(arg1, operation, arg2));

	//division by 0 example
	arg2 = 0;
	console.log(arg1 + ' ' + operation + ' ' + arg2 + ' = ' + arithmeticOps(arg1, operation, arg2));
	
	//invalid argument example
	arg1 = 'sd';
	arg2 = 4;
	operation = '*';
	console.log(arg1 + ' ' + operation + ' ' + arg2 + ' = ' + arithmeticOps(arg1, operation, arg2));
	
	
	

