/**
 * The Builder Pattern Solution! 🏗️
 *
 * Key Features:
 * ✅ Inner static Builder class (nested inside User)
 * ✅ User fields are FINAL (immutable!)
 * ✅ Builder fields are NOT final (mutable during construction)
 * ✅ Method chaining for fluent API
 * ✅ Clear mandatory vs optional fields
 * ✅ Validation in build() method
 * ✅ No combinatorial explosion
 * ✅ Thread-safe
 *
 * Note: In TypeScript, we use a namespace to simulate static nested classes
 * (like Java's static inner classes). This creates the API: User.Builder
 */
class User {
  private readonly userId: number;
  private readonly username: string;
  private readonly phoneNumber: string;
  private readonly age: number;

  // Constructor - called by Builder to create immutable User
  // Takes a Builder and copies all values from it
  constructor(builder: User.Builder) {
    this.userId = builder['userId'];
    this.username = builder['username'];
    this.phoneNumber = builder['phoneNumber'];
    this.age = builder['age'];
  }
}

/**
 * Namespace to hold the nested Builder class
 * This allows us to access it as User.Builder
 */
namespace User {
  /**
   * Inner Static Builder Class 🏗️
   *
   * Why static/nested?
   * - Encapsulation: Builder only exists to construct User
   * - Clear API: User.Builder (✅) vs separate Builder class (❌)
   * - Standard pattern: This is how it's done in Java, C#, etc.
   * - Access control: Can access User's private constructor
   *
   * Why NOT instance builder?
   * - user.Builder would require a User instance first (chicken-egg problem!)
   * - User.Builder doesn't need an instance, just like User.name is static
   */
  export class Builder {
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
      this.phoneNumber = ''; // Default for optional
      this.age = 0; // Default for optional
    }

    /**
     * Setter for phoneNumber (optional field)
     * Returns 'this' (the Builder) to enable method chaining! ⛓️
     *
     * Note: No validation here - only in build()
     * Why? Allows partial construction and cross-field validation
     */
    public setPhoneNumber(phoneNumber: string): Builder {
      this.phoneNumber = phoneNumber;
      return this; // Return this Builder for chaining!
    }

    /**
     * Setter for age (optional field)
     * Returns 'this' (the Builder) to enable method chaining! ⛓️
     *
     * Note: No validation here - only in build()
     * Why? Allows partial construction and cross-field validation
     */
    public setAge(age: number): Builder {
      this.age = age;
      return this; // Return this Builder for chaining!
    }

    /**
     * build() - The final step! 🎯
     *
     * Why validate here instead of in setters?
     * 1. Cross-field validation: Can check relationships between fields
     *    Example: if (age < 18 && phoneNumber) throw error
     * 2. Partial construction: User can set values incrementally
     * 3. Fluent API: Don't break method chaining with early errors
     * 4. Centralized logic: All validation in one place
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

      // Cross-field validation example:
      // if (this.age < 18 && this.phoneNumber) {
      //   throw new Error('Users under 18 cannot have phone numbers');
      // }

      // Create and return the immutable User!
      return new User(this);
    }
  }
}

export { User };
