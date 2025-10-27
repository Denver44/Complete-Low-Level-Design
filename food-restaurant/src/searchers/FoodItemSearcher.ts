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
    const foodItems: FoodItem[] = this.fetchFromDatabase(foodItemName);

    // Step 4: Apply Filters (The Magic!)
    // What's Happening:
    // - For each food item from the database
    // - Apply each filter one by one
    // - If ANY filter returns false, skip this item
    // - If ALL filters return true, include this item in results
    //
    // The Beauty: Same code works whether there are 3 filters today or 10 tomorrow.
    // NO CODE CHANGE NEEDED!

    const result: FoodItem[] = [];

    for (const item of foodItems) {
      let passesAllFilters = true;

      // Apply each filter
      for (const filter of filters) {
        if (!filter.filter(item)) {
          passesAllFilters = false;
          break; // No need to check remaining filters
        }
      }

      // If item passed all filters, include it in results
      if (passesAllFilters) {
        result.push(item);
      }
    }

    return result;
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
