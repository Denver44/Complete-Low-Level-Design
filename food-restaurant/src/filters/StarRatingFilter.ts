import { FoodItemFilter } from './FoodItemFilter';
import { FoodItem, StarRating } from '../data';

/**
 * Filter Implementation #3: Star Rating Filter
 *
 * This filter checks if a food item meets a minimum rating requirement.
 *
 * The Magic of getVal():
 * - Clean, elegant comparison using numeric values
 * - No need for complex if-else chains
 * - Scalable for any rating system
 *
 * @example
 * // User wants items rated 4+ stars
 * const highRatingFilter = new StarRatingFilter(StarRating.FOUR);
 *
 * const greatPizza = new FoodItem(...);  // 5 stars
 * const goodPasta = new FoodItem(...);   // 4 stars
 * const okayBurger = new FoodItem(...);  // 3 stars
 * const badTaco = new FoodItem(...);     // 2 stars
 *
 * highRatingFilter.filter(greatPizza);   // true ✅ (5 >= 4)
 * highRatingFilter.filter(goodPasta);    // true ✅ (4 >= 4)
 * highRatingFilter.filter(okayBurger);   // false ❌ (3 < 4)
 * highRatingFilter.filter(badTaco);      // false ❌ (2 < 4)
 */
export class StarRatingFilter implements FoodItemFilter {
  private readonly starRating: StarRating;

  /**
   * Create a new StarRatingFilter
   * @param starRating - Minimum star rating (items with this rating or higher will pass)
   */
  constructor(starRating: StarRating) {
    this.starRating = starRating;
  }

  /**
   * Checks if the given food item meets the minimum rating requirement
   *
   * @param foodItem - The food item to evaluate
   * @returns true if the item's rating >= minimum rating, false otherwise
   */
  filter(foodItem: FoodItem): boolean {
    return foodItem.getStarRating() >= this.starRating;
  }
}
