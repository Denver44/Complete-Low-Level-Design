import { FoodItem } from '../data/FoodItem';
import { CuisineType } from '../data/CuisineType';
import { FoodItemFilter } from './FoodItemFilter';

/**
 * Implementation #2: Cuisine Type Filter
 *
 * This one's slightly different - it works with a list of cuisines.
 *
 * Why a List?
 * Because users might want Italian OR Asian food! They're not limited to one cuisine.
 *
 * Example:
 * const filter = new CuisineTypeFilter([CuisineType.ITALIAN, CuisineType.ASIAN]);
 *
 * Now any food item that's either Italian or Asian will pass!
 */
export class CuisineTypeFilter implements FoodItemFilter {
  private readonly cuisineTypes: CuisineType[];

  /**
   * Creates a new CuisineTypeFilter
   * @param cuisineTypes - List of acceptable cuisine types
   */
  constructor(cuisineTypes: CuisineType[]) {
    this.cuisineTypes = cuisineTypes;
  }

  /**
   * Checks if the food item's cuisine type is in the allowed list
   * @param item - The food item to test
   * @returns true if item's cuisine is in the allowed list, false otherwise
   */
  filter(item: FoodItem): boolean {
    return this.cuisineTypes.includes(item.getCuisineType());
  }
}
