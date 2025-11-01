import { Coffee } from './Coffee';
import { Bean } from './Bean';
import { Sugar } from './Sugar';
import { Milk } from './Milk';

export class Cappuccino extends Coffee {
  constructor(bean: Bean, sugar: Sugar, milk: Milk) {
    super(bean, sugar, milk);
  }

  brew(): void {
    console.log('Brewing Cappuccino');
  }

  boil(): void {
    console.log('Boiling water for Cappuccino');
  }
}
