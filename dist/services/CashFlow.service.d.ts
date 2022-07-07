import { CashFlow } from '../@types';
import Service from '../Service';
declare class CashFlowService extends Service {
    static getAllEntries(query: CashFlow.Query): Promise<{
        id: number;
        type: "REVENUE" | "EXPENSE";
        transactedOn: string;
        amount: number;
        category: {
            id: number;
            name: string;
            type: "REVENUE" | "EXPENSE";
        };
        description: string;
        systemGenerated: boolean;
        canBeDeleted: boolean;
        canBeEdited: boolean;
    }[]>;
    static getExistingEntry(entryId: number): Promise<{
        id: number;
        type: "REVENUE" | "EXPENSE";
        transactedOn: string;
        amount: number;
        category: {
            id: number;
            name: string;
            type: "REVENUE" | "EXPENSE";
        };
        description: string;
        systemGenerated: boolean;
        createdBy: {
            id: number;
            name: string;
            avatarUrls: {
                default: string;
                small: string;
                medium: string;
                large: string;
            };
        };
        createdAt: string;
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
        canBeDeleted: boolean;
        canBeEdited: boolean;
    }>;
    static updateExistingEntry(entryId: number, entryData: CashFlow.EntryInput): Promise<{
        id: number;
        type: "REVENUE" | "EXPENSE";
        transactedOn: string;
        amount: number;
        category: {
            id: number;
            name: string;
            type: "REVENUE" | "EXPENSE";
        };
        description: string;
        systemGenerated: boolean;
        createdBy: {
            id: number;
            name: string;
            avatarUrls: {
                default: string;
                small: string;
                medium: string;
                large: string;
            };
        };
        createdAt: string;
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
        canBeDeleted: boolean;
        canBeEdited: boolean;
    }>;
    static removeExistingEntry(entryId: number): Promise<{}>;
    static insertNewEntry(entryData: CashFlow.EntryInput): Promise<{
        id: number;
        type: "REVENUE" | "EXPENSE";
        transactedOn: string;
        amount: number;
        category: {
            id: number;
            name: string;
            type: "REVENUE" | "EXPENSE";
        };
        description: string;
        systemGenerated: boolean;
        createdBy: {
            id: number;
            name: string;
            avatarUrls: {
                default: string;
                small: string;
                medium: string;
                large: string;
            };
        };
        createdAt: string;
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
        canBeDeleted: boolean;
        canBeEdited: boolean;
    }>;
    static removeEntriesBatch(entriesIds: number[]): Promise<{}>;
    static getAllCategories(query: {
        sort: [keyof CashFlow.CategorySummary, 'asc' | 'desc'];
    }): Promise<{
        id: number;
        name: string;
        type: "REVENUE" | "EXPENSE";
        totalEntries: number;
        canBeDeleted: boolean;
    }[]>;
    static insertNewCategory(categoryData: CashFlow.CategoryInput): Promise<{
        id: number;
        name: string;
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
        type: "REVENUE" | "EXPENSE";
        createdAt: string;
        createdBy: {
            id: number;
            name: string;
            avatarUrls: {
                default: string;
                small: string;
                medium: string;
                large: string;
            };
        };
        totalEntries: number;
        canBeDeleted: boolean;
    }>;
    static getExistingCategory(categoryId: number): Promise<{
        id: number;
        name: string;
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
        type: "REVENUE" | "EXPENSE";
        createdAt: string;
        createdBy: {
            id: number;
            name: string;
            avatarUrls: {
                default: string;
                small: string;
                medium: string;
                large: string;
            };
        };
        totalEntries: number;
        canBeDeleted: boolean;
    }>;
    static updateExistingCategory(categoryId: number, categoryData: CashFlow.CategoryInput): Promise<{
        id: number;
        name: string;
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
        type: "REVENUE" | "EXPENSE";
        createdAt: string;
        createdBy: {
            id: number;
            name: string;
            avatarUrls: {
                default: string;
                small: string;
                medium: string;
                large: string;
            };
        };
        totalEntries: number;
        canBeDeleted: boolean;
    }>;
    static removeExistingCategory(categoryId: number): Promise<{}>;
}
export default CashFlowService;
