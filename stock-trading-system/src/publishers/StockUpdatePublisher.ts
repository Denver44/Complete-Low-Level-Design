import StockPublisher from '../interfaces/StockPublisher';
import StockSubscriber from '../interfaces/StockSubscriber';
import StockName from '../models/StockName';
import StockValue from '../models/StockValue';
import Currency from '../models/Currency';

/**
 * StockUpdatePublisher - Concrete Publisher Implementation
 *
 * Represents a stock exchange (BSE, NSE, NASDAQ, etc.)
 * Maintains a list of subscribers and notifies them of stock updates
 *
 * Design Note: We use ONE class with different names (BSE, NSE)
 * rather than separate classes, since all exchanges behave identically!
 */
class StockUpdatePublisher implements StockPublisher {
  private name: string;
  private subscribers: StockSubscriber[];

  constructor(name: string) {
    this.name = name;
    this.subscribers = [];
  }

  subscribe(subscriber: StockSubscriber): void {
    this.subscribers.push(subscriber);
    console.log(`[${this.name}] ${subscriber.getName()} subscribed`);
  }

  unsubscribe(subscriber: StockSubscriber): void {
    this.subscribers = this.subscribers.filter((sub) => sub !== subscriber);
    console.log(`[${this.name}] ${subscriber.getName()} unsubscribed`);
  }

  notifyAllSubscribers(stockName: StockName, stockValue: StockValue): void {
    // Broadcast to ALL subscribers
    for (const subscriber of this.subscribers) {
      subscriber.updateStock(stockName, stockValue);
    }
  }

  /**
   * Convenience method: Create StockValue and publish it
   * This is what exchanges would call when price changes
   */
  publishStockUpdate(
    stockName: StockName,
    amount: number,
    version: number,
    currency: Currency
  ): void {
    console.log(
      `[${this.name}] Publishing: ${stockName} = ${currency} ${amount} (v${version})`
    );
    const stockValue = new StockValue(version, amount, currency);
    this.notifyAllSubscribers(stockName, stockValue);
  }

  getName(): string {
    return this.name;
  }
}

export default StockUpdatePublisher;
