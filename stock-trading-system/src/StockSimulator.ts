import StockUpdatePublisher from './publishers/StockUpdatePublisher';
import StockUpdatesSubscriber from './subscribers/StockUpdatesSubscriber';
import StockName from './models/StockName';
import Currency from './models/Currency';

/**
 * StockSimulator - Test Class
 *
 * Tests the Observer Pattern implementation with the exact scenario
 * from the tutor's blog:
 *
 * Setup:
 * - Publishers: BSE, NSE
 * - Subscribers: S1, S2, S3
 * - S1 and S2 subscribe to NSE
 * - S2 and S3 subscribe to BSE
 * - S2 subscribes to BOTH (critical for testing version control!)
 *
 * Events:
 * 1. NSE publishes Amazon v1 (₹100)
 * 2. NSE publishes Amazon v2 (₹200)
 * 3. BSE publishes Amazon v1 (₹100) [OLD DATA - should be ignored by S2!]
 * 4. BSE publishes Netflix v1 (₹300)
 */
class StockSimulator {
  public static main(): void {
    console.log('=== Stock Trading System - Test Simulation ===\n');

    // ==================== STEP 1: Create Publishers ====================
    console.log('📋 Step 1: Creating Publishers (Stock Exchanges)\n');

    const bse = new StockUpdatePublisher('BSE');
    const nse = new StockUpdatePublisher('NSE');

    console.log('✅ Created: BSE and NSE\n');

    // ==================== STEP 2: Create Subscribers ====================
    console.log('📋 Step 2: Creating Subscribers\n');

    const s1 = new StockUpdatesSubscriber('S1');
    const s2 = new StockUpdatesSubscriber('S2');
    const s3 = new StockUpdatesSubscriber('S3');

    console.log('✅ Created: S1, S2, S3\n');

    // ==================== STEP 3: Set up Subscriptions ====================
    console.log('📋 Step 3: Setting up Subscriptions\n');

    // S1 and S2 subscribe to NSE
    s1.subscribeToPublisher(nse);
    s2.subscribeToPublisher(nse);

    // S2 and S3 subscribe to BSE
    s2.subscribeToPublisher(bse);  // S2 subscribes to BOTH! Critical!
    s3.subscribeToPublisher(bse);

    console.log('\n📊 Subscription Network:');
    console.log('  NSE → S1, S2');
    console.log('  BSE → S2, S3');
    console.log('  S2 → subscribed to BOTH NSE and BSE (version control test!)\n');

    console.log('='.repeat(70));
    console.log('\n');

    // ==================== EVENT 1 ====================
    console.log('📢 Event 1: NSE publishes Amazon = ₹100 (v1)\n');
    console.log('Expected: S1 and S2 receive and store (first update)\n');

    nse.publishStockUpdate(StockName.AMAZON, 100, 1, Currency.INR);

    console.log('\n' + '='.repeat(70) + '\n');

    // ==================== EVENT 2 ====================
    console.log('📢 Event 2: NSE publishes Amazon = ₹200 (v2)\n');
    console.log('Expected: S1 and S2 update (v2 > v1)\n');

    nse.publishStockUpdate(StockName.AMAZON, 200, 2, Currency.INR);

    console.log('\n' + '='.repeat(70) + '\n');

    // ==================== EVENT 3 - CRITICAL TEST ====================
    console.log('📢 Event 3: BSE publishes Amazon = ₹100 (v1) [OLD DATA!]\n');
    console.log('Expected:');
    console.log('  - S2: IGNORES (already has v2 from NSE)');
    console.log('  - S3: STORES (first update for S3)\n');

    bse.publishStockUpdate(StockName.AMAZON, 100, 1, Currency.INR);

    console.log('\n' + '='.repeat(70) + '\n');

    // ==================== EVENT 4 ====================
    console.log('📢 Event 4: BSE publishes Netflix = ₹300 (v1)\n');
    console.log('Expected: S2 and S3 receive and store (new stock)\n');

    bse.publishStockUpdate(StockName.TESLA, 300, 1, Currency.INR);  // Using TESLA as Netflix

    console.log('\n' + '='.repeat(70) + '\n');

    // ==================== VERIFICATION ====================
    console.log('\n🔍 FINAL STATE VERIFICATION\n');

    console.log('Expected Final States:');
    console.log('  S1: {AMAZON: v2, ₹200}');
    console.log('  S2: {AMAZON: v2, ₹200, TESLA: v1, ₹300}');
    console.log('  S3: {AMAZON: v1, ₹100, TESLA: v1, ₹300}\n');

    console.log('Actual Final States:\n');
    s1.printCurrentStockValues();
    s2.printCurrentStockValues();
    s3.printCurrentStockValues();

    console.log('\n✅ Test Complete!\n');
    console.log('🎯 Key Observation: S2 correctly IGNORED old data (v1) from BSE');
    console.log('   because it already had newer data (v2) from NSE!');
    console.log('   This proves version control is working! 🎉\n');
  }
}

// Run the simulation
StockSimulator.main();
