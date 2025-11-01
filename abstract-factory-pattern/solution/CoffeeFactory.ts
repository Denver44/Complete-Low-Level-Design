import { Coffee } from './Coffee';
import { Cappuccino } from './Cappuccino';
import { Espresso } from './Espresso';
import { Robusta } from './Robusta';
import { CappuccinoIngredientFactory } from './CappuccinoIngredientFactory';
import { EspressoIngredientFactory } from './EspressoIngredientFactory';
import { DefaultIngredientFactory } from './DefaultIngredientFactory';

/**
 * CoffeeFactory - Using Abstract Factory Pattern
 *
 * DEPENDENCIES (6 total):
 * - Concrete Coffee Types: Cappuccino, Espresso, Robusta (3)
 * - Concrete Ingredient Factories: CappuccinoIngredientFactory,
 *   EspressoIngredientFactory, DefaultIngredientFactory (3)
 *
 * TRADE-OFF ANALYSIS:
 * Before: 9 dependencies (3 coffees + 6 ingredient types)
 * After: 6 dependencies (3 coffees + 3 ingredient factories)
 * Reduction: 33% fewer dependencies!
 *
 * KEY BENEFITS:
 * - No knowledge of specific ingredients (AmericanBean, BrownSugar, etc.)
 * - Ingredient knowledge delegated to IngredientFactory implementations
 * - Recipe changes only affect ingredient factories, NOT this class
 * - One line per coffee type - clean and simple!
 */
export class CoffeeFactory {
  getCoffee(coffeeType: string): Coffee | null {
    if (coffeeType === 'Cappuccino') {
      return new Cappuccino(new CappuccinoIngredientFactory());

    } else if (coffeeType === 'Espresso') {
      return new Espresso(new EspressoIngredientFactory());

    } else if (coffeeType === 'Robusta') {
      return new Robusta(new DefaultIngredientFactory());
    }

    return null;
  }
}
