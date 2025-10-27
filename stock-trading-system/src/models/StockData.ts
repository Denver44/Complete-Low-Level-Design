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

  public setPrice(price: number): void {
    this.price = price;
    this.version += 1;
  }
}

export default StockData;
