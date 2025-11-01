/**
 * Failed Solution #2: Using Setters
 *
 * The Idea: One constructor for mandatory fields, setters for optional ones
 *
 * Looks great at first:
 * - No combinatorial explosion! ✅
 * - Clean API! ✅
 * - Easy to add new optional fields! ✅
 *
 * BUT CRITICAL PROBLEM:
 * ❌ We lose immutability! (Had to remove 'readonly')
 * ❌ Thread safety compromised!
 * ❌ Objects can be modified after creation!
 *
 * In production systems with multi-threading, this is DANGEROUS! 🚨
 */
class UserWithSetters {
  private userId: number;    // ❌ NO 'readonly' - can be changed!
  private username: string;  // ❌ NO 'readonly' - can be changed!
  private phoneNumber: string;  // Optional
  private age: number;          // Optional

  /**
   * Constructor for MANDATORY fields only
   */
  constructor(userId: number, username: string) {
    this.userId = userId;
    this.username = username;
    this.phoneNumber = '';  // Default
    this.age = 0;           // Default
  }

  // ❌ Setters allow modification after creation!
  public setPhoneNumber(phoneNumber: string): void {
    this.phoneNumber = phoneNumber;
  }

  public setAge(age: number): void {
    this.age = age;
  }

  // Getters
  public getUserId(): number {
    return this.userId;
  }

  public getUsername(): string {
    return this.username;
  }

  public getPhoneNumber(): string {
    return this.phoneNumber;
  }

  public getAge(): number {
    return this.age;
  }

  public toString(): string {
    return `User{userId=${this.userId}, username='${this.username}', phoneNumber='${this.phoneNumber}', age=${this.age}}`;
  }
}

/**
 * THE PROBLEM: Multi-Threading Disaster
 *
 * In production systems with multiple threads:
 *
 * Thread 1:
 *   user.setPhoneNumber("111-1111");
 *
 * Thread 2 (simultaneous):
 *   user.setPhoneNumber("222-2222");
 *
 * Thread 3 (simultaneous):
 *   console.log(user.getPhoneNumber());  // What will this print? 🤔
 *
 * Result: CHAOS! Race conditions! Inconsistent state! 😱
 *
 * Best Practice: Immutability (readonly) ensures thread safety!
 * Losing immutability is a HUGE sacrifice! 🛡️
 *
 * In big organizations with massive traffic and multi-threaded programs,
 * immutability is NON-NEGOTIABLE! ⚠️
 */

export default UserWithSetters;
