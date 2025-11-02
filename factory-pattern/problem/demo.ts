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
