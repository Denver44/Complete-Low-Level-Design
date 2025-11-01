import { Coffee } from './Coffee';
import { Cappuccino } from './Cappuccino';
import { Espresso } from './Espresso';
import { Robusta } from './Robusta';
import { Bean } from './Bean';
import { Sugar } from './Sugar';
import { Milk } from './Milk';
import { AmericanBean } from './AmericanBean';
import { FrenchBean } from './FrenchBean';
import { BrownSugar } from './BrownSugar';
import { RegularSugar } from './RegularSugar';
import { CowMilk } from './CowMilk';
import { PowderedMilk } from './PowderedMilk';

/**
 * CoffeeFactory - The Bloated Approach
 *
 * PROBLEMS:
 * 1. Too many responsibilities (creates coffee + manages recipes)
 * 2. Depends on 9+ concrete classes
 * 3. If-else chains get messy
 * 4. Hard to maintain (recipe changes require factory modification)
 * 5. Violates Single Responsibility Principle
 */
export class CoffeeFactory {
  getCoffee(coffeeType: string): Coffee | null {
    if (coffeeType === 'Cappuccino') {
      const bean: Bean = new AmericanBean();
      const sugar: Sugar = new BrownSugar();
      const milk: Milk = new CowMilk();

      return new Cappuccino(bean, sugar, milk);

    } else if (coffeeType === 'Espresso') {
      const bean: Bean = new FrenchBean();
      const sugar: Sugar = new RegularSugar();
      const milk: Milk = new PowderedMilk();

      return new Espresso(bean, sugar, milk);

    } else if (coffeeType === 'Robusta') {
      const bean: Bean = new AmericanBean();
      const sugar: Sugar = new RegularSugar();
      const milk: Milk = new CowMilk();

      return new Robusta(bean, sugar, milk);
    }

    return null;
  }
}
