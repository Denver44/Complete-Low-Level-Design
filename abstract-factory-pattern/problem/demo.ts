import { CoffeeFactory } from './CoffeeFactory';

console.log('=== ABSTRACT FACTORY PATTERN: THE PROBLEM ===\n');

const factory = new CoffeeFactory();

console.log('--- Creating Cappuccino ---');
const cappuccino = factory.getCoffee('Cappuccino');
if (cappuccino) {
  cappuccino.brew();
  cappuccino.boil();
}

console.log('\n--- Creating Espresso ---');
const espresso = factory.getCoffee('Espresso');
if (espresso) {
  espresso.brew();
  espresso.boil();
}

console.log('\n--- Creating Robusta ---');
const robusta = factory.getCoffee('Robusta');
if (robusta) {
  robusta.brew();
  robusta.boil();
}

console.log('\n=== PROBLEMS ===');
console.log('1. CoffeeFactory has TOO MANY responsibilities');
console.log('2. Creates coffee objects + Manages recipes');
console.log('3. Depends on 9+ concrete classes');
console.log('4. Recipe changes require factory modification');
console.log('5. Violates Single Responsibility Principle');
console.log('6. CoffeeFactory knows about ingredient details (AmericanBean, etc.)');
