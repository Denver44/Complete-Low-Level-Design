import { IngredientFactory } from './IngredientFactory';
import { Bean } from './Bean';
import { Sugar } from './Sugar';
import { Milk } from './Milk';
import { AmericanBean } from './AmericanBean';
import { BrownSugar } from './BrownSugar';
import { CowMilk } from './CowMilk';

/**
 * CappuccinoIngredientFactory - Concrete Factory
 *
 * Creates the Cappuccino ingredient family:
 * - American Bean (grown in America)
 * - Brown Sugar (rich sweetness)
 * - Cow Milk (creamy texture)
 *
 * CONSISTENCY GUARANTEE:
 * Ensures Cappuccino always gets this exact combination.
 * Cannot accidentally mix Espresso's beans with Cappuccino's milk!
 *
 * RECIPE CHANGES:
 * Want to change Cappuccino to use Indian beans?
 * Just modify this class - CoffeeFactory remains unchanged!
 */
export class CappuccinoIngredientFactory implements IngredientFactory {
  getBean(): Bean {
    return new AmericanBean();
  }

  getSugar(): Sugar {
    return new BrownSugar();
  }

  getMilk(): Milk {
    return new CowMilk();
  }
}
