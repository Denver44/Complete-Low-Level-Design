import { FoodItem } from '../data';
import { FoodItemFilter } from '../filters';

/**
 * Business Logic Layer: FoodItemSearcher
 *
 * This is the powerhouse class—the brain behind the search operation!
 *
 * Responsibilities:
 * - Validate user inputs
 * - Fetch data from database (via DataAccessor - to be implemented)
 * - Convert raw data to FoodItem objects (via Converter - to be implemented)
 * - Apply all filters in cascade
 * - Return filtered results
 *
 * What this class does NOT know about:
 * - How filters work internally
 * - How database queries are constructed
 * - How results are processed
 *
 * This is separation of concerns in action! 🎯
 */
export class FoodItemSearcher {
  /**
   * Search for food items with cascade filtering
   *
   * The Open-Closed Principle in Action:
   * - This method signature never changes when adding new filter types!
   * - Want to add a price filter? Just add it to the filters list!
   * - No modifications needed to this code!
   *
   * @param foodItemName - The name or partial name to search for (e.g., "pizza")
   * @param filters - List of filters to apply (any number, any type!)
   * @returns List of matching food items
   * @throws Error if inputs are invalid
   *
   * @example
   * const filters = [
   *   new MealTypeFilter(MealType.VEG),
   *   new CuisineTypeFilter([CuisineType.ITALIAN]),
   *   new StarRatingFilter(StarRating.FOUR)
   * ];
   * const results = searcher.search("pizza", filters);
   */
  search(foodItemName: string, filters: FoodItemFilter[]): FoodItem[] {
    // ================================
    // Step 1: Input Validation
    // ================================
    // Always validate your inputs! Trust no one—not even yourself! 😄
    // This catches errors early and prevents mysterious crashes deep in the code
    if (
      foodItemName == null ||
      foodItemName.length === 0 ||
      filters == null
    ) {
      throw new Error('Missing required parameters');
    }

    // ================================
    // Step 2: Fetch Data from Database
    // ================================
    // TODO: Implement DataAccessor class
    // const dataAccessor = new DataAccessor();
    // const result = dataAccessor.getFoodItemsWithName(foodItemName);

    // ================================
    // Step 3: Convert Raw Data to FoodItem Objects
    // ================================
    // TODO: Implement DataAccessObjectConverter
    // const converter = new DataAccessObjectConverter();
    // let foodItems = converter.convertToFoodItems(result);

    // For now, we'll work with an empty list since DB is not implemented
    // In real implementation, this would be populated from the database
    let foodItems: FoodItem[] = [];

    // ================================
    // Step 4: Apply Filters in Cascade
    // ================================
    // The Filter Application Algorithm: Pipeline Processing
    // Each filter works on the results from the previous filter
    //
    // Think of it like water flowing through multiple sieves:
    // All Items → [Filter 1] → Subset → [Filter 2] → Smaller Subset → [Filter 3] → Final Result
    //
    // Example with real data:
    // 50 items → [MealType VEG] → 30 items → [Cuisine ITALIAN] → 12 items → [Rating 4+] → 5 items

    for (const filter of filters) {
      const filteredList: FoodItem[] = [];

      // Apply current filter to each item
      for (const foodItem of foodItems) {
        if (filter.filter(foodItem)) {
          filteredList.push(foodItem);
        }
      }

      // Update foodItems for next filter iteration
      // This is the cascade/pipeline effect!
      foodItems = filteredList;

      // Early termination optimization:
      // If no items remain, no need to continue filtering
      if (foodItems.length === 0) {
        break;
      }
    }

    // ================================
    // Step 5: Return Final Results
    // ================================
    return foodItems;
  }
}
