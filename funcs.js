function capitalize(str) {
	return str[0].toUpperCase();
}

function reverseString(str) {
	let reversed = '';

	for (let i = str.length - 1; i >= 0; i--) {
		reversed += str[i];
	}

	return reversed;
}

const calculator = {
	add(a, b) {
		return a + b;
	},
	sub(a, b) {
		return a - b;
	},
	multiply(a, b) {
		return a * b;
	},
	divide(a, b) {
		return a / b;
	},
};

function ceasar(str, factor) {
	let factored = '';

	for (let i = 0; i < str.length; i++) {
		let char = str.charCodeAt(i);
		let editableFactor = factor;

		if (char >= 65 && char <= 90) {
			// Capital letters

			while (char + editableFactor > 90) {
				editableFactor -= 91 - char;
				char = 65;
			}

			char += editableFactor;
		} else if (char >= 97 && char <= 122) {
			// Lowercase letters

			while (char + editableFactor > 122) {
				editableFactor -= 123 - char;
				char = 97;
			}

			char += editableFactor;
		}

		factored += String.fromCharCode(char);
	}

	return factored;
}

function analyzeArray(arr) {
	let arrLength = arr.length;
	let arrAverage = arr.reduce((cur, n) => cur + n, 0);
	arrAverage /= arrLength;
	let arrMin = arr[0];
	for (n of arr) {
		if (n < arrMin) {
			arrMin = n;
		}
	}
	let arrMax = arr[0];
	for (n of arr) {
		if (n > arrMax) {
			arrMax = n;
		}
	}
	return { average: arrAverage, min: arrMin, max: arrMax, length: arrLength };
}

export { capitalize, reverseString, calculator, ceasar, analyzeArray };
