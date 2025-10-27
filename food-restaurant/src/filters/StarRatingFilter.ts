import { FoodItem } from '../data/FoodItem';
import { Restaurant } from '../data/Restaurant';
import { StarRating } from '../data/StarRating';
import { FoodItemFilter } from './FoodItemFilter';
import { RestaurantFilter } from './RestaurantFilter';

/**
 * StarRatingFilter - Dual Purpose
 *
 * Here's where our enum design really shines!
 *
 * The Magic:
 * Remember when we added numeric values to our StarRating enum? THIS is why!
 * We can now do clean numeric comparisons!
 *
 * The logic is identical for both! Same filtering criteria, just working with different entities!
 *
 * Example:
 * const filter = new StarRatingFilter(StarRating.FOUR);
 * // This will pass items/restaurants with rating >= 4 (FOUR or FIVE)
 *
 * Clean, readable, maintainable!
 */
export class StarRatingFilter implements FoodItemFilter, RestaurantFilter {
  private readonly minRating: StarRating;

  /**
   * Creates a new StarRatingFilter
   * @param minRating - Minimum star rating threshold
   */
  constructor(minRating: StarRating) {
    this.minRating = minRating;
  }

  /**
   * Checks if the entity's rating meets or exceeds the minimum
   * @param entity - The food item or restaurant to test
   * @returns true if entity's rating >= minimum rating, false otherwise
   */
  filter(item: FoodItem): boolean;
  filter(restaurant: Restaurant): boolean;
  filter(entity: FoodItem | Restaurant): boolean {
    // Compare numeric values of the enum
    return entity.getStarRating() >= this.minRating;
  }
}
