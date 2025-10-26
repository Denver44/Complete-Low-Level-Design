import { Filter } from './Filter';
import { FoodItem, MealType } from '../data';

/**
 * Filter food items by meal type (VEG or NON_VEG)
 *
 * This filter implements the Filter interface to provide
 * dietary preference filtering.
 *
 * @example
 * const vegFilter = new MealTypeFilter(MealType.VEG);
 * const vegetarianItems = vegFilter.apply(allFoodItems);
 */
export class MealTypeFilter implements Filter<FoodItem> {
  private readonly mealType: MealType;

  /**
   * Create a new MealTypeFilter
   * @param mealType - The meal type to filter by (VEG or NON_VEG)
   */
  constructor(mealType: MealType) {
    this.mealType = mealType;
  }

  /**
   * Filter items to only include those matching the specified meal type
   * @param items - List of food items to filter
   * @returns Filtered list containing only items with matching meal type
   */
  apply(items: FoodItem[]): FoodItem[] {
    return items.filter(item => item.getMealType() === this.mealType);
  }
}
