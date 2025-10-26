import { Filter } from './Filter';
import { FoodItem, CuisineType } from '../data';

/**
 * Filter food items by cuisine types
 *
 * This filter allows users to specify multiple acceptable cuisine types.
 * An item passes the filter if its cuisine type is in the allowed list.
 *
 * @example
 * const cuisineFilter = new CuisineTypeFilter([CuisineType.ITALIAN, CuisineType.ASIAN]);
 * const italianOrAsianItems = cuisineFilter.apply(allFoodItems);
 */
export class CuisineTypeFilter implements Filter<FoodItem> {
  private readonly cuisineTypes: Set<CuisineType>;

  /**
   * Create a new CuisineTypeFilter
   * @param cuisineTypes - Array of acceptable cuisine types
   */
  constructor(cuisineTypes: CuisineType[]) {
    // Using a Set for O(1) lookup performance
    this.cuisineTypes = new Set(cuisineTypes);
  }

  /**
   * Filter items to only include those with cuisine types in the allowed list
   * @param items - List of food items to filter
   * @returns Filtered list containing only items with matching cuisine types
   */
  apply(items: FoodItem[]): FoodItem[] {
    // If no cuisine types specified, return all items
    if (this.cuisineTypes.size === 0) {
      return items;
    }

    return items.filter(item => this.cuisineTypes.has(item.getCuisineType()));
  }
}
