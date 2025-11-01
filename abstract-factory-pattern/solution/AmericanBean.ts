import { Bean } from './Bean';

export class AmericanBean implements Bean {
  getOrigin(): string {
    return 'America';
  }

  getType(): string {
    return 'American Coffee Bean';
  }
}
