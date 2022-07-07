import Service from "../Service";
declare class MetricService extends Service {
    static getTop3Tags(): Promise<{
        tagName: string;
        percentage: number;
    }[]>;
    static getEditorMonthlyEarnings(): Promise<{
        yearMonth: string;
        totalAmount: number;
        totalPlatformAverageAmount: number;
    }[]>;
    static getMonthlyRevenuesExpenses(): Promise<{
        yearMonth: string;
        totalRevenues: number;
        totalExpenses: number;
    }[]>;
    static getMonthlyRevenuesExpensesChartJs(): Promise<{
        yearMonth: string;
        totalRevenues: number;
        totalExpenses: number;
    }[]>;
}
export default MetricService;
