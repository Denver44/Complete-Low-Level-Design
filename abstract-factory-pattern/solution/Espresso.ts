import { Coffee } from './Coffee';
import { IngredientFactory } from './IngredientFactory';

export class Espresso extends Coffee {
  constructor(ingredientFactory: IngredientFactory) {
    super(ingredientFactory);
  }

  brew(): void {
    console.log('Brewing strong Espresso');
  }

  boil(): void {
    console.log('Boiling water for Espresso');
  }
}
