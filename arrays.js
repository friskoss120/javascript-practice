// Array methods: map, filter, reduce
const numbers = [1, 2, 3, 4, 5];
// map
const doubled = numbers.map(num => num * 2);
console.log('Doubled:', doubled);
// filter
const even = numbers.filter(num => num % 2 === 0);
console.log('Even:', even);
// reduce
const total = numbers.reduce((sum, num) => sum + num, 0);
console.log('Total:', total);
