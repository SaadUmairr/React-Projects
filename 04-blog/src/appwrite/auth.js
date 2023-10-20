import { Account, Client, ID } from "appwrite";
import config from "../config/config";

export class AuthService {
    client = new Client();
    account;
    constructor() {
        this.client
            .setEndpoint(config.appwriteEndpoint)
            .setProject(config.appwriteProjectID);
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
            if (userAccount) return this.login({ email, password });
            else return userAccount;
        } catch (error) {
            console.log("Appwrite : createAccount error :: ", error);
        }
    }

    async login({ email, password }) {
        try {
            await this.account.createEmailSession(email, password);
        } catch (error) {
            console.log("Appwrite : login error :: ", error);
        }
    }

    async getUserLoginStatus() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite : getUserLoginStatus error :: ", error);
        }
        return null;
    }

    async logout() {
        try {
            return await this.account.deleteSession("current");
        } catch (error) {
            console.log("Appwrite : logout error :: ", error);
        }
    }

    async logoutEverywhere() {
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite : logoutEverywhere error :: ", error);
        }
    }
}
const authService = new AuthService();
export default authService;
