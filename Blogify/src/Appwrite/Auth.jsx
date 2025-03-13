import Confige from "../Conf/Confige";
import { Client, Account, ID } from "appwrite";

export class authservice {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(Confige.appwriteURL)
      .setProject(Confige.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      console.log("Login :: Mathod :: Error", error);
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("getAccount :: Mathod :: Error", error);
    }
  }

  async logOut({}) {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      console.log("LogOut :: Mathod :: Error", error);
    }
  }
}

const authService = new authservice();

export default authService;
