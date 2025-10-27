import StockExchange from './publishers/StockExchange';
import TradingBot from './subscribers/TradingBot';
import PortfolioTracker from './subscribers/PortfolioTracker';

console.log('=== Stock Trading System Demo ===\n');

// ==================== SETUP ====================
console.log('📋 Setting up exchanges and subscribers...\n');

// Create 2 stock exchanges (BSE, NSE)
const bse = new StockExchange('BSE');
const nse = new StockExchange('NSE');

// Create subscribers (2 bots, 1 portfolio tracker)
const bot1 = new TradingBot('TradingBot-1');
const bot2 = new TradingBot('TradingBot-2');
const portfolio = new PortfolioTracker('Portfolio-Tracker');

// Subscribe them to exchanges
// Bot1 → both BSE and NSE
bse.subscribe(bot1);
nse.subscribe(bot1);

// Bot2 → only BSE
bse.subscribe(bot2);

// Portfolio → only NSE
nse.subscribe(portfolio);

console.log('\n');

// ==================== SCENARIO 1 ====================
console.log('📊 Scenario 1: Normal Updates (BSE)\n');
// Publish AMZN updates with increasing versions
bse.publishStockUpdate('AMZN', 100, 1);
bse.publishStockUpdate('AMZN', 150, 2);
bse.publishStockUpdate('AMZN', 200, 3);

console.log('\n');

// ==================== SCENARIO 2 ====================
console.log('⚠️  Scenario 2: Out-of-Order Updates (NSE)\n');
// Publish GOOG with v2 FIRST, then v1 (v1 should be rejected)
nse.publishStockUpdate('GOOG', 200, 2);
nse.publishStockUpdate('GOOG', 100, 1); // Old data!

console.log('\n');

// ==================== SCENARIO 3 ====================
console.log('🔄 Scenario 3: Multiple Exchanges, Same Stock\n');
// Publish TSLA from both BSE and NSE with different versions
bse.publishStockUpdate('TSLA', 300, 1);
nse.publishStockUpdate('TSLA', 350, 2);
bse.publishStockUpdate('TSLA', 250, 1); // Old data from BSE

console.log('\n');

// ==================== SCENARIO 4 ====================
console.log('🚫 Scenario 4: Unsubscribe\n');
// TODO: Unsubscribe bot2 from BSE
bse.unsubscribe(bot2);
// TODO: Publish update - bot2 should NOT receive it
bse.publishStockUpdate('AMZN', 250, 4);

console.log('\n');
console.log('✅ Demo completed!');
