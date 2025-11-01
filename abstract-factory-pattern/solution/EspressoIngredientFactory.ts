import { IngredientFactory } from './IngredientFactory';
import { Bean } from './Bean';
import { Sugar } from './Sugar';
import { Milk } from './Milk';
import { FrenchBean } from './FrenchBean';
import { RegularSugar } from './RegularSugar';
import { PowderedMilk } from './PowderedMilk';

/**
 * EspressoIngredientFactory - Concrete Factory
 *
 * Creates the Espresso ingredient family:
 * - French Bean (grown in France)
 * - Regular Sugar
 * - Powdered Milk
 *
 * DEPENDENCIES (K = 3):
 * This factory depends on exactly K concrete ingredient classes,
 * where K = number of products (ingredients).
 * - FrenchBean
 * - RegularSugar
 * - PowderedMilk
 *
 * ENCAPSULATION:
 * All 'new' keywords for Espresso ingredients are centralized here.
 * Recipe knowledge isolated to this single class!
 */
export class EspressoIngredientFactory implements IngredientFactory {
  getBean(): Bean {
    return new FrenchBean();
  }

  getSugar(): Sugar {
    return new RegularSugar();
  }

  getMilk(): Milk {
    return new PowderedMilk();
  }
}
