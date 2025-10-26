import { Filter } from './Filter';
import { FoodItem } from '../data';

/**
 * Filter food items by availability status
 *
 * This filter ensures users only see items that are currently available
 * for ordering. This is a practical filter that demonstrates the
 * extensibility of our filter system.
 *
 * @example
 * const availabilityFilter = new AvailabilityFilter();
 * const availableItems = availabilityFilter.apply(allFoodItems);
 */
export class AvailabilityFilter implements Filter<FoodItem> {
  /**
   * Filter items to only include those that are currently available
   * @param items - List of food items to filter
   * @returns Filtered list containing only available items
   */
  apply(items: FoodItem[]): FoodItem[] {
    return items.filter(item => item.getIsAvailable());
  }
}
