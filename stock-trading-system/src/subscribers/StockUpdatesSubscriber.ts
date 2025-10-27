import StockSubscriber from '../interfaces/StockSubscriber';
import StockPublisher from '../interfaces/StockPublisher';
import StockName from '../models/StockName';
import StockValue from '../models/StockValue';

/**
 * StockUpdatesSubscriber - Concrete Subscriber Implementation
 *
 * Represents a trading bot, portfolio tracker, or any entity that
 * wants to receive stock updates from exchanges
 *
 * Key Features:
 * - Stores FULL stock data (not just versions)
 * - Tracks which publishers it's subscribed to
 * - Implements version-aware update logic
 */
class StockUpdatesSubscriber implements StockSubscriber {
  private name: string;
  private stockValues: Map<StockName, StockValue>;  // Store FULL data!
  private publishers: StockPublisher[];              // Track subscriptions!

  constructor(name: string) {
    this.name = name;
    this.stockValues = new Map<StockName, StockValue>();
    this.publishers = [];
  }

  /**
   * Subscribe to a publisher and track it
   */
  subscribeToPublisher(publisher: StockPublisher): void {
    publisher.subscribe(this);
    this.publishers.push(publisher);
  }

  /**
   * Unsubscribe from a specific publisher
   */
  unsubscribeFromPublisher(publisher: StockPublisher): void {
    publisher.unsubscribe(this);
    this.publishers = this.publishers.filter(pub => pub !== publisher);
  }

  /**
   * Unsubscribe from ALL publishers
   */
  unsubscribeFromAll(): void {
    this.publishers.forEach(publisher => publisher.unsubscribe(this));
    this.publishers = [];
  }

  /**
   * Core update logic with version control
   * This is called by the publisher when stock updates arrive
   */
  updateStock(stockName: StockName, stockValue: StockValue): void {
    const newVersion = stockValue.getVersion();

    // Logging for visibility
    console.log(
      `[${this.name}] Received update: ${stockName} = ${stockValue.toString()}`
    );

    // Check if we have this stock already
    if (!this.stockValues.has(stockName)) {
      // First time seeing this stock - ACCEPT IT!
      console.log(`[${this.name}] 🆕 New stock stored: ${stockName}`);
      this.stockValues.set(stockName, stockValue);

    } else {
      // We have this stock - compare versions!
      const currentStockValue = this.stockValues.get(stockName)!;
      const currentVersion = currentStockValue.getVersion();

      if (newVersion > currentVersion) {
        // Newer version - ACCEPT IT!
        console.log(
          `[${this.name}] ✅ Updated: ${stockName} from v${currentVersion} to v${newVersion}`
        );
        this.stockValues.set(stockName, stockValue);

      } else {
        // Old or same version - REJECT IT!
        console.log(
          `[${this.name}] ❌ Ignored (old): ${stockName} v${newVersion} (current: v${currentVersion})`
        );
      }
    }
  }

  /**
   * Query current price for a stock
   */
  getStockPrice(stockName: StockName): StockValue | undefined {
    return this.stockValues.get(stockName);
  }

  /**
   * Get all tracked stocks
   */
  getAllStocks(): Map<StockName, StockValue> {
    return new Map(this.stockValues);  // Return copy for immutability
  }

  /**
   * Print current stock holdings (for testing/debugging)
   */
  printCurrentStockValues(): void {
    console.log(`[${this.name}] Current Holdings:`);

    if (this.stockValues.size === 0) {
      console.log('  (empty)');
      return;
    }

    this.stockValues.forEach((value, stockName) => {
      console.log(`  - ${stockName}: ${value.toString()}`);
    });
  }

  getName(): string {
    return this.name;
  }
}

export default StockUpdatesSubscriber;
