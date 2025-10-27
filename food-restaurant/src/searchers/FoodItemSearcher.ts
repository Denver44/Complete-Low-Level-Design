import { FoodItem } from '../data/FoodItem';
import { FoodItemFilter } from '../filters/FoodItemFilter';

/**
 * The Searcher Business Class
 *
 * The Role of FoodItemSearcher:
 * This is the business logic class that powers our API. The API doesn't know about:
 * - How to fetch from the database
 * - How to apply filters
 * - What algorithms to use
 *
 * It just delegates to FoodItemSearcher and says, "Do your magic!"
 *
 * The Generic Search Method Parameters:
 * - foodItemName: What to search for (comes from API)
 * - filters: A LIST of FoodItemFilter objects!
 *
 * This is the key! The API creates the specific filters (MealTypeFilter, CuisineTypeFilter,
 * StarRatingFilter) and passes them in a list.
 *
 * Why This is Brilliant:
 * Tomorrow, when we add HealthyFoodFilter:
 * ✅ We create the new filter class implementing FoodItemFilter
 * ✅ The API adds it to the filters list
 * ✅ FoodItemSearcher code DOESN'T CHANGE
 *
 * That's the Open-Closed Principle in action! Open for extension, closed for modification!
 */
export class FoodItemSearcher {
  /**
   * Generic search method that applies pluggable filters
   *
   * @param foodItemName - The name to search for
   * @param filters - List of filters to apply
   * @returns List of food items that pass all filters
   */
  search(foodItemName: string, filters: FoodItemFilter[]): FoodItem[] {
    // Step 1: Validation
    // Always validate your inputs
    // Pro Tip: Validating at top layers ensures that underlying classes can work
    // safely without worrying about null or invalid data!
    if (!foodItemName || foodItemName.length === 0 || !filters) {
      throw new Error('Missing params');
    }

    // Step 2: Fetch from Database
    // Assume we have a Data Access layer
    // For now, we'll comment this out as mentioned in the blog
    // (Implementation coming in Part 3)
    //
    // const dataAccessor = new DataAccessor();
    // const dataAccessResult = dataAccessor.getFoodItemsWithName(foodItemName);

    // Step 3: Convert to Business Objects
    // Database results need converting to our FoodItem objects
    // (Implementation coming in Part 3)
    //
    // const converter = new DataAccessObjectConverter();
    // const foodItems = converter.convertToFoodItems(dataAccessResult);

    // For now, we'll use a placeholder
    let foodItems: FoodItem[] = this.fetchFromDatabase(foodItemName);

    // Step 4: Apply Filters (The Magic! - Cascading Filter Effect)
    // What's Happening (Cascading Filter Effect):
    //
    // Iteration 1 (MealTypeFilter):
    //   - Start with raw results (e.g., 100 items)
    //   - Filter 1 checks each item: "Is it VEG?"
    //   - 60 items pass → filteredFoodItems has 60 items
    //   - Update: foodItems = filteredFoodItems (now 60 items)
    //
    // Iteration 2 (CuisineTypeFilter):
    //   - Start with 60 items (survivors from Filter 1)
    //   - Filter 2 checks each: "Is it ITALIAN or ASIAN?"
    //   - 35 items pass → filteredFoodItems has 35 items
    //   - Update: foodItems = filteredFoodItems (now 35 items)
    //
    // Iteration 3 (StarRatingFilter):
    //   - Start with 35 items (survivors from Filter 2)
    //   - Filter 3 checks each: "Is rating >= 4?"
    //   - 20 items pass → filteredFoodItems has 20 items
    //   - Update: foodItems = filteredFoodItems (now 20 items)
    //
    // Final Result: Return 20 items that passed ALL three filters!
    //
    // Think of it like a water filter system:
    // Each filter works on the output of the previous filter

    for (const filter of filters) {
      const filteredFoodItems: FoodItem[] = [];

      for (const item of foodItems) {
        if (filter.filter(item)) {
          filteredFoodItems.push(item);
        }
      }

      // This line makes the current filtered results become the input for the next filter!
      foodItems = filteredFoodItems;
    }

    return foodItems;
  }

  /**
   * Placeholder method for database fetching
   * This will be replaced with actual DataAccessor in Part 3
   * @param foodItemName - The name to search for
   * @returns List of food items from database
   */
  private fetchFromDatabase(foodItemName: string): FoodItem[] {
    // Placeholder - will be implemented in Part 3
    // For now, return empty array
    return [];
  }
}
