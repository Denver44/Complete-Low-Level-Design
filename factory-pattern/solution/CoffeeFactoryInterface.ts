import { Coffee } from './Coffee';

/**
 * CoffeeFactoryInterface
 *
 * The Factory Pattern - Factory as an Interface!
 *
 * Benefits:
 * 1. Clients depend on ABSTRACTION (this interface), not concrete factory
 * 2. Multiple implementations possible (production, testing, mock)
 * 3. Perfect Dependency Inversion Principle compliance
 * 4. Compilation independence - clients don't need concrete classes
 */
export interface CoffeeFactoryInterface {
  getCoffee(coffeeType: string): Coffee | null;
}
