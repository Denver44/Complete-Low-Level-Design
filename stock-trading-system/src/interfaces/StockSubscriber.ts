import StockName from "../models/StockName";
import StockValue from "../models/StockValue";

/**
 * StockSubscriber Interface (Observer Pattern)
 *
 * Contract for all subscribers (trading bots, portfolio trackers, etc.)
 * Defines what subscribers MUST be able to do
 *
 * Think: "I receive and process stock updates"
 */
interface StockSubscriber {
  /**
   * Called by publisher when a stock update occurs
   * @param stockName - Which stock changed (enum)
   * @param stockValue - The new value (price, version, currency)
   */
  updateStock(stockName: StockName, stockValue: StockValue): void;

  /**
   * Get the name/ID of this subscriber (for identification)
   */
  getName(): string;
}

export default StockSubscriber;
