import config from "../config/config";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
    client = new Client();
    database;
    bucket;

    constructor() {
        this.client
            .setEndpoint(config.appwriteEndpoint)
            .setProject(config.appwriteProjectID);
        this.database = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({ title, slug, content, featuredImage, status, userID }) {
        try {
            await this.database.createDocument(
                config.appwriteDatabaseID,
                config.appwriteCollectionID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userID,
                }
            );
        } catch (error) {
            console.log("Appwrite : createPost error :: ", error);
        }
    }

    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
            return await this.database.updateDocument(
                config.appwriteDatabaseID,
                config.appwriteCollectionID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    featuredImage,
                    status,
                }
            );
        } catch (error) {
            console.log("Appwrite : updatePost error :: ", error);
        }
    }

    async deletePost(slug) {
        try {
            await this.database.deleteDocument(
                config.appwriteDatabaseID,
                config.appwriteCollectionID,
                slug
            );
            return true;
        } catch (error) {
            console.log("Appwrite : deletePost error :: ", error);
            return false;
        }
    }

    async getPost(slug) {
        try {
            return await this.database.getDocument(
                config.appwriteDatabaseID,
                config.appwriteCollectionID,
                slug
            );
        } catch (error) {
            console.log("Appwrite : getPost error :: ", error);
        }
    }

    async getAllPost(queries = [Query.equal("status", "active")]) {
        try {
            await this.database.listDocuments(
                config.appwriteDatabaseID,
                config.appwriteCollectionID,
                queries
            );
            return true;
        } catch (error) {
            console.log("Appwrite : getAllPost error :: ", error);
            return false;
        }
    }

    async uploadImage(file) {
        try {
            return await this.bucket.createFile(
                config.appwriteBucketID,
                ID.unique(),
                file
            );
        } catch (error) {
            console.log("Appwrite : uploadImage error :: ", error);
            return false;
        }
    }

    async deleteImage(fileID) {
        try {
            return await this.bucket.deleteFile(
                config.appwriteBucketID,
                fileID
            );
        } catch (error) {
            console.log("Appwrite : deleteImage error :: ", error);
            return false;
        }
    }

    imagePreview(fileID) {
        try {
            return this.bucket.getFilePreview(
                config.appwriteBucketID,
                fileID,
                0,
                0,
                "center",
                "75"
            );
        } catch (error) {
            console.log("Appwrite : imagePreview error :: ", error);
            return false;
        }
    }

    downloadFile(fileID) {
        try {
            return this.bucket.getFileDownload(config.appwriteBucketID, fileID);
        } catch (error) {
            console.log("Appwrite : downloadFile error :: ", error);
            return false;
        }
    }
}

const service = new Service();
export default service;
