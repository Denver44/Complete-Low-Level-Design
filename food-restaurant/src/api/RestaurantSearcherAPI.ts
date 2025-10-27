import { Restaurant } from '../data/Restaurant';
import { MealType } from '../data/MealType';
import { CuisineType } from '../data/CuisineType';
import { StarRating } from '../data/StarRating';
import { RestaurantSearcher } from '../searchers/RestaurantSearcher';
import { RestaurantFilter } from '../filters/RestaurantFilter';
import { MealTypeFilter } from '../filters/MealTypeFilter';
import { CuisineTypeFilter } from '../filters/CuisineTypeFilter';
import { StarRatingFilter } from '../filters/StarRatingFilter';

/**
 * The Restaurant Searcher API - Complete Implementation
 *
 * Just like we had FoodItemSearcherAPI, we now need RestaurantSearcherAPI.
 * The pattern should feel familiar!
 *
 * Understanding the Filters:
 *
 * MealType for Restaurants:
 * - If a restaurant only serves vegetarian items → It's a VEG restaurant
 * - If it serves both veg and non-veg → It's a NON_VEG restaurant
 *
 * Cuisine Types:
 * - Restaurants can serve multiple cuisines!
 * - User can filter: "Show me Italian OR Asian restaurants"
 *
 * Star Rating:
 * - Same as food items - minimum quality threshold
 *
 * Return Type:
 * - Restaurant[] - All restaurants matching the criteria!
 *
 * Notice how similar this is to FoodItemSearcherAPI? That's intentional design!
 * Consistency makes systems easier to learn and maintain.
 *
 * The Pattern:
 * - Same parameters (entity name differs)
 * - Same validation approach
 * - Same filter creation logic
 * - Same delegation pattern
 * - Same return structure
 *
 * Consistency is Key: When APIs follow the same pattern, the system becomes
 * predictable and easier to work with!
 */
export class RestaurantSearcherAPI {
  private readonly searcher: RestaurantSearcher;

  constructor() {
    this.searcher = new RestaurantSearcher();
  }

  /**
   * Search for restaurants based on various criteria
   *
   * Implementation Steps:
   * Step 1: Validation - Always validate your inputs first!
   * Step 2: Generate Filters - Create filter objects based on user input
   * Step 3: Delegate to Business Logic - Hand off to the searcher
   *
   * @param restaurantName - Name of the restaurant to search for
   * @param mealType - Filter by meal type (VEG or NON_VEG)
   * @param cuisineTypes - Filter by cuisine types (can select multiple)
   * @param starRating - Minimum star rating threshold
   * @returns Array of matching restaurants
   */
  search(
    restaurantName: string,
    mealType?: MealType,
    cuisineTypes?: CuisineType[],
    starRating?: StarRating
  ): Restaurant[] {
    // Step 1: Validation
    // Best Practice: Validate at the top layer so underlying classes can work with confidence!
    if (!restaurantName || restaurantName.trim().length === 0) {
      throw new Error('Restaurant name cannot be empty');
    }

    // Step 2: Generate Filters
    // Create filter objects based on user input
    // We're using our dual-purpose filters here!
    const filters: RestaurantFilter[] = [];

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

    // Step 3: Delegate to Business Logic
    // Hand off to the searcher
    // Note: These filter classes implement BOTH FoodItemFilter and RestaurantFilter,
    // but here we treat them as RestaurantFilter. The compiler and runtime will
    // ensure the correct filter(Restaurant) method is used.
    const results = this.searcher.search(restaurantName, filters);

    return results;
  }
}

