/**
 * Demo: Builder Pattern in Action
 */

import { User } from './UserWithBuilder';

console.log('=== Builder Pattern Demo ===\n');

// Example 1: User with all fields (method chaining)
const user1 = new User.Builder(1, 'john_doe')
  .setPhoneNumber('1234567890')
  .setAge(25)
  .build();

console.log('User 1:', user1);

// Example 2: User with only mandatory fields
const user2 = new User.Builder(2, 'jane_smith').build();

console.log('User 2:', user2);

// Example 3: Validation error
try {
  new User.Builder(3, 'invalid_user').setAge(200).build();
} catch (error) {
  console.log('\nValidation error:', (error as Error).message);
}

console.log('\n✅ Immutable objects with fluent API and validation!');
