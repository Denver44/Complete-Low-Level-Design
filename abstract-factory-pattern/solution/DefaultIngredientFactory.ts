import { IngredientFactory } from './IngredientFactory';
import { Bean } from './Bean';
import { Sugar } from './Sugar';
import { Milk } from './Milk';
import { AmericanBean } from './AmericanBean';
import { RegularSugar } from './RegularSugar';
import { PowderedMilk } from './PowderedMilk';

/**
 * DefaultIngredientFactory
 *
 * Provides default ingredients for new or undefined coffee types.
 * Can be used as a fallback or for custom coffee types.
 */
export class DefaultIngredientFactory implements IngredientFactory {
  getBean(): Bean {
    return new AmericanBean();
  }

  getSugar(): Sugar {
    return new RegularSugar();
  }

  getMilk(): Milk {
    return new PowderedMilk();
  }
}
