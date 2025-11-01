import { CoffeeServer } from './CoffeeServer';

console.log('=== FACTORY PATTERN: THE PROBLEM ===\n');

const server = new CoffeeServer();

console.log('--- Serving Cappuccino ---');
server.serve('Cappuccino');

console.log('\n--- Serving Espresso ---');
server.serve('Espresso');

console.log('\n--- Serving Robusta ---');
server.serve('Robusta');

console.log('\n--- Trying unknown coffee ---');
server.serve('Arabica');

console.log('\n=== PROBLEMS ===');
console.log('1. Depends on 3 concrete classes');
console.log('2. Violates Open-Closed Principle');
console.log('3. Violates Dependency Inversion Principle');
console.log('4. If-else chains get messy');
console.log('5. Hard to test');
