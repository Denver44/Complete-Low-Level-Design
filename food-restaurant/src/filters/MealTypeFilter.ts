import { FoodItem } from '../data/FoodItem';
import { MealType } from '../data/MealType';
import { FoodItemFilter } from './FoodItemFilter';

/**
 * Implementation #1: Meal Type Filter
 *
 * Filter 1: Meal Type Filter
 * Simple! Does the item's meal type match what the user wants?
 *
 * How It Works:
 * - When creating the filter, you inject which meal type to filter for (constructor injection)
 * - Then you can pass any food item to it
 * - It returns true if the food item's meal type matches, false otherwise
 *
 * Beautiful Pattern: The filter is configured at creation time and then used repeatedly!
 */
export class MealTypeFilter implements FoodItemFilter {
  private readonly mealType: MealType;

  /**
   * Creates a new MealTypeFilter
   * @param mealType - The meal type to filter for (VEG or NON_VEG)
   */
  constructor(mealType: MealType) {
    this.mealType = mealType;
  }

  /**
   * Checks if the food item matches the configured meal type
   * @param item - The food item to test
   * @returns true if item's meal type matches, false otherwise
   */
  filter(item: FoodItem): boolean {
    return item.getMealType() === this.mealType;
  }
}
