import { Coffee } from '../Coffee';

/**
 * Robusta - A concrete implementation of Coffee
 */
export class Robusta implements Coffee {

  brew(): void {
    console.log('☕ Brewing bitter Robusta');
  }

  boil(): void {
    console.log('🔥 Boiling water for Robusta');
  }
}
