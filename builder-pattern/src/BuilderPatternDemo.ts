import { User, Builder } from './solution/UserWithBuilder';

/**
 * Builder Pattern Demo - The Elegant Solution! 🏗️
 */
class BuilderPatternDemo {
  public static main(): void {
    console.log('=== Builder Pattern: The Elegant Solution! ===\n');

    // ==================== BASIC USAGE ====================
    console.log('📋 Basic Usage\n');

    // Step 1: Create a Builder with mandatory fields
    const builder = new Builder(101, 'Alice');

    // Step 2: Set optional fields
    builder.setPhoneNumber('9876543210');
    builder.setAge(25);

    // Step 3: Build the immutable User
    const user1 = builder.build();

    console.log('Created:', user1.toString());
    console.log('✅ User fields are FINAL (immutable!)');
    console.log('✅ Thread-safe!');
    console.log('✅ No parameter confusion!\n');

    console.log('='.repeat(70) + '\n');

    // ==================== METHOD CHAINING ====================
    console.log('⛓️  Method Chaining - The Beautiful Syntax!\n');

    // ONE BEAUTIFUL CHAINED EXPRESSION! ✨
    const user2 = new Builder(102, 'Bob')
      .setPhoneNumber('1234567890')
      .setAge(30)
      .build();

    console.log('Created:', user2.toString());
    console.log('✅ Reads like English!');
    console.log('✅ Fluent API!');
    console.log('✅ Self-documenting code!\n');

    console.log('='.repeat(70) + '\n');

    // ==================== OPTIONAL FIELDS ====================
    console.log('🎨 Flexibility with Optional Fields\n');

    // User with only mandatory fields
    const user3 = new Builder(103, 'Charlie')
      .build();
    console.log('Only mandatory:', user3.toString());

    // User with only phoneNumber
    const user4 = new Builder(104, 'David')
      .setPhoneNumber('5555555555')
      .build();
    console.log('With phone:', user4.toString());

    // User with only age
    const user5 = new Builder(105, 'Eve')
      .setAge(35)
      .build();
    console.log('With age:', user5.toString());

    // User with all fields
    const user6 = new Builder(106, 'Frank')
      .setPhoneNumber('7777777777')
      .setAge(40)
      .build();
    console.log('With all fields:', user6.toString());

    console.log('\n✅ No null or 0 required for missing fields!');
    console.log('✅ Just omit the setter call!');
    console.log('✅ Crystal clear which fields are set!\n');

    console.log('='.repeat(70) + '\n');

    // ==================== VALIDATION ====================
    console.log('✔️  Validation in build() Method\n');

    console.log('Trying to create user with invalid age (-5)...');
    try {
      const invalidUser = new Builder(107, 'Invalid')
        .setAge(-5)  // Invalid age!
        .build();
    } catch (error) {
      console.log('❌ Error caught:', (error as Error).message);
    }

    console.log('\nTrying to create user with invalid phone (123)...');
    try {
      const invalidUser = new Builder(108, 'Invalid')
        .setPhoneNumber('123')  // Too short!
        .build();
    } catch (error) {
      console.log('❌ Error caught:', (error as Error).message);
    }

    console.log('\n✅ Validation ensures data integrity!');
    console.log('✅ Fail fast with clear errors!\n');

    console.log('='.repeat(70) + '\n');

    // ==================== REAL-WORLD SCENARIO ====================
    console.log('🌍 Real-World Scenario: User Registration System\n');

    // New user with minimal info
    const newUser = new Builder(201, 'NewUser')
      .build();
    console.log('New registration:', newUser.toString());

    // User completing profile
    const completedProfile = new Builder(202, 'CompletedUser')
      .setPhoneNumber('9998887777')
      .setAge(28)
      .build();
    console.log('Completed profile:', completedProfile.toString());

    // User with only phone verification
    const phoneVerified = new Builder(203, 'PhoneUser')
      .setPhoneNumber('6665554444')
      .build();
    console.log('Phone verified:', phoneVerified.toString());

    console.log('\n✅ Beautiful flexibility!');
    console.log('✅ Handles all combinations effortlessly!\n');

    console.log('='.repeat(70) + '\n');

    // ==================== BENEFITS SUMMARY ====================
    console.log('🏆 Benefits Achieved!\n');

    console.log('✅ 1. Handles Many Optional Parameters');
    console.log('       No more passing null or 0!\n');

    console.log('✅ 2. Maintains Immutability');
    console.log('       All User fields are readonly (final)!\n');

    console.log('✅ 3. No Parameter Ordering Confusion');
    console.log('       Method names make it crystal clear!\n');

    console.log('✅ 4. No Combinatorial Explosion');
    console.log('       One Builder handles ALL combinations!\n');

    console.log('✅ 5. Scales Beautifully');
    console.log('       Add new optional field? Just ONE setter!\n');

    console.log('✅ 6. Clear Mandatory vs Optional');
    console.log('       Mandatory in constructor, optional via setters!\n');

    console.log('✅ 7. Readable and Maintainable');
    console.log('       Reads like English! Beautiful! ✨\n');

    console.log('='.repeat(70) + '\n');

    // ==================== THE PATTERN ====================
    console.log('📐 The Builder Pattern Structure\n');

    console.log('Before (Nightmare):');
    console.log('  new User(101, "Alice", "9876543210", 25)');
    console.log('  // What\'s the order? What\'s optional? 😱\n');

    console.log('After (Beautiful):');
    console.log('  new Builder(101, "Alice")       // Mandatory');
    console.log('    .setPhoneNumber("9876543210")  // Optional');
    console.log('    .setAge(25)                    // Optional');
    console.log('    .build();                      // Immutable! ✨\n');

    console.log('='.repeat(70) + '\n');

    console.log('🎉 Congratulations! You\'ve mastered the Builder Pattern! 🏆\n');
    console.log('Now go build beautiful, immutable, thread-safe objects! 🚀✨\n');
  }
}

// Run the demo
BuilderPatternDemo.main();
