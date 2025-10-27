import { FoodItem } from './FoodItem';

/**
 * Data Class #2: Menu
 *
 * Every restaurant has a menu with food items!
 * The menu is essentially a collection of FoodItem objects that the restaurant serves.
 *
 * We'll flesh this out as we need it!
 */
export class Menu {
  private readonly items: FoodItem[];

  constructor(items: FoodItem[]) {
    this.items = items;
  }

  getItems(): FoodItem[] {
    return this.items;
  }
}
