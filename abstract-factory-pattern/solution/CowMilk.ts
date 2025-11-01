import { Milk } from './Milk';

export class CowMilk implements Milk {
  getType(): string {
    return 'Cow Milk';
  }
}
