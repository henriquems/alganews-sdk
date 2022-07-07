import { AlgaNews } from "./AlgaNews";
export declare namespace CashFlow {
    type CategoryDetailed = AlgaNews.components['schemas']['CashFlowCategoryDetailed'];
    type CategorySummary = AlgaNews.components['schemas']['CashFlowCategorySummary'];
    type CategoryIdInput = AlgaNews.components['schemas']['CashFlowCategoryIdInput'];
    type CategoryMinimal = AlgaNews.components['schemas']['CashFlowCategoryMinimal'];
    type CategoryInput = AlgaNews.components['schemas']['CashFlowCategoryInput'];
    type EntryType = AlgaNews.components['schemas']['CashFlowEntryType'];
    type EntrySummary = AlgaNews.components['schemas']['CashFlowEntrySummary'];
    type EntryDetailed = AlgaNews.components['schemas']['CashFlowEntryDetailed'];
    type EntryInput = AlgaNews.components['schemas']['CashFlowEntryInput'];
    type Query = {
        type: 'REVENUE' | 'EXPENSE';
        yearMonth: string;
        sort: [keyof EntrySummary, 'asc' | 'desc'];
    };
}
