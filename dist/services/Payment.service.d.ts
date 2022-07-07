import { Payment } from '../@types';
import Service from "../Service";
declare class PayrollService extends Service {
    static getAllPayments(query: Payment.Query): Promise<{
        page: number;
        size: number;
        totalPages: number;
        totalElements: number;
    } & {
        content?: {
            id: number;
            grandTotalAmount: number;
            accountingPeriod: {
                startsOn: string;
                endsOn: string;
            };
            payee: {
                id: number;
                name: string;
                avatarUrls: {
                    default: string;
                    small: string;
                    medium: string;
                    large: string;
                };
            };
            approvedAt: string;
            scheduledTo: string;
            canBeApproved: boolean;
            canBeDeleted: boolean;
        }[] | undefined;
    }>;
    static getExistingPayment(paymentId: number): Promise<{
        id: number;
        accountingPeriod: {
            startsOn: string;
            endsOn: string;
        };
        payee: {
            id: number;
            name: string;
            avatarUrls: {
                default: string;
                small: string;
                medium: string;
                large: string;
            };
        };
        earnings: {
            words: number;
            totalAmount: number;
        };
        bonuses: {
            title: string;
            amount: number;
        }[];
        grandTotalAmount: number;
        bankAccount: {
            bankCode: string;
            agency: string;
            number: string;
            digit: string;
            type: "SAVING" | "CHECKING";
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
        approvedBy: {
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
        scheduledTo: string;
        approvedAt: string;
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
        canBeApproved: boolean;
        canBeDeleted: boolean;
    }>;
    static insertNewPayment(payment: Payment.Input): Promise<{
        id: number;
        accountingPeriod: {
            startsOn: string;
            endsOn: string;
        };
        payee: {
            id: number;
            name: string;
            avatarUrls: {
                default: string;
                small: string;
                medium: string;
                large: string;
            };
        };
        earnings: {
            words: number;
            totalAmount: number;
        };
        bonuses: {
            title: string;
            amount: number;
        }[];
        grandTotalAmount: number;
        bankAccount: {
            bankCode: string;
            agency: string;
            number: string;
            digit: string;
            type: "SAVING" | "CHECKING";
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
        approvedBy: {
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
        scheduledTo: string;
        approvedAt: string;
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
        canBeApproved: boolean;
        canBeDeleted: boolean;
    }>;
    static getPaymentPreview(paymentInfo: Payment.PreviewInput): Promise<{
        accountingPeriod: {
            startsOn: string;
            endsOn: string;
        };
        payee: {
            id: number;
            name: string;
            avatarUrls: {
                default: string;
                small: string;
                medium: string;
                large: string;
            };
        };
        earnings: {
            words: number;
            totalAmount: number;
        };
        bonuses: {
            title: string;
            amount: number;
        }[];
        grandTotalAmount: number;
        bankAccount: {
            bankCode: string;
            agency: string;
            number: string;
            digit: string;
            type: "SAVING" | "CHECKING";
        };
    }>;
    static approvePayment(paymentId: number): Promise<{}>;
    static getExistingPaymentPosts(paymentId: number): Promise<{
        id: number;
        title: string;
        imageUrls: {
            default: string;
            small: string;
            medium: string;
            large: string;
        };
        createdAt: string;
        earnings: {
            pricePerWord: number;
            words: number;
            totalAmount: number;
        };
        published: boolean;
    }[]>;
    static removeExistingPayment(paymentId: number): Promise<{}>;
    static approvePaymentsBatch(paymentIds: number[]): Promise<{}>;
}
export default PayrollService;
