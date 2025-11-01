import { Bean } from './Bean';
import { Sugar } from './Sugar';
import { Milk } from './Milk';
import { IngredientFactory } from './IngredientFactory';

/**
 * Coffee Abstract Class
 *
 * Coffee depends on IngredientFactory for ingredients.
 * Factory is injected via constructor and used to populate ingredients.
 */
export abstract class Coffee {
  protected bean: Bean;
  protected sugar: Sugar;
  protected milk: Milk;

  private readonly ingredientFactory: IngredientFactory;

  constructor(ingredientFactory: IngredientFactory) {
    this.ingredientFactory = ingredientFactory;

    // Get ingredients from factory
    this.bean = ingredientFactory.getBean();
    this.sugar = ingredientFactory.getSugar();
    this.milk = ingredientFactory.getMilk();
  }

  abstract brew(): void;
  abstract boil(): void;
}
