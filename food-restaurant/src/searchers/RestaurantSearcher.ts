import { Restaurant } from '../data/Restaurant';
import { RestaurantFilter } from '../filters/RestaurantFilter';

/**
 * The Restaurant Searcher Business Class
 *
 * Challenge: Try implementing this on your own! It should follow the EXACT same pattern
 * as FoodItemSearcher:
 *
 * Step 1: Validate inputs
 * Make sure the input parameters are sane (e.g., non-null lists, valid name strings)
 * and handle edge cases early.
 *
 * Step 2: Fetch restaurants from database by name
 * Query the DB/storage to get raw restaurant records that match the restaurantName filter.
 *
 * Step 3: Convert to Restaurant objects
 * Map database records to the Restaurant data class instances used by the application.
 *
 * Step 4: Apply all filters in cascade
 * Loop through the provided List<RestaurantFilter> and apply them to each Restaurant,
 * keeping only those that pass all filters.
 *
 * Step 5: Return filtered results
 * Return the final Restaurant[] matching the criteria.
 *
 * The algorithm is identical - only the entity type changes!
 * That's the beauty of our design!
 */
export class RestaurantSearcher {
  /**
   * Generic search method that applies pluggable filters
   *
   * @param restaurantName - The name to search for
   * @param filters - List of filters to apply
   * @returns List of restaurants that pass all filters
   */
  search(restaurantName: string, filters: RestaurantFilter[]): Restaurant[] {
    // Step 1: Validation
    // Always validate your inputs
    if (!restaurantName || restaurantName.length === 0 || !filters) {
      throw new Error('Missing params');
    }

    // Step 2: Fetch from Database
    // Assume we have a Data Access layer
    // (Implementation will come later)
    //
    // const dataAccessor = new DataAccessor();
    // const dataAccessResult = dataAccessor.getRestaurantsWithName(restaurantName);

    // Step 3: Convert to Business Objects
    // Database results need converting to our Restaurant objects
    // (Implementation will come later)
    //
    // const converter = new DataAccessObjectConverter();
    // let restaurants = converter.convertToRestaurants(dataAccessResult);

    // For now, we'll use a placeholder
    let restaurants: Restaurant[] = this.fetchFromDatabase(restaurantName);

    // Step 4: Apply Filters (The Magic! - Cascading Filter Effect)
    // Same algorithm as FoodItemSearcher!
    // Each filter works on the output of the previous filter

    for (const filter of filters) {
      const filteredRestaurants: Restaurant[] = [];

      for (const restaurant of restaurants) {
        if (filter.filter(restaurant)) {
          filteredRestaurants.push(restaurant);
        }
      }

      // This line makes the current filtered results become the input for the next filter!
      restaurants = filteredRestaurants;
    }

    return restaurants;
  }

  /**
   * Placeholder method for database fetching
   * This will be replaced with actual DataAccessor later
   * @param restaurantName - The name to search for
   * @returns List of restaurants from database
   */
  private fetchFromDatabase(restaurantName: string): Restaurant[] {
    // Placeholder - will be implemented later
    // For now, return empty array
    return [];
  }
}
