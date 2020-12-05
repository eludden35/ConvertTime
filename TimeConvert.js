function timeConvert(hr, min) {
	let num = [
		'one',
		'two',
		'three',
		'four',
		'five',
		'six',
		'seven',
		'eight',
		'nine',
		'ten',
		'eleven',
		'twelve',
		'thirteen',
		'fourteen',
		'fifteen',
		'sixteen',
		'seventeen',
		'eighteen',
		'nineteen'
	];

	// check to see if min is equal to one. If equal to one minute will be singular, if not, it will be plural
	let word = '';
	min == 1 ? (word = 'minute') : (word = 'minutes');

	// if statement used to reset hour back to 1
	let hold = '';
	hr == 12 ? (hold = num[0]) : (hold = num[hr]);

	// number to string in order to make number iterable (i.e.  num[numStr[1]-1] == )
	let numStr = min.toString();

	// variable to hold the ${word} to the next hour (i.e. "20 ${word} to 4")
	let sub = 60 - min;

	// Catch invalid inputs
	if (hr < 1 || hr >= 13) {
		console.log(
			'Incorrect input please enter an hour between one and twelve'
		);
	}
	// End invalid input if statement

	// Start time calculation from 0 to 30
	else if (min >= 0 && min <= 15) {
		if (min == 0) {
			console.log(`It is ${num[hr - 1]} o' clock`);
			return;
		} else if (min == 15) {
			console.log(`It is a quarter past ${num[hr - 1]}`);
			return;
		} else {
			console.log(`It is ${num[min - 1]} ${word} past ${num[hr - 1]}`);
			return;
		}
	} else if (min > 15 && min <= 30) {
		if (min == 20) {
			console.log(`It is twenty ${word} past ${num[hr - 1]}`);
			return;
		} else if (min == 30) {
			console.log(`It is half past ${num[hr - 1]}`);
			return;
		} else if (min > 20 && min < 30) {
			console.log(
				`It is twenty ${num[numStr[1] - 1]} ${word} past ${num[hr - 1]}`
			);
			return;
		} else {
			console.log(`It is ${num[min - 1]} ${word} past ${num[hr - 1]}`);
			return;
		}
	}
	// End time calculation from 0 to 30

	// Start time calculation from 30 t0 60
	if (min > 30 && min <= 45) {
		if (min == 45) {
			console.log(`It is a quarter to ${hold}`);
			return;
		} else if (min == 40) {
			console.log(`It is twenty ${word} to ${hold}`);
			return;
		} else if (min < 40) {
			console.log(
				`It is twenty ${num[numStr[1] - 1]} ${word} to ${hold}`
			);
			return;
		} else {
			console.log(`It is ${num[sub - 1]} ${word} to ${hold}`);
			return;
		}
	} else if (min > 45 && min < 60) {
		if (min == 50) {
			console.log(`It is ten ${word} to ${hold}`);
			return;
		} else {
			console.log(`It is ${num[sub - 1]} ${word} to ${hold}`);
			return;
		}
	}
	// End time calculation from 30 to 60
}

timeConvert(5, 47);
timeConvert(3, 0);
timeConvert(7, 29);
timeConvert(5, 30);
timeConvert(5, 45);
timeConvert(4, 15);
timeConvert(6, 35);
timeConvert(3, 30);
timeConvert(10, 57);
timeConvert(1, 1);
timeConvert(7, 15);
timeConvert(12, 45);
