import User from './User';

/**
 * Problem Demo: Shows why the current User class is problematic
 */
class ProblemDemo {
  public static main(): void {
    console.log('=== Builder Pattern: The Problem ===\n');

    // ==================== PROBLEM #1: Parameter Confusion ====================
    console.log('❌ Problem #1: Too Many Parameters - Confusing Order\n');

    // Which parameter is which? Easy to mix up!
    const user1 = new User(101, 'Alice', '9876543210', 25);
    console.log('Created:', user1.toString());
    console.log('Question: Was the first parameter userId? Or phoneNumber? Or age?');
    console.log('With 4 parameters, there are 4! = 24 possible orderings! 😱\n');

    console.log('='.repeat(70) + '\n');

    // ==================== PROBLEM #2: Optional Fields ====================
    console.log('❌ Problem #2: Optional Fields Nightmare\n');

    console.log('Real-world scenario:');
    console.log('  - userId and username are MANDATORY ✅');
    console.log('  - phoneNumber is OPTIONAL');
    console.log('  - age is OPTIONAL\n');

    console.log('But what if we only have userId and username?\n');

    // Forced to pass empty string and 0 for optional fields!
    const user2 = new User(102, 'Bob', '', 0);
    console.log('Created:', user2.toString());
    console.log('Problem: Client forced to worry about optional fields!');
    console.log('         Had to pass empty string for phoneNumber');
    console.log('         Had to pass 0 for age\n');

    console.log('What if we only have phoneNumber but not age?\n');
    const user3 = new User(103, 'Charlie', '1234567890', 0);
    console.log('Created:', user3.toString());
    console.log('Problem: Still need to pass 0 for age!\n');

    console.log('='.repeat(70) + '\n');

    // ==================== REAL-WORLD SCALE ====================
    console.log('🔥 Real-World Problem: Scalability\n');

    console.log('Imagine a User class with 10+ fields:');
    console.log('  1. userId (mandatory)');
    console.log('  2. username (mandatory)');
    console.log('  3. phoneNumber (optional)');
    console.log('  4. age (optional)');
    console.log('  5. email (optional)');
    console.log('  6. address (optional)');
    console.log('  7. sex (optional)');
    console.log('  8. dateOfBirth (optional)');
    console.log('  9. profilePictureUrl (optional)');
    console.log(' 10. bio (optional)\n');

    console.log('Imagine passing empty strings or nulls for 6-8 fields! 🤯\n');

    console.log('='.repeat(70) + '\n');

    console.log('💡 We need a better solution!\n');
    console.log('Requirements:');
    console.log('  ✅ Handle many optional parameters gracefully');
    console.log('  ✅ Maintain immutability (readonly)');
    console.log('  ✅ Provide thread safety');
    console.log('  ✅ Clean, readable API');
    console.log('  ✅ No combinatorial explosion');
    console.log('  ✅ Clear distinction between mandatory and optional\n');
  }
}

// Run the demo
ProblemDemo.main();
