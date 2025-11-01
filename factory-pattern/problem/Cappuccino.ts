import { Coffee } from './Coffee';

/**
 * Cappuccino - A concrete implementation of Coffee
 */
export class Cappuccino implements Coffee {

  brew(): void {
    console.log('☕ Brewing Cappuccino with steamed milk');
  }

  boil(): void {
    console.log('🔥 Boiling water for Cappuccino');
  }
}
