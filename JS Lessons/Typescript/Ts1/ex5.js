// TODO: Implement the lengthOrSquare function
// define the type(s) for 'value'
function isNumeric(value) {
    return !isNaN(Number(value));
}
function lengthOrSquare(value) {
    if (typeof value === 'number') {
        return value * value;
    }
    if (typeof value === 'string') {
        return value.length;
    }
    else {
        return "Invalid input";
    }
}
// Prompt the user to enter a value as either a string or a number
var userInput = prompt('Enter a value either a string or a number: ');
var parsedValue = isNumeric(userInput) ? Number(userInput) : userInput;
// Call the lengthOrSquare function
var result = lengthOrSquare(parsedValue);
console.log(typeof result);
console.log(result);
