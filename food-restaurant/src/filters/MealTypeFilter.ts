import { FoodItem } from '../data/FoodItem';
import { Restaurant } from '../data/Restaurant';
import { MealType } from '../data/MealType';
import { FoodItemFilter } from './FoodItemFilter';
import { RestaurantFilter } from './RestaurantFilter';

/**
 * MealTypeFilter (Enhanced - Dual Purpose)
 *
 * The Magic: Dual-Purpose Filters!
 * We now have TWO filter methods in the same class:
 * 1. One that takes FoodItem (from FoodItemFilter interface)
 * 2. One that takes Restaurant (from RestaurantFilter interface)
 *
 * This is called method overloading with interfaces! The compiler knows which one
 * to call based on the parameter type!
 *
 * Design Insight: Instead of creating separate RestaurantMealTypeFilter and
 * FoodItemMealTypeFilter, we have ONE filter that works for both!
 * This is code reusability at its finest!
 *
 * How It Works:
 * - When creating the filter, you inject which meal type to filter for (constructor injection)
 * - Then you can pass any food item OR restaurant to it
 * - It returns true if the entity's meal type matches, false otherwise
 *
 * Beautiful Pattern: The filter is configured at creation time and then used repeatedly!
 */
export class MealTypeFilter implements FoodItemFilter, RestaurantFilter {
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
  filter(item: FoodItem): boolean;
  filter(restaurant: Restaurant): boolean;
  filter(entity: FoodItem | Restaurant): boolean {
    return entity.getMealType() === this.mealType;
  }
}
