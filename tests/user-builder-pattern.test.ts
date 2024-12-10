import { User } from "../src/models/User.ts";
import { UserBuilder } from "../src/builders/user-builder.ts";

const registerUser = async (
  user: User
): Promise<{ success: boolean; message: string }> => {
  if (!user.email || !user.password) {
    return { success: false, message: "Email and password are required." };
  }
  return { success: true, message: "User registered successfully." };
};

describe("User Registration API Tests", () => {
  let builder: UserBuilder;

  beforeEach(() => {
    builder = new UserBuilder();
  });

  test("should register a user with valid data", async () => {
    const user = builder
      .setFirstName("Mark")
      .setLastName("Twin")
      .setEmail("mark.twin@test.com")
      .setPassword("securePass123")
      .build();

    const response = await registerUser(user);

    expect(response.success).toBe(true);
    expect(response.message).toBe("User registered successfully.");
  });

  test("should fail to register a user without an email", async () => {
    const user = builder
      .setFirstName("Invalid")
      .setLastName("User")
      .setPassword("noEmailPass")
      .build();

    const response = await registerUser(user);

    expect(response.success).toBe(false);
    expect(response.message).toBe("Email and password are required.");
  });

  test("should fail to register a user without a password", async () => {
    const user = builder
      .setFirstName("No")
      .setLastName("Password")
      .setEmail("no.password@example.com")
      .build();

    const response = await registerUser(user);

    expect(response.success).toBe(false);
    expect(response.message).toBe("Email and password are required.");
  });
});
