/**
 * StockName Enum
 *
 * Defines the available stocks in our system
 * Using enum provides:
 * - Type safety (can't misspell stock names)
 * - IDE autocomplete
 * - Clear, limited set of options
 */
enum StockName {
  AMAZON = "AMZN",
  GOOGLE = "GOOG",
  TESLA = "TSLA",
  APPLE = "AAPL",
  MICROSOFT = "MSFT"
}

export default StockName;
