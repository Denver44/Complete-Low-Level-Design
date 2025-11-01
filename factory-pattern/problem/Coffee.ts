/**
 * Coffee Interface
 *
 * Defines the contract for all coffee types.
 * When making coffee, you need to:
 * - Brew it
 * - Boil it
 */
export interface Coffee {
  brew(): void;
  boil(): void;
}
