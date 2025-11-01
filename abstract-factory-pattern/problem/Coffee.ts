import { Bean } from './Bean';
import { Sugar } from './Sugar';
import { Milk } from './Milk';

/**
 * Coffee Abstract Class
 *
 * Coffee now has complex dependencies on ingredients!
 */
export abstract class Coffee {
  protected bean: Bean;
  protected sugar: Sugar;
  protected milk: Milk;

  constructor(bean: Bean, sugar: Sugar, milk: Milk) {
    this.bean = bean;
    this.sugar = sugar;
    this.milk = milk;
  }

  abstract brew(): void;
  abstract boil(): void;
}
