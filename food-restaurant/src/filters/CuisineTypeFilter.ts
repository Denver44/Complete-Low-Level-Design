import { FoodItem } from '../data/FoodItem';
import { Restaurant } from '../data/Restaurant';
import { CuisineType } from '../data/CuisineType';
import { FoodItemFilter } from './FoodItemFilter';
import { RestaurantFilter } from './RestaurantFilter';

/**
 * CuisineTypeFilter - The Interesting One
 *
 * This one's slightly different - it works with a list of cuisines.
 * This one's a bit more complex because restaurants can have MULTIPLE cuisines!
 *
 * Why a List?
 * Because users might want Italian OR Asian food/restaurants! They're not limited to one cuisine.
 *
 * Example:
 * const filter = new CuisineTypeFilter([CuisineType.ITALIAN, CuisineType.ASIAN]);
 *
 * Now any food item that's either Italian or Asian will pass!
 *
 * The Restaurant Logic Explained:
 * - User says: "I want Italian OR Asian restaurants"
 * - User's cuisineTypes = [ITALIAN, ASIAN]
 * - Restaurant A serves: [ITALIAN, SPANISH]
 *   - Check: Does [ITALIAN, SPANISH] contain ITALIAN? YES! → Return true ✅
 * - Restaurant B serves: [GERMAN, SPANISH]
 *   - Check: Does [GERMAN, SPANISH] contain ITALIAN? NO
 *   - Check: Does [GERMAN, SPANISH] contain ASIAN? NO → Return false ❌
 *
 * We iterate through user preferences and return true as soon as we find ANY match!
 * This is an "OR" operation - at least one cuisine must match!
 */
export class CuisineTypeFilter implements FoodItemFilter, RestaurantFilter {
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
  filter(item: FoodItem): boolean;
  /**
   * Checks if the restaurant serves any of the desired cuisines
   * @param restaurant - The restaurant to test
   * @returns true if restaurant serves at least one of the desired cuisines, false otherwise
   */
  filter(restaurant: Restaurant): boolean;
  filter(entity: FoodItem | Restaurant): boolean {
    if ('getCuisineType' in entity) {
      // It's a FoodItem (has single cuisine type)
      return this.cuisineTypes.includes(entity.getCuisineType());
    } else {
      // It's a Restaurant (has multiple cuisine types)
      const restaurantCuisines = entity.getCuisineTypes();
      // Check if restaurant serves ANY of the user's preferred cuisines
      for (const userCuisine of this.cuisineTypes) {
        if (restaurantCuisines.includes(userCuisine)) {
          return true; // Found a match!
        }
      }
      return false; // No matches found
    }
  }
}
