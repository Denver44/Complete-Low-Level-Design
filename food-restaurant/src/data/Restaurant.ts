import { MealType } from './MealType';
import { CuisineType } from './CuisineType';
import { StarRating } from './StarRating';
import { BusinessHours } from './BusinessHours';
import { Menu } from './Menu';

/**
 * The Restaurant Data Model
 *
 * Key Attributes Explained:
 * - id: Unique identifier (primary key in database)
 * - name: "Paradise Biryani," "Pizza Hut," etc.
 * - description: What makes this restaurant special?
 * - businessHours: When are they open?
 * - mealType: VEG or NON_VEG
 *   - If a restaurant only serves vegetarian items → It's a VEG restaurant
 *   - If it serves both veg and non-veg → It's a NON_VEG restaurant
 * - cuisineTypes: List! A restaurant can serve multiple cuisines
 * - starRating: Quality rating
 * - menu: What food items do they serve?
 *
 * Important: Notice that cuisineTypes is a LIST! Unlike a food item that belongs to
 * one cuisine, a restaurant can serve multiple cuisines. This is a real-world consideration!
 *
 * Data Class Pattern: Lots of attributes + Big constructor + All getters = Classic data class structure
 */
export class Restaurant {
  private readonly id: number;
  private readonly name: string;
  private readonly description: string;
  private readonly businessHours: BusinessHours;
  private readonly mealType: MealType;
  private readonly cuisineTypes: CuisineType[]; // LIST! Multiple cuisines!
  private readonly starRating: StarRating;
  private readonly menu: Menu;

  constructor(
    id: number,
    name: string,
    description: string,
    businessHours: BusinessHours,
    mealType: MealType,
    cuisineTypes: CuisineType[],
    starRating: StarRating,
    menu: Menu
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.businessHours = businessHours;
    this.mealType = mealType;
    this.cuisineTypes = cuisineTypes;
    this.starRating = starRating;
    this.menu = menu;
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

  getBusinessHours(): BusinessHours {
    return this.businessHours;
  }

  getMealType(): MealType {
    return this.mealType;
  }

  getCuisineTypes(): CuisineType[] {
    return this.cuisineTypes;
  }

  getStarRating(): StarRating {
    return this.starRating;
  }

  getMenu(): Menu {
    return this.menu;
  }
}
