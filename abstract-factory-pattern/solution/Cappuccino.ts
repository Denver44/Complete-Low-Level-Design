import { Coffee } from './Coffee';
import { IngredientFactory } from './IngredientFactory';

export class Cappuccino extends Coffee {
  constructor(ingredientFactory: IngredientFactory) {
    super(ingredientFactory);
  }

  brew(): void {
    console.log('Brewing Cappuccino');
  }

  boil(): void {
    console.log('Boiling water for Cappuccino');
  }
}
