import StockSubscriber from "./StockSubscriber";
import StockName from "../models/StockName";
import StockValue from "../models/StockValue";

/**
 * StockPublisher Interface (Observer Pattern)
 *
 * Contract for all stock publishers (exchanges)
 * Defines the methods that any publisher MUST implement
 *
 * Think: "I broadcast stock updates to multiple subscribers"
 */
interface StockPublisher {
  /**
   * Add a subscriber to receive updates
   * @param subscriber - The subscriber who wants to follow this publisher
   */
  subscribe(subscriber: StockSubscriber): void;

  /**
   * Remove a subscriber from updates
   * @param subscriber - The subscriber who wants to stop following
   */
  unsubscribe(subscriber: StockSubscriber): void;

  /**
   * Notify all subscribers about a stock update
   * @param stockName - Which stock changed (enum for type safety)
   * @param stockValue - The new value (price, version, currency)
   */
  notifyAllSubscribers(stockName: StockName, stockValue: StockValue): void;
}

export default StockPublisher;
