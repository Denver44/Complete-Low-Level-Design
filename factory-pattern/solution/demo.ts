import { CoffeeServer } from './CoffeeServer';
import { CoffeeFactory } from './CoffeeFactory';
import { AbstractFactory } from './AbstractFactory';

console.log('=== ABSTRACT FACTORY PATTERN: THE SOLUTION ===\n');

// Create factory and inject it (Dependency Injection!)
const factory: AbstractFactory = new CoffeeFactory();
const server = new CoffeeServer(factory);

console.log('Serving Cappuccino:');
server.serve('Cappuccino');

console.log('\nServing Espresso:');
server.serve('Espresso');

console.log('\nServing Robusta:');
server.serve('Robusta');

console.log('\nServing Arabica (newly added!):');
server.serve('Arabica');

console.log('\nTrying unknown coffee:');
server.serve('Latte');

console.log('\n=== BENEFITS ===');
console.log('✅ Centralized object creation (CoffeeFactory)');
console.log('✅ ZERO concrete dependencies in CoffeeServer');
console.log('✅ Depends only on interfaces (Coffee & AbstractFactory)');
console.log('✅ Perfect Dependency Inversion Principle');
console.log('✅ Can inject different factories (production, mock, test)');
console.log('✅ Compilation independence');
console.log('✅ Easy to test and extend');
