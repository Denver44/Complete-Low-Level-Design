import { CoffeeFactory } from './CoffeeFactory';

console.log('=== ABSTRACT FACTORY PATTERN: THE SOLUTION ===\n');

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

console.log('\n=== BENEFITS ===');
console.log('✅ CoffeeFactory isolated from ingredient details');
console.log('✅ Dependency reduction: 9 → 6 (33% improvement)');
console.log('✅ Ingredient knowledge delegated to IngredientFactory implementations');
console.log('✅ Each coffee has consistent ingredient family');
console.log('✅ Recipe changes localized to ingredient factories');
console.log('✅ One line per coffee type - clean code!');
console.log('✅ Ensures ingredient compatibility');

console.log('\n=== TRADE-OFFS ===');
console.log('⚠️  More classes (18 vs original 4)');
console.log('⚠️  Interface changes affect all factories');
console.log('✅ BUT: Many small focused classes > One bloated class!');
console.log('✅ Changes are localized and predictable');
