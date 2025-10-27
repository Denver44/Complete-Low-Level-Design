import Currency from "./Currency";

/**
 * StockValue - Value Object
 *
 * Represents a complete snapshot of a stock's price at a point in time
 * Bundles together: version, price (amount), and currency
 *
 * This is immutable - each update creates a NEW StockValue object
 */
class StockValue {
  private version: number;
  private amount: number;
  private currency: Currency;

  constructor(version: number, amount: number, currency: Currency) {
    this.version = version;
    this.amount = amount;
    this.currency = currency;
  }

  public getVersion(): number {
    return this.version;
  }

  public getAmount(): number {
    return this.amount;
  }

  public getCurrency(): Currency {
    return this.currency;
  }

  /**
   * Helper method to display stock value
   */
  public toString(): string {
    return `${this.currency} ${this.amount} (v${this.version})`;
  }
}

export default StockValue;
