/**
 * Generic Filter Interface
 *
 * This is the cornerstone of our extensible filter system.
 *
 * Key Design Benefits:
 * 1. Open-Closed Principle: Open for extension (add new filters), closed for modification
 * 2. Single Responsibility: Each filter does ONE thing
 * 3. Composability: Filters can be chained together
 * 4. Type Safety: Generic type parameter ensures type consistency
 *
 * How it works:
 * - Each filter receives a list of items
 * - It applies its specific filtering logic
 * - Returns a filtered list
 * - Filters can be chained: Filter1 → Filter2 → Filter3 → Final Result
 *
 * @template T - The type of items being filtered (e.g., FoodItem)
 */
export interface Filter<T> {
  /**
   * Apply the filter to a list of items
   *
   * @param items - The list of items to filter
   * @returns A filtered list containing only items that match the filter criteria
   *
   * @example
   * const vegFilter = new MealTypeFilter(MealType.VEG);
   * const vegItems = vegFilter.apply(allItems);
   */
  apply(items: T[]): T[];
}
