import { FoodItemFilter } from './FoodItemFilter';
import { FoodItem, CuisineType } from '../data';

/**
 * Filter Implementation #2: Cuisine Type Filter
 *
 * This filter checks if a food item's cuisine is in a list of acceptable cuisines.
 *
 * Why a List?
 * - Flexibility! Users might want multiple cuisines
 * - "Show me Italian OR Asian food"
 * - "I'm interested in Spanish OR Mexican OR German"
 *
 * @example
 * const userPreferences = [CuisineType.ITALIAN, CuisineType.ASIAN];
 * const filter = new CuisineTypeFilter(userPreferences);
 *
 * const pasta = new FoodItem(...);  // ITALIAN cuisine
 * const curry = new FoodItem(...);  // ASIAN cuisine
 * const taco = new FoodItem(...);   // MEXICAN cuisine
 *
 * filter.filter(pasta);  // true ✅ (ITALIAN is in list)
 * filter.filter(curry);  // true ✅ (ASIAN is in list)
 * filter.filter(taco);   // false ❌ (MEXICAN not in list)
 */
export class CuisineTypeFilter implements FoodItemFilter {
  private readonly cuisineTypes: CuisineType[];

  /**
   * Create a new CuisineTypeFilter
   * @param cuisineTypes - List of acceptable cuisine types
   */
  constructor(cuisineTypes: CuisineType[]) {
    this.cuisineTypes = cuisineTypes;
  }

  /**
   * Checks if the given food item's cuisine is in the allowed list
   *
   * @param foodItem - The food item to evaluate
   * @returns true if the item's cuisine type is in the allowed list, false otherwise
   */
  filter(foodItem: FoodItem): boolean {
    return this.cuisineTypes.includes(foodItem.getCuisineType());
  }
}
