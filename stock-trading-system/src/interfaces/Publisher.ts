import Subscriber from "./Subscriber";
import StockData from "../models/StockData";

/**
 * Publisher Interface (Observer Pattern)
 *
 * Any class that wants to SEND/BROADCAST updates must implement this interface.
 *
 * Think of it like: "I will notify all my subscribers when something changes"
 */
interface Publisher {
  /**
   * Add a subscriber to the notification list
   * @param subscriber - The observer who wants to receive updates
   */
  subscribe(subscriber: Subscriber): void;

  /**
   * Remove a subscriber from the notification list
   * @param subscriber - The observer who no longer wants updates
   */
  unsubscribe(subscriber: Subscriber): void;

  /**
   * Send update to all subscribers
   * @param stockData - The data to broadcast
   */
  notify(stockData: StockData): void;
}

export default Publisher;
