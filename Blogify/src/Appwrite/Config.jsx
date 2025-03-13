import Confige from "../Conf/Confige";
import { Client, Databases, Storage, ID, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;
  storage;

  constructor() {
    this.client
      .setEndpoint(Confige.appwriteURL)
      .setProject(Confige.appwriteProjectId);
    this.databases = new Databases(this.client);
    this.storage = new Storage(this.client);
  }
  async creatPost(slug, { title, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        Confige.appwriteCollectionId,
        Confige.appwriteCollectionId,
        slug,
        { title, content, featuredImage, status, userId }
      );
    } catch (error) {
      console.log("Database Service :: createPost:: Error", error);
    }
  }

  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        Confige.appwriteDatabaseId,
        Confige.appwriteCollectionId,
        slug,
        { title, content, featuredImage, status }
      );
    } catch (error) {
      console.log("Database Service :: updatePost:: Error", error);
    }
  }

  async deletePost(slug) {
    try {
      return await this.databases.deleteDocument(
        Confige.appwriteDatabaseId,
        Confige.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("Database Service :: deletePost :: Error", error);
    }
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        Confige.appwriteDatabaseId,
        Confige.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("Database Service :: getPost:: Error", error);
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      const result = await this.databases.listDocuments(
        Confige.appwriteDatabaseId,
        Confige.appwriteCollectionId,
        queries
      );
      console.log(result);
      return result;
    } catch (error) {
      console.log("Database Service :: getPosts :: Error", error);
      return null;
    }
  }

  // file uploade

  async uploadFile({ file }) {
    try {
      return await this.storage.createFile(
        Confige.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("Database Service :: createFile :: Error", error);
    }
  }

  async deleteFile(fileId) {
    return await this.storage.deleteFile(Confige.appwriteBucketId, fileId);
  }

  async getFilePriveiw({ fileId }) {
    return this.storage.getFilePreview(Confige.appwriteBucketId, fileId);
  }
}
const service = new Service();
export default service;
