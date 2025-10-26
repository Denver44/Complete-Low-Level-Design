/**
 * Represents star ratings with queryable numeric values
 * This design allows easy comparison: rating.value > 3
 */
export enum StarRating {
  ONE = 1,
  TWO = 2,
  THREE = 3,
  FOUR = 4,
  FIVE = 5,
}

/**
 * Helper functions for StarRating
 */
export namespace StarRating {
  /**
   * Get the numeric value of a star rating
   * @param rating - The star rating enum
   * @returns The numeric value (1-5)
   */
  export function getValue(rating: StarRating): number {
    return rating;
  }

  /**
   * Create a StarRating from a numeric value
   * @param value - Numeric rating (1-5)
   * @returns The corresponding StarRating
   * @throws Error if value is not between 1 and 5
   */
  export function fromValue(value: number): StarRating {
    if (value < 1 || value > 5 || !Number.isInteger(value)) {
      throw new Error(
        `Invalid star rating value: ${value}. Must be an integer between 1 and 5.`
      );
    }
    return value as StarRating;
  }

  /**
   * Check if one rating is greater than or equal to another
   * @param rating1 - First rating
   * @param rating2 - Second rating
   * @returns true if rating1 >= rating2
   */
  export function isGreaterOrEqual(
    rating1: StarRating,
    rating2: StarRating
  ): boolean {
    return rating1 >= rating2;
  }
}
