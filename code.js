// function expression syntax (assigning an anonymous function to a variable)
const helloWorld = function() {
    return "Hello, World!";
}

function sayHello() {
}
function sayHello() {
    return '';
}
function sayHello(name) {
    return "Hello, " + name + "!";
}
function sayHello(name) {
    if (name === "Alex") {
        return "Hello, Alex!";
    } else {
        return "Hello, Jane!";
    }
}
function sayHello(name) {
    if (name === "Alex") {
        return "Hello, Alex!";
    } else if (name === "Pat") {
        return "Hello, Pat!";
    } else {
        return "Hello, Jane!";
    }
}


