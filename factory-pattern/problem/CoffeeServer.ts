import { Coffee } from './Coffee';
import { Cappuccino } from './coffees/Cappuccino';
import { Espresso } from './coffees/Espresso';
import { Robusta } from './coffees/Robusta';

/**
 * CoffeeServer - Naive Approach
 *
 * PROBLEMS:
 * 1. Violates Open-Closed Principle (must modify to add new types)
 * 2. Violates Dependency Inversion Principle (depends on 3 concrete classes)
 * 3. Multiple concrete dependencies (hard to maintain)
 * 4. If-else chains get messy
 * 5. Testing nightmare (need all concrete classes)
 */
export class CoffeeServer {

  serve(coffeeType: string): void {
    let coffee: Coffee | null = null;

    // Using 'new' keyword everywhere!
    if (coffeeType === 'Cappuccino') {
      coffee = new Cappuccino();
    } else if (coffeeType === 'Espresso') {
      coffee = new Espresso();
    } else if (coffeeType === 'Robusta') {
      coffee = new Robusta();
    }

    if (coffee) {
      coffee.brew();
      coffee.boil();
    } else {
      console.log('Unknown coffee type!');
    }
  }
}
