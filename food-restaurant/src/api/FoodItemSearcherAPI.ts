import { FoodItem } from '../data/FoodItem';
import { MealType } from '../data/MealType';
import { CuisineType } from '../data/CuisineType';
import { StarRating } from '../data/StarRating';
import { FoodItemSearcher } from '../searchers/FoodItemSearcher';
import { FoodItemFilter } from '../filters/FoodItemFilter';
import { MealTypeFilter } from '../filters/MealTypeFilter';
import { CuisineTypeFilter } from '../filters/CuisineTypeFilter';
import { StarRatingFilter } from '../filters/StarRatingFilter';

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
 *
 * What's Happening Here:
 * 1. API receives parameters from the client (web request, mobile app, etc.)
 * 2. API creates appropriate filters (based on user input)
 * 3. API delegates to business logic: passes the search term and filters to FoodItemSearcher
 * 4. API returns results to the client
 *
 * Separation of Concerns: The API layer handles request/response.
 * The business layer handles logic. Clean and maintainable!
 */
export class FoodItemSearcherAPI {
  private readonly searcher: FoodItemSearcher;

  constructor() {
    this.searcher = new FoodItemSearcher();
  }

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
    // Step 1: Create filters based on user input
    const filters: FoodItemFilter[] = [];

    // Add MealTypeFilter if mealType is provided
    if (mealType !== undefined) {
      filters.push(new MealTypeFilter(mealType));
    }

    // Add CuisineTypeFilter if cuisineTypes is provided
    if (cuisineTypes !== undefined && cuisineTypes.length > 0) {
      filters.push(new CuisineTypeFilter(cuisineTypes));
    }

    // Add StarRatingFilter if starRating is provided
    if (starRating !== undefined) {
      filters.push(new StarRatingFilter(starRating));
    }

    // Step 2: Delegate to business logic
    // Pass the search term and filters to FoodItemSearcher
    const results = this.searcher.search(foodItemName, filters);

    // Step 3: Return results to client
    return results;
  }
}
