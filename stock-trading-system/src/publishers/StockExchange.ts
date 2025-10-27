import Publisher from '../interfaces/Publisher';
import Subscriber from '../interfaces/Subscriber';
import StockData from '../models/StockData';

class StockExchange implements Publisher {
  private exchangeName: string;
  private subscribers: Subscriber[] = [];

  constructor(exchangeName: string) {
    this.exchangeName = exchangeName;
  }

  subscribe(subscriber: Subscriber): void {
    this.subscribers.push(subscriber);
    console.log(`[${this.exchangeName}] ${subscriber.getName()} subscribed`);
  }
  unsubscribe(subscriber: Subscriber): void {
    this.subscribers = this.subscribers.filter((sub) => sub !== subscriber);
    console.log(`[${this.exchangeName}] ${subscriber.getName()} unsubscribed`);
  }

  notify(stockData: StockData): void {
    for (const subscriber of this.subscribers) {
      subscriber.update(stockData);
    }
  }

  /**
   * Convenience method: Create StockData and publish it
   * This is what real exchanges would call when price changes
   */
  publishStockUpdate(symbol: string, price: number, version: number): void {
    console.log(`[${this.exchangeName}] Publishing: ${symbol} = $${price} (v${version})`);
    const stockData = new StockData(symbol, price, version);
    this.notify(stockData);
  }

  getExchangeName(): string {
    return this.exchangeName;
  }
}

export default StockExchange;
