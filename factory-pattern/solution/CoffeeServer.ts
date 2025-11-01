import { Coffee } from './Coffee';
import { AbstractFactory } from './AbstractFactory';

/**
 * CoffeeServer - Using Abstract Factory Pattern
 *
 * Key Improvements:
 * - ZERO concrete dependencies (only Coffee and AbstractFactory interfaces)
 * - Perfect Dependency Inversion Principle compliance
 * - Factory injected via constructor (Dependency Injection)
 * - Can inject different factories (production, testing, mock)
 * - Compilation independence (compiles without any concrete classes)
 */
export class CoffeeServer {

  private factory: AbstractFactory;

  constructor(factory: AbstractFactory) {
    this.factory = factory;
  }

  serve(coffeeType: string): void {
    const coffee: Coffee | null = this.factory.getCoffee(coffeeType);

    if (coffee) {
      coffee.brew();
      coffee.boil();
    } else {
      console.log(`❌ Unknown coffee type: ${coffeeType}`);
    }
  }
}
