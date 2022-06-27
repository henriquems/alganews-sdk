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
}
export default MetricService;
