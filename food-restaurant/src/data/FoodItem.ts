import { MealType } from './MealType';
import { CuisineType } from './CuisineType';
import { StarRating } from './StarRating';

/**
 * Represents a food item in the restaurant system
 * This is the core entity that gets searched, filtered, and displayed to users
 */
export class FoodItem {
  private readonly id: number;
  private readonly name: string;
  private readonly description: string;
  private readonly price: number;
  private readonly mealType: MealType;
  private readonly cuisineType: CuisineType;
  private readonly starRating: StarRating;
  private readonly restaurantId: number;
  private readonly isAvailable: boolean;

  /**
   * Creates a new FoodItem instance
   * @param id - Unique identifier from database (e.g., 10245)
   * @param name - Food item name (e.g., "Margherita Pizza")
   * @param description - Detailed description of the food item
   * @param price - Price in currency units (e.g., 299.00)
   * @param mealType - Dietary classification (VEG or NON_VEG)
   * @param cuisineType - Type of cuisine (ITALIAN, ASIAN, etc.)
   * @param starRating - Average rating (1-5 stars)
   * @param restaurantId - ID of the restaurant offering this item
   * @param isAvailable - Whether the item is currently available for order
   */
  constructor(
    id: number,
    name: string,
    description: string,
    price: number,
    mealType: MealType,
    cuisineType: CuisineType,
    starRating: StarRating,
    restaurantId: number,
    isAvailable: boolean
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.mealType = mealType;
    this.cuisineType = cuisineType;
    this.starRating = starRating;
    this.restaurantId = restaurantId;
    this.isAvailable = isAvailable;
  }

  // Getters
  getId(): number {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getDescription(): string {
    return this.description;
  }

  getPrice(): number {
    return this.price;
  }

  getMealType(): MealType {
    return this.mealType;
  }

  getCuisineType(): CuisineType {
    return this.cuisineType;
  }

  getStarRating(): StarRating {
    return this.starRating;
  }

  getRestaurantId(): number {
    return this.restaurantId;
  }

  getIsAvailable(): boolean {
    return this.isAvailable;
  }

  /**
   * Returns a string representation of the FoodItem
   */
  toString(): string {
    return (
      `FoodItem{id=${this.id}, name='${this.name}', price=${this.price}, ` +
      `mealType=${this.mealType}, cuisineType=${this.cuisineType}, ` +
      `starRating=${this.starRating}, available=${this.isAvailable}}`
    );
  }
}
