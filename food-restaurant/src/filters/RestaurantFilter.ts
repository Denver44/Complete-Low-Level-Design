import { Restaurant } from '../data/Restaurant';

/**
 * The RestaurantFilter Interface
 *
 * Clean and simple, just like FoodItemFilter!
 *
 * This interface defines the contract for filtering restaurants.
 * Any class implementing this interface must provide a filter method
 * that takes a Restaurant and returns a boolean.
 */
export interface RestaurantFilter {
  /**
   * Determines whether a restaurant passes this filter's criteria
   * @param restaurant - The restaurant to test
   * @returns true if the restaurant passes the filter, false otherwise
   */
  filter(restaurant: Restaurant): boolean;
}
