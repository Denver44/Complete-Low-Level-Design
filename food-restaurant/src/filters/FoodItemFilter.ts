import { FoodItem } from '../data';

/**
 * Generic Food Item Filter Interface
 *
 * This is the contract that all filters must follow.
 *
 * Key Design Benefits:
 * 1. Abstraction - Users only need to know about the filter() method
 * 2. Polymorphism - All filters can be treated the same way
 * 3. Open-Closed Principle - Easy to add new filters without changing existing code
 *
 * Any class implementing this interface must provide a filter() method
 * that checks if a given food item passes the filter's criteria.
 */
export interface FoodItemFilter {
  /**
   * Checks if the given food item passes this filter's criteria
   *
   * @param foodItem - The food item to evaluate
   * @returns true if the item passes, false otherwise
   *
   * @example
   * const vegFilter = new MealTypeFilter(MealType.VEG);
   * const pizza = new FoodItem(...); // VEG pizza
   * vegFilter.filter(pizza); // Returns true
   */
  filter(foodItem: FoodItem): boolean;
}
