import Service from "../Service";
declare class UserService extends Service {
    static getAllEditors(): Promise<{
        id: number;
        name: string;
        avatarUrls: {
            default: string;
            small: string;
            medium: string;
            large: string;
        };
        createdAt: string;
    }[]>;
    static getExistingEditor(editorId: number): Promise<{
        id: number;
        name: string;
        avatarUrls: {
            default: string;
            small: string;
            medium: string;
            large: string;
        };
        bio: string;
        createdAt: string;
        location: {
            country: string;
            state: string;
            city: string;
        };
        skills: {
            name: string;
            percentage: number;
        }[] | null;
    }>;
    static getDetailedUser(userId: number): Promise<{
        id: number;
        name: string;
        email: string;
        avatarUrls: {
            default: string;
            small: string;
            medium: string;
            large: string;
        };
        bio: string;
        role: "EDITOR" | "ASSISTANT" | "MANAGER";
        birthdate: string;
        phone: string;
        taxpayerId: string;
        pricePerWord: number;
        active: boolean;
        createdAt: string;
        bankAccount: {
            bankCode: string;
            agency: string;
            number: string;
            digit: string;
            type: "SAVING" | "CHECKING";
        };
        location: {
            country: string;
            state: string;
            city: string;
        };
        skills: {
            name: string;
            percentage: number;
        }[] | null;
        metrics: {
            weeklyEarnings: number;
            monthlyEarnings: number;
            lifetimeEarnings: number;
            weeklyWords: number;
            monthlyWords: number;
            lifetimeWords: number;
        };
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
        canBeActivated: boolean;
        canBeDeactivated: boolean;
        canSensitiveDataBeUpdated: boolean;
    }>;
}
export default UserService;
