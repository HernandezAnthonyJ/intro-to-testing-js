// function expression syntax (assigning an anonymous function to a variable)
const helloWorld = function() {
    return "Hello, World!";
}

function sayHello(name) {
    return `Hello, ${name}!`;
}
function sayHello(name) {
    if (name === undefined || name === true || name === false || name === null || name === "" || typeof name === "number" || (typeof name === "string" && !isNaN(Number(name))) || Array.isArray(name) || typeof name === "object" || typeof name === "function") {
        return "Hello, World!";
    } else {
        return "Hello, " + name + "!";
    }
}

function isFive(input) {
    return input === 5 || input === "5";
}

function isEven(input) {
    if (typeof input === 'number') {
        return input % 2 === 0;
    } else if (typeof input === 'string') {
        const num = parseInt(input);
        return !isNaN(num) && num % 2 === 0;
    }
    return false;
}







