import { User } from "../models/User.ts";

export class UserBuilder {
  private user: User;

  constructor() {
    this.user = new User();
  }

  public reset(): void {
    this.user = new User();
  }

  public setFirstName(firstName: string): UserBuilder {
    this.user.firstName = firstName;
    return this;
  }

  public setLastName(lastName: string): UserBuilder {
    this.user.lastName = lastName;
    return this;
  }

  public setEmail(email: string): UserBuilder {
    this.user.email = email;
    return this;
  }

  public setPassword(password: string): UserBuilder {
    this.user.password = password;
    return this;
  }

  public setAddress(address: string): UserBuilder {
    this.user.address = address;
    return this;
  }

  public setPhoneNumber(phoneNumber: string): UserBuilder {
    this.user.phoneNumber = phoneNumber;
    return this;
  }

  public build(): User {
    return this.user;
  }
}
