import { Sugar } from './Sugar';

export class RegularSugar implements Sugar {
  getType(): string {
    return 'Regular Sugar';
  }
}
