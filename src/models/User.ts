export class User {
    public firstName: string = "";
    public lastName: string = "";
    public email: string = "";
    public password: string = "";
    public address?: string;
    public phoneNumber?: string;
  
    public describe(): void {
      console.log(`User Info:
        - First Name: ${this.firstName}
        - Last Name: ${this.lastName}
        - Email: ${this.email}
        - Password: ${this.password}
        - Address: ${this.address || "Not Provided"}
        - Phone Number: ${this.phoneNumber || "Not Provided"}`);
    }
}
