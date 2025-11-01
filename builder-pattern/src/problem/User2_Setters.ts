/**
 * Failed Solution #2: Using Setters
 *
 * Approach: Single constructor for mandatory fields + setters for optional fields
 *
 * Advantages:
 * ✅ Eliminates constructor explosion
 * ✅ Clean, fluent API
 * ✅ Easy to extend with new optional fields
 *
 * CRITICAL PROBLEMS:
 * ❌ Loss of immutability (must remove 'readonly' modifiers)
 * ❌ Thread-safety compromised
 * ❌ Objects can be in inconsistent/incomplete state
 * ❌ No guarantee of object validity at construction time
 *
 * Why This Matters:
 * In concurrent systems (Node.js async operations, worker threads, or multi-threaded
 * environments like Java), mutable objects create race conditions and unpredictable behavior.
 */

/**
 * PROBLEM SCENARIO: Concurrency Issues
 *
 * Example with concurrent operations:
 *
 * Operation 1 (async callback):
 *   user.setPhoneNumber("111-1111");
 *
 * Operation 2 (different async context, overlapping execution):
 *   user.setPhoneNumber("222-2222");
 *
 * Operation 3 (reads during modification):
 *   const phone = user.getPhoneNumber(); // Unpredictable result!
 *
 * Consequences:
 * • Race conditions - final state depends on execution timing
 * • Data corruption - partial updates may leave object inconsistent
 * • Hard-to-debug issues - behavior changes based on timing
 * • No atomicity - object can be observed in intermediate states
 *
 * ============================================================================
 * ALTERNATIVE SOLUTIONS (And Why They're Not Ideal)
 * ============================================================================
 *
 * Solution 1: Using Locks
 * -----------------------
 * Acquire a lock before modifying, release after:
 *
 *   async setPhoneNumber(phone: string): Promise<void> {
 *     await this.acquireLock();
 *     try {
 *       this.phoneNumber = phone;
 *     } finally {
 *       this.releaseLock();
 *     }
 *   }
 *
 * Problems with locks:
 * ❌ Performance penalty - operations must wait, reducing throughput
 * ❌ Deadlock risk - complex lock ordering can freeze the system
 * ❌ Code complexity - harder to reason about and debug
 * ❌ Resource overhead - managing locks consumes system resources
 * ❌ Not idiomatic - goes against functional programming best practices
 *
 * Solution 2: Timestamp-based (Last-Write-Wins)
 * ----------------------------------------------
 * Track timestamp for each field, only accept newer updates:
 *
 *   private phoneNumberTimestamp: number = 0;
 *
 *   setPhoneNumber(phone: string, timestamp = Date.now()): void {
 *     if (timestamp > this.phoneNumberTimestamp) {
 *       this.phoneNumber = phone;
 *       this.phoneNumberTimestamp = timestamp;
 *     }
 *   }
 *
 * Problems with timestamps:
 * ❌ Clock synchronization issues in distributed systems
 * ❌ Lost updates - earlier writes are silently discarded
 * ❌ Extra complexity - need timestamp tracking per field
 * ❌ Still mutable - doesn't solve the fundamental design issue
 * ❌ Timestamp conflicts - what if two updates have same timestamp?
 *
 * ============================================================================
 * INDUSTRY BEST PRACTICE: Immutability
 * ============================================================================
 *
 * Immutable objects (with 'readonly' fields) are the superior solution:
 *
 * Benefits:
 * ✅ Zero synchronization needed - no locks, no waiting
 * ✅ Thread-safe by design - race conditions are impossible
 * ✅ Simpler code - easier to understand and maintain
 * ✅ Better performance - no locking overhead
 * ✅ Functional style - easier to test and reason about
 * ✅ Compiler-enforced - prevents bugs at compile time
 *
 * Example with immutability:
 *
 *   class User {
 *     private readonly phoneNumber: string;
 *
 *     // To "change" data, create a NEW object
 *     withPhoneNumber(newPhone: string): User {
 *       return new User(this.userId, newPhone);
 *     }
 *   }
 *
 * The Builder Pattern (our solution) achieves this by:
 * • Separating construction (mutable builder) from usage (immutable object)
 * • All fields are 'readonly' in the final object
 * • Thread-safe without any synchronization mechanism
 *
 * Bottom Line:
 * Locks and timestamps CAN solve thread-safety, but they add complexity and
 * overhead. Immutability eliminates the problem entirely at the design level,
 * which is why it's the standard approach for value objects and DTOs in
 * production systems.
 */

class UserWithSetters {
  private userId: number; // ❌ NO 'readonly' - can be changed!
  private username: string; // ❌ NO 'readonly' - can be changed!
  private phoneNumber: string; // Optional
  private age: number; // Optional

  /**
   * Constructor for MANDATORY fields only
   */
  constructor(userId: number, username: string) {
    this.userId = userId;
    this.username = username;
    this.phoneNumber = ''; // Default
    this.age = 0; // Default
  }

  // ❌ Setters allow modification after creation!
  public setPhoneNumber(phoneNumber: string): void {
    this.phoneNumber = phoneNumber;
  }

  public setAge(age: number): void {
    this.age = age;
  }
}

export default UserWithSetters;
