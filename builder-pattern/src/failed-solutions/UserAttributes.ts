/**
 * Failed Solution #3: Separate Attributes Class
 *
 * The Idea: Group all parameters into one object to reduce constructor parameters
 *
 * Seems clever at first:
 * - User constructor takes just ONE parameter! ✅
 * - Looks cleaner! ✅
 *
 * BUT FUNDAMENTAL FLAW:
 * ❌ We haven't solved anything!
 * ❌ We just moved the problem from User to UserAttributes!
 * ❌ UserAttributes still has the SAME problems!
 *
 * This is "problem relocation," not "problem solving"! 🏃
 */

/**
 * UserAttributes - Holds all user data
 * BUT: This class has the SAME PROBLEM as the original User class!
 */
class UserAttributes {
  public userId: number;
  public username: string;
  public phoneNumber: string;
  public age: number;

  /**
   * ❌ SAME PROBLEM: 4 parameters!
   * ❌ Still confusing parameter order!
   * ❌ Still need to pass empty strings/0 for optional fields!
   * ❌ Still have combinatorial explosion with constructor overloading!
   */
  constructor(userId: number, username: string, phoneNumber: string, age: number) {
    this.userId = userId;
    this.username = username;
    this.phoneNumber = phoneNumber;
    this.age = age;
  }
}

/**
 * User class - Now takes UserAttributes
 */
class UserWithAttributes {
  private readonly userId: number;
  private readonly username: string;
  private readonly phoneNumber: string;
  private readonly age: number;

  /**
   * Looks better: just ONE parameter!
   * But wait... what about the UserAttributes constructor? 🤔
   */
  constructor(attributes: UserAttributes) {
    this.userId = attributes.userId;
    this.username = attributes.username;
    this.phoneNumber = attributes.phoneNumber;
    this.age = attributes.age;
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
 * Usage:
 *
 * const attrs = new UserAttributes(101, "Alice", "9876543210", 25);
 * const user = new UserWithAttributes(attrs);
 *
 * ANALYSIS:
 * ❌ UserAttributes constructor still has 4 parameters
 * ❌ Still need to remember parameter order
 * ❌ Still need to pass empty strings/0 for optional fields
 * ❌ Still have combinatorial explosion problem
 *
 * WE HAVEN'T SOLVED ANYTHING! Just moved it elsewhere! 😔
 *
 * Fundamental Lesson:
 * "You can't solve a problem by just moving it somewhere else!"
 */

export { UserAttributes, UserWithAttributes };
