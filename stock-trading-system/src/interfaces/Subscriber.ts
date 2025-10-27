import StockData from "../models/StockData";

/**
 * Subscriber Interface (Observer Pattern)
 *
 * Any class that wants to RECEIVE stock updates must implement this interface.
 *
 * Think of it like: "I want to be notified when stock prices change"
 */
interface Subscriber {
  /**
   * Called by the Publisher when new stock data arrives
   * @param data - The stock update (name, price, version)
   */
  update(data: StockData): void;

  /**
   * Get the name/ID of this subscriber (for debugging)
   */
  getName(): string;
}

export default Subscriber;
