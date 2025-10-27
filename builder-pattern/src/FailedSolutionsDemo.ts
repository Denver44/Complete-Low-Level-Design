import UserWithOverloading from './failed-solutions/UserWithOverloading';
import UserWithSetters from './failed-solutions/UserWithSetters';
import { UserAttributes, UserWithAttributes } from './failed-solutions/UserAttributes';

/**
 * Demo: Shows why each "solution" fails
 */
class FailedSolutionsDemo {
  public static main(): void {
    console.log('=== Builder Pattern: Failed Solutions ===\n');

    // ==================== FAILED SOLUTION #1 ====================
    console.log('❌ Failed Solution #1: Constructor Overloading\n');

    const user1 = new UserWithOverloading(101, 'Alice');
    const user2 = new UserWithOverloading(102, 'Bob', '1234567890');
    const user3 = new UserWithOverloading(103, 'Charlie', '9876543210', 30);

    console.log('✅ Looks good! We can call with different parameters!');
    console.log(user1.toString());
    console.log(user2.toString());
    console.log(user3.toString());
    console.log();

    console.log('BUT THE PROBLEM:');
    console.log('  With 2 optional fields: need 2^2 = 4 constructors');
    console.log('  With 3 optional fields: need 2^3 = 8 constructors');
    console.log('  With 4 optional fields: need 2^4 = 16 constructors');
    console.log('  With n optional fields: need 2^n constructors!');
    console.log();
    console.log('  This is COMBINATORIAL EXPLOSION! 💥');
    console.log('  NOT SCALABLE! ❌\n');

    console.log('='.repeat(70) + '\n');

    // ==================== FAILED SOLUTION #2 ====================
    console.log('❌ Failed Solution #2: Using Setters\n');

    const user4 = new UserWithSetters(104, 'David');
    user4.setPhoneNumber('5555555555');
    user4.setAge(35);

    console.log('✅ Looks great! Clean API!');
    console.log(user4.toString());
    console.log();

    console.log('BUT THE CRITICAL PROBLEM:');
    console.log('  ❌ Lost immutability! (removed readonly)');
    console.log('  ❌ Thread safety compromised!');
    console.log('  ❌ Objects can be modified after creation!');
    console.log();

    console.log('Multi-threading disaster scenario:');
    console.log('  Thread 1: user.setPhoneNumber("111-1111")');
    console.log('  Thread 2: user.setPhoneNumber("222-2222")  // Same time!');
    console.log('  Thread 3: console.log(user.getPhoneNumber()) // What prints? 🤔');
    console.log();
    console.log('  Result: CHAOS! Race conditions! Inconsistent state! 😱');
    console.log();
    console.log('  In production with multi-threading:');
    console.log('    Immutability is NON-NEGOTIABLE! ⚠️\n');

    console.log('='.repeat(70) + '\n');

    // ==================== FAILED SOLUTION #3 ====================
    console.log('❌ Failed Solution #3: Attributes Class\n');

    const attrs = new UserAttributes(105, 'Eve', '3333333333', 40);
    const user5 = new UserWithAttributes(attrs);

    console.log('✅ User constructor takes just ONE parameter!');
    console.log(user5.toString());
    console.log();

    console.log('BUT THE FUNDAMENTAL FLAW:');
    console.log('  ❌ UserAttributes constructor still has 4 parameters!');
    console.log('  ❌ Still confusing parameter order!');
    console.log('  ❌ Still need to pass values for optional fields!');
    console.log('  ❌ Still have combinatorial explosion!');
    console.log();
    console.log('  WE JUST MOVED THE PROBLEM! 🏃');
    console.log('  This is "problem relocation," not "problem solving"! ❌\n');

    console.log('='.repeat(70) + '\n');

    // ==================== SUMMARY ====================
    console.log('📋 Summary: All Solutions Failed\n');

    console.log('Solution 1: Constructor Overloading');
    console.log('  ❌ Combinatorial explosion (2^n constructors)');
    console.log('  ❌ Not scalable\n');

    console.log('Solution 2: Setters');
    console.log('  ❌ Lose immutability');
    console.log('  ❌ Thread safety issues');
    console.log('  ❌ Objects can be modified after creation\n');

    console.log('Solution 3: Attributes Class');
    console.log('  ❌ Just moves the problem elsewhere');
    console.log('  ❌ Doesn\'t actually solve anything\n');

    console.log('='.repeat(70) + '\n');

    console.log('💡 What We Need:\n');
    console.log('  ✅ Handle many optional parameters gracefully');
    console.log('  ✅ Maintain immutability (readonly)');
    console.log('  ✅ Provide thread safety');
    console.log('  ✅ Clean, readable API');
    console.log('  ✅ No combinatorial explosion');
    console.log('  ✅ Clear distinction between mandatory and optional\n');

    console.log('🎯 The Solution: THE BUILDER PATTERN! 🏗️');
    console.log('   (Coming in Part 2 of the blog...)\n');
  }
}

// Run the demo
FailedSolutionsDemo.main();
