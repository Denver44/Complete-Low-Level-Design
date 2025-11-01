import { Coffee } from './Coffee';
import { Bean } from './Bean';
import { Sugar } from './Sugar';
import { Milk } from './Milk';

export class Espresso extends Coffee {
  constructor(bean: Bean, sugar: Sugar, milk: Milk) {
    super(bean, sugar, milk);
  }

  brew(): void {
    console.log('Brewing Espresso');
  }

  boil(): void {
    console.log('Boiling water for Espresso');
  }
}
