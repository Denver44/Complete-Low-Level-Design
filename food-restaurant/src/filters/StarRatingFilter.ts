import { FoodItem } from '../data/FoodItem';
import { StarRating } from '../data/StarRating';
import { FoodItemFilter } from './FoodItemFilter';

/**
 * Implementation #3: Star Rating Filter
 *
 * Here's where our enum design really shines!
 *
 * The Magic:
 * Remember when we added numeric values to our StarRating enum? THIS is why!
 * We can now do clean numeric comparisons!
 *
 * Example:
 * const filter = new StarRatingFilter(StarRating.FOUR);
 * // This will pass items with rating >= 4 (FOUR or FIVE)
 *
 * Clean, readable, maintainable!
 */
export class StarRatingFilter implements FoodItemFilter {
  private readonly minRating: StarRating;

  /**
   * Creates a new StarRatingFilter
   * @param minRating - Minimum star rating threshold
   */
  constructor(minRating: StarRating) {
    this.minRating = minRating;
  }

  /**
   * Checks if the food item's rating meets or exceeds the minimum
   * @param item - The food item to test
   * @returns true if item's rating >= minimum rating, false otherwise
   */
  filter(item: FoodItem): boolean {
    // Compare numeric values of the enum
    return item.getStarRating() >= this.minRating;
  }
}
