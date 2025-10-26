import { FoodItemFilter } from './FoodItemFilter';
import { FoodItem, MealType } from '../data';

/**
 * Filter Implementation #1: Meal Type Filter
 *
 * This filter checks if a food item matches a specific meal type preference.
 *
 * Real-world usage:
 * - User wants only vegetarian items
 * - User wants only non-vegetarian items
 *
 * @example
 * // Create a filter for vegetarian items only
 * const vegFilter = new MealTypeFilter(MealType.VEG);
 *
 * // Test some food items
 * const pizza = new FoodItem(...); // Margherita Pizza (VEG)
 * const burger = new FoodItem(...); // Chicken Burger (NON_VEG)
 *
 * vegFilter.filter(pizza);   // Returns true ✅
 * vegFilter.filter(burger);  // Returns false ❌
 */
export class MealTypeFilter implements FoodItemFilter {
  private readonly mealType: MealType;

  /**
   * Create a new MealTypeFilter
   * @param mealType - The meal type to filter by (VEG or NON_VEG)
   */
  constructor(mealType: MealType) {
    this.mealType = mealType;
  }

  /**
   * Checks if the given food item matches the specified meal type
   *
   * @param foodItem - The food item to evaluate
   * @returns true if the item's meal type matches, false otherwise
   */
  filter(foodItem: FoodItem): boolean {
    return foodItem.getMealType() === this.mealType;
  }
}
