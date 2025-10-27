import Subscriber from '../interfaces/Subscriber';
import StockData from '../models/StockData';

class PortfolioTracker implements Subscriber {
  private name: string;
  private stockVersions: Map<string, number>; // Track version numbers only!

  constructor(name: string) {
    this.name = name;
    this.stockVersions = new Map<string, number>();
  }

  update(data: StockData): void {
    const symbol = data.getSymbol();
    const newVersion = data.getVersion();
    const newPrice = data.getPrice();

    // Check if we have this stock already
    if (!this.stockVersions.has(symbol)) {
      // First time seeing this stock - ACCEPT IT!
      console.log(`[${this.name}] 🆕 New stock: ${data.toString()}`);
      this.stockVersions.set(symbol, newVersion); // Store the version
    } else {
      // We have this stock - need to compare versions!
      const currentVersion = this.stockVersions.get(symbol)!;

      if (newVersion > currentVersion) {
        // Newer version - ACCEPT IT!
        console.log(`[${this.name}] ✅ Updated: ${data.toString()}`);
        this.stockVersions.set(symbol, newVersion); // Update the version
      } else {
        // Old version - REJECT IT!
        console.log(
          `[${
            this.name
          }] ❌ Ignored (old): ${data.toString()} (current: v${currentVersion})`
        );
      }
    }
  }

  getName(): string {
    return this.name;
  }
}

export default PortfolioTracker;
