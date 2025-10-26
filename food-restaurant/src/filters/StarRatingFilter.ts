import { Filter } from './Filter';
import { FoodItem, StarRating } from '../data';

/**
 * Filter food items by minimum star rating
 *
 * This filter keeps only items with a rating greater than or equal
 * to the specified minimum rating.
 *
 * @example
 * const ratingFilter = new StarRatingFilter(StarRating.FOUR);
 * const highRatedItems = ratingFilter.apply(allFoodItems); // Only 4+ star items
 */
export class StarRatingFilter implements Filter<FoodItem> {
  private readonly minRating: StarRating;

  /**
   * Create a new StarRatingFilter
   * @param minRating - Minimum star rating (items with this rating or higher will pass)
   */
  constructor(minRating: StarRating) {
    this.minRating = minRating;
  }

  /**
   * Filter items to only include those with rating >= minimum rating
   * @param items - List of food items to filter
   * @returns Filtered list containing only items meeting the rating requirement
   */
  apply(items: FoodItem[]): FoodItem[] {
    return items.filter(item =>
      StarRating.isGreaterOrEqual(item.getStarRating(), this.minRating)
    );
  }
}
