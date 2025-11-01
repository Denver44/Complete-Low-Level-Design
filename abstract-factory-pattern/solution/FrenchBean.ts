import { Bean } from './Bean';

export class FrenchBean implements Bean {
  getOrigin(): string {
    return 'France';
  }

  getType(): string {
    return 'French Coffee Bean';
  }
}
