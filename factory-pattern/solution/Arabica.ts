import { Coffee } from './Coffee';

/**
 * Arabica - A concrete implementation of Coffee
 * (Added to demonstrate easy extensibility with Factory Pattern)
 */
export class Arabica implements Coffee {

  brew(): void {
    console.log('☕ Brewing smooth Arabica');
  }

  boil(): void {
    console.log('🔥 Boiling water for Arabica');
  }
}
