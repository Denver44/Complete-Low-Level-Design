/**
 * Problem #1: Complex User Class with Too Many Parameters
 *
 * Issues:
 * 1. Constructor takes 4 parameters - hard to remember order
 * 2. With n parameters, there are n! (factorial) possible orderings
 * 3. For 4 parameters: 4! = 24 different arrangements!
 * 4. Clients get confused about parameter order
 * 5. phoneNumber and age are OPTIONAL but constructor forces clients to provide them
 */
class User {
  // Using readonly for immutability (TypeScript equivalent of Java's final)
  private readonly userId: number;
  private readonly username: string;
  private readonly phoneNumber: string;
  private readonly age: number;

  /**
   * THE PROBLEM: Too many parameters!
   * Which order? userId, username, phoneNumber, age? Or something else?
   */
  constructor(userId: number, username: string, phoneNumber: string, age: number) {
    this.userId = userId;
    this.username = username;
    this.phoneNumber = phoneNumber;
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

export default User;
