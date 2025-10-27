import { MealType } from './MealType';
import { CuisineType } from './CuisineType';
import { StarRating } from './StarRating';

/**
 * FoodItem - The Star of Our Show
 *
 * This data class holds all the information about a food item.
 * Key attributes:
 * - Unique identifier
 * - Name, description, price
 * - Meal type (Veg/Non-veg)
 * - Cuisine type
 * - Star rating
 * - Restaurant ID (CRITICAL to link back to the restaurant page)
 * - Availability flag
 */
export class FoodItem {
  private readonly id: number;
  private readonly name: string;
  private readonly description: string;
  private readonly price: number; // In INR, for example
  private readonly mealType: MealType;
  private readonly cuisineType: CuisineType;
  private readonly starRating: StarRating;
  private readonly restaurantId: number; // SUPER IMPORTANT!
  private readonly isAvailable: boolean;

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

  // Getters for all fields
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
}
