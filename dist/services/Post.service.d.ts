import { Post } from "../@types";
import Service from "../Service";
declare class PostService extends Service {
    static getAllPosts(search: Post.Query): Promise<{
        page: number;
        size: number;
        totalPages: number;
        totalElements: number;
    } & {
        content?: {
            id: number;
            slug: string;
            title: string;
            imageUrls: {
                default: string;
                small: string;
                medium: string;
                large: string;
            };
            editor: {
                id: number;
                name: string;
                avatarUrls: {
                    default: string;
                    small: string;
                    medium: string;
                    large: string;
                };
                createdAt: string;
            };
            createdAt: string;
            updatedAt: string;
            published: boolean;
            tags: string[];
            canBePublished: boolean;
            canBeUnpublished: boolean;
            canBeDeleted: boolean;
            canBeEdited: boolean;
        }[] | undefined;
    }>;
    static getExistingPost(id: number): Promise<{
        id: number;
        editor: {
            id: number;
            name: string;
            avatarUrls: {
                default: string;
                small: string;
                medium: string;
                large: string;
            };
            createdAt: string;
        };
        slug: string;
        title: string;
        imageUrls: {
            default: string;
            small: string;
            medium: string;
            large: string;
        };
        body: string;
        tags: string[];
        createdAt: string;
        earnings?: {
            pricePerWord: number;
            words: number;
            totalAmount: number;
        } | undefined;
        published: boolean;
        updatedAt: string;
        updatedBy: {
            id: number;
            name: string;
            avatarUrls: {
                default: string;
                small: string;
                medium: string;
                large: string;
            };
        };
        canBePublished: boolean;
        canBeUnpublished: boolean;
        canBeDeleted: boolean;
        canBeEdited: boolean;
    }>;
    static insertNewPost(post: Post.Input): Promise<{
        id: number;
        editor: {
            id: number;
            name: string;
            avatarUrls: {
                default: string;
                small: string;
                medium: string;
                large: string;
            };
            createdAt: string;
        };
        slug: string;
        title: string;
        imageUrls: {
            default: string;
            small: string;
            medium: string;
            large: string;
        };
        body: string;
        tags: string[];
        createdAt: string;
        earnings?: {
            pricePerWord: number;
            words: number;
            totalAmount: number;
        } | undefined;
        published: boolean;
        updatedAt: string;
        updatedBy: {
            id: number;
            name: string;
            avatarUrls: {
                default: string;
                small: string;
                medium: string;
                large: string;
            };
        };
        canBePublished: boolean;
        canBeUnpublished: boolean;
        canBeDeleted: boolean;
        canBeEdited: boolean;
    }>;
    static publishExistingPost(postId: number): Promise<{}>;
    static updateExistingPost(postId: number, post: Post.Input): Promise<{
        id: number;
        editor: {
            id: number;
            name: string;
            avatarUrls: {
                default: string;
                small: string;
                medium: string;
                large: string;
            };
            createdAt: string;
        };
        slug: string;
        title: string;
        imageUrls: {
            default: string;
            small: string;
            medium: string;
            large: string;
        };
        body: string;
        tags: string[];
        createdAt: string;
        earnings?: {
            pricePerWord: number;
            words: number;
            totalAmount: number;
        } | undefined;
        published: boolean;
        updatedAt: string;
        updatedBy: {
            id: number;
            name: string;
            avatarUrls: {
                default: string;
                small: string;
                medium: string;
                large: string;
            };
        };
        canBePublished: boolean;
        canBeUnpublished: boolean;
        canBeDeleted: boolean;
        canBeEdited: boolean;
    }>;
    static deleteExistingPost(postId: number): Promise<{}>;
    static deactivateExistingPost(postId: number): Promise<{}>;
}
export default PostService;
