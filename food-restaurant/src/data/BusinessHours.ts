/**
 * Data Class #1: BusinessHours
 *
 * Every restaurant has opening and closing times, right?
 *
 * Why Date?
 * JavaScript's Date is used for representing dates and times.
 * It captures the business hours clearly!
 *
 * Real-World Usage:
 * This lets us check things like:
 * - "Is the restaurant open right now?"
 * - "When does it close?"
 * - "What are their serving hours?"
 *
 * Simple but essential!
 */
export class BusinessHours {
  private readonly openingTime: Date;
  private readonly closingTime: Date;

  constructor(openingTime: Date, closingTime: Date) {
    this.openingTime = openingTime;
    this.closingTime = closingTime;
  }

  getOpeningTime(): Date {
    return this.openingTime;
  }

  getClosingTime(): Date {
    return this.closingTime;
  }
}
