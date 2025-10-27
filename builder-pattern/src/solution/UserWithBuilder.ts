/**
 * The Builder Pattern Solution! 🏗️
 *
 * Key Features:
 * ✅ Inner static Builder class
 * ✅ User fields are FINAL (immutable!)
 * ✅ Builder fields are NOT final (mutable during construction)
 * ✅ Method chaining for fluent API
 * ✅ Clear mandatory vs optional fields
 * ✅ Validation in build() method
 * ✅ No combinatorial explosion
 * ✅ Thread-safe
 */
class User {
  // User fields - ALL FINAL! Immutable! 🛡️
  private readonly userId: number;
  private readonly username: string;
  private readonly phoneNumber: string;
  private readonly age: number;

  /**
   * Constructor - called by Builder to create immutable User
   * Takes a Builder and copies all values from it
   */
  constructor(builder: Builder) {
    this.userId = builder['userId'];
    this.username = builder['username'];
    this.phoneNumber = builder['phoneNumber'];
    this.age = builder['age'];
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
 * Inner Static Builder Class 🏗️
 *
 * Why static? So we can access it without a User instance!
 * User.Builder (✅) vs user.Builder (❌ - chicken and egg problem!)
 */
class Builder {
  // Builder fields - NOT final! Mutable during construction
  private userId: number;
  private username: string;
  private phoneNumber: string;
  private age: number;

  /**
   * Constructor with ONLY mandatory fields
   * Forces clients to provide required data!
   */
  constructor(userId: number, username: string) {
    this.userId = userId;
    this.username = username;
    this.phoneNumber = '';  // Default for optional
    this.age = 0;           // Default for optional
  }

  /**
   * Setter for phoneNumber (optional field)
   * Returns 'this' (the Builder) to enable method chaining! ⛓️
   */
  public setPhoneNumber(phoneNumber: string): Builder {
    this.phoneNumber = phoneNumber;
    return this;  // Return this Builder for chaining!
  }

  /**
   * Setter for age (optional field)
   * Returns 'this' (the Builder) to enable method chaining! ⛓️
   */
  public setAge(age: number): Builder {
    this.age = age;
    return this;  // Return this Builder for chaining!
  }

  /**
   * build() - The final step! 🎯
   *
   * Validates the data and creates the immutable User object
   */
  public build(): User {
    // Validation before creating User! ✔️
    if (this.age < 0 || this.age > 150) {
      throw new Error('Age must be between 0 and 150');
    }

    if (this.phoneNumber && this.phoneNumber.length < 10) {
      throw new Error('Phone number must be at least 10 digits');
    }

    // Create and return the immutable User!
    return new User(this);
  }
}

export { User, Builder };
