import { Coffee } from './Coffee';
import { AbstractFactory } from './AbstractFactory';
import { Cappuccino } from './Cappuccino';
import { Espresso } from './Espresso';
import { Robusta } from './Robusta';
import { Arabica } from './Arabica';

/**
 * CoffeeFactory - Concrete Factory Implementation
 *
 * Implements AbstractFactory interface.
 *
 * Key Points:
 * - All 'new' keywords centralized here
 * - Single place to modify when adding new coffee types
 * - Clients depend on AbstractFactory interface, not this class
 * - Other implementations possible (MockCoffeeFactory, TestCoffeeFactory, etc.)
 */
export class CoffeeFactory implements AbstractFactory {

  getCoffee(coffeeType: string): Coffee | null {
    if (coffeeType === 'Cappuccino') {
      return new Cappuccino();
    } else if (coffeeType === 'Espresso') {
      return new Espresso();
    } else if (coffeeType === 'Robusta') {
      return new Robusta();
    } else if (coffeeType === 'Arabica') {
      return new Arabica();
    }

    return null;
  }
}
