import { Coffee } from '../Coffee';

/**
 * Espresso - A concrete implementation of Coffee
 */
export class Espresso implements Coffee {

  brew(): void {
    console.log('☕ Brewing strong Espresso');
  }

  boil(): void {
    console.log('🔥 Boiling water for Espresso');
  }
}
