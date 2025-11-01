import { Milk } from './Milk';

export class PowderedMilk implements Milk {
  getType(): string {
    return 'Powdered Milk';
  }
}
