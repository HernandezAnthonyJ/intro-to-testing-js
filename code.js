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





