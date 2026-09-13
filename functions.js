// Default parameter function
function greet(name = 'World') {
    console.log('Hello, ' + name + '!');
}
greet();
greet('Alice');
// Arrow function
const add = (a, b) => a + b;
console.log('Add:', add(3, 4));
// Closure counter
function makeCounter() {
    let count = 0;
    return function() {
          count++;
          console.log('Count:', count);
    };
}
const counter = makeCounter();
counter();
counter();
counter();
