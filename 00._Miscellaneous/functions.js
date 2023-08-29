// hoisting
// console.log(getRandomInt(5, 10));

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
}

const getRandomIntAnonymousFunction = function(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
};

const getRandomIntArrowFunction = (min, max) => {
    return Math.floor(Math.random() * (max + 1 - min) + min);
};

const getRandomIntArrowFunctionWithoutReturn = (min, max) => 
    Math.floor(Math.random() * (max + 1 - min) + min);


function genericActionperformer(genericAction, name) {
    // do things....
    return genericAction(name);
}

const jump = (name) => `${name} is jumping`;
console.log(genericActionperformer(jump, "Lasse"));

function run(name) {
    return `${name} is running`;
}
console.log(genericActionperformer(run, "Jonathan"));

// Desired result is "Daniel is sleeping"
// Create a sleep callback and get the desired result 
// in a single statement!!!
console.log(genericActionperformer((name) => `${name} is sleeping`, "Daniel"));



