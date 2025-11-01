/**
 * Failed Solution #1: Constructor Overloading
 *
 * The Idea: Create multiple constructors for different combinations
 *
 * Problems:
 * 1. Combinatorial Explosion: With n optional fields, need 2^n constructors!
 * 2. Not scalable: Adding one more optional field doubles the constructors
 * 3. For 2 optional fields (phoneNumber, age): need 2^2 = 4 constructors
 * 4. For 3 optional fields: need 2^3 = 8 constructors
 * 5. For 4 optional fields: need 2^4 = 16 constructors!
 *
 * Math: 2^n grows exponentially! This is COMBINATORIAL EXPLOSION! 💥
 */
class UserWithOverloading {
  private readonly userId: number;
  private readonly username: string;
  private readonly phoneNumber: string;
  private readonly age: number;

  /**
   * TypeScript doesn't support method overloading like Java,
   * so we use optional parameters to simulate it
   */
  constructor(
    userId: number,
    username: string,
    phoneNumber?: string,
    age?: number
  ) {
    this.userId = userId;
    this.username = username;
    this.phoneNumber = phoneNumber || '';
    this.age = age || 0;
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
 * In Java, you'd need to write ALL these constructors explicitly:
 *
 * // Constructor 1: Both phoneNumber and age present
 * public User(int userId, String username, String phoneNumber, int age) { ... }
 *
 * // Constructor 2: Both absent
 * public User(int userId, String username) { ... }
 *
 * // Constructor 3: Phone present, age absent
 * public User(int userId, String username, String phoneNumber) { ... }
 *
 * // Constructor 4: Phone absent, age present
 * public User(int userId, String username, int age) { ... }
 *
 * That's 4 constructors for just 2 optional fields!
 *
 * Add one more optional field (e.g., email)?
 * Now you need 2^3 = 8 constructors! 😱
 *
 * Add another (e.g., address)?
 * Now you need 2^4 = 16 constructors! 💥
 *
 * This is NOT SCALABLE!
 */

export default UserWithOverloading;
