import { FoodItem } from '../data/FoodItem';
import { MealType } from '../data/MealType';
import { CuisineType } from '../data/CuisineType';
import { StarRating } from '../data/StarRating';

/**
 * API #1: The Food Item Searcher
 *
 * This is our first API class where the magic begins!
 *
 * Method Signature Breakdown:
 * - foodItemName (string): What are you searching for? "Pizza", "Biryani", "Mixed Veg"?
 * - mealType (MealType enum): Veg or Non-veg filter
 * - cuisineTypes (CuisineType[]): Which cuisines interest you? Italian? Asian? Both?
 * - starRating (StarRating enum): Minimum rating threshold
 * - Returns: FoodItem[] - All items matching your criteria!
 *
 * Notice: We're using enums instead of strings for filters for type safety!
 */
export class FoodItemSearcherAPI {
  /**
   * Search for food items based on various criteria
   * @param foodItemName - Name of the food item to search for
   * @param mealType - Filter by meal type (VEG or NON_VEG)
   * @param cuisineTypes - Filter by cuisine types (can select multiple)
   * @param starRating - Minimum star rating threshold
   * @returns Array of matching food items
   */
  search(
    foodItemName: string,
    mealType?: MealType,
    cuisineTypes?: CuisineType[],
    starRating?: StarRating
  ): FoodItem[] {
    // Implementation will come in Part 2 when we build the generic filter system
    // For now, this is just the API structure
    throw new Error('Not implemented yet - Coming in Part 2!');
  }
}
