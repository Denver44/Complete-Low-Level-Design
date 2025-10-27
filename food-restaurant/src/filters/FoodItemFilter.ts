import { FoodItem } from '../data/FoodItem';

/**
 * The Food Item Filter Interface
 *
 * This is the contract that ALL filters must follow.
 *
 * What This Contract Says:
 * "Every filter MUST have a filter method that takes a FoodItem and returns a boolean.
 * How you decide that boolean? That's YOUR business!"
 *
 * The user of this interface doesn't need to know:
 * - Whether you're making network calls
 * - Whether you're accessing the database
 * - Whether you're calling other methods
 * - How complex your logic is
 *
 * They just know: "Give me a FoodItem, I'll tell you if it passes!"
 */
export interface FoodItemFilter {
  /**
   * Determines whether a food item passes this filter's criteria
   * @param item - The food item to test
   * @returns true if the item passes the filter, false otherwise
   */
  filter(item: FoodItem): boolean;
}
