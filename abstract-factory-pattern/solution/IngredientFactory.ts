import { Bean } from './Bean';
import { Sugar } from './Sugar';
import { Milk } from './Milk';

/**
 * IngredientFactory Interface - The Abstract Factory
 *
 * THE ABSTRACT FACTORY PATTERN:
 * Provides an interface for creating families of related or dependent objects
 * without specifying their concrete classes.
 *
 * WHY THREE METHODS?
 * Because at a high level, coffee is composed of three abstractions:
 * - Bean (the coffee base)
 * - Sugar (the sweetener)
 * - Milk (the dairy component)
 *
 * THE FAMILY CONCEPT:
 * Each implementation creates a consistent "family" of ingredients:
 * - CappuccinoIngredientFactory: AmericanBean + BrownSugar + CowMilk
 * - EspressoIngredientFactory: FrenchBean + RegularSugar + PowderedMilk
 *
 * DRAWBACK - INTERFACE CHANGES:
 * If Coffee needs a new ingredient (e.g., Spice), this interface MUST change:
 * - Add getSpice(): Spice method here
 * - ALL concrete factories must implement it
 * This is an acceptable trade-off for the benefits gained!
 */
export interface IngredientFactory {
  getBean(): Bean;
  getSugar(): Sugar;
  getMilk(): Milk;
}
