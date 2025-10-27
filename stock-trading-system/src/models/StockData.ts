class StockData {
  private symbol: string;
  private price: number;
  private version: number;

  constructor(symbol: string, price: number, version: number = 1) {
    this.symbol = symbol;
    this.price = price;
    this.version = version;
  }

  public getSymbol(): string {
    return this.symbol;
  }

  public getPrice(): number {
    return this.price;
  }

  public getVersion(): number {
    return this.version;
  }

  // Optional: Helper method to display stock data
  public toString(): string {
    return `[${this.symbol}] Price: ${this.price}, Version: ${this.version}`;
  }
}

export default StockData;
