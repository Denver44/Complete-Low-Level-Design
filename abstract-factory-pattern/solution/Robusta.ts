import { Coffee } from './Coffee';
import { IngredientFactory } from './IngredientFactory';

export class Robusta extends Coffee {
  constructor(ingredientFactory: IngredientFactory) {
    super(ingredientFactory);
  }

  brew(): void {
    console.log('Brewing bitter Robusta');
  }

  boil(): void {
    console.log('Boiling water for Robusta');
  }
}
