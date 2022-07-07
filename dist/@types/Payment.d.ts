import { AlgaNews } from "./AlgaNews";
export declare namespace Payment {
    type Input = AlgaNews.components['schemas']['PaymentInput'];
    type Detailed = AlgaNews.components['schemas']['PaymentDetailed'];
    type Summary = AlgaNews.components['schemas']['PaymentSummary'];
    type Preview = AlgaNews.components['schemas']['PaymentPreview'];
    type PreviewInput = AlgaNews.components['schemas']['PaymentPreviewInput'];
    type Paginated = AlgaNews.components['schemas']['PaymentsPaginated'];
    type PostWithEarnings = AlgaNews.components['schemas']['PostWithEarnings'];
    type Query = {
        payeeId?: number;
        payeeEmail?: number;
        scheduledToMonth?: string;
        page?: number;
        size?: number;
        sort: [keyof Summary, 'asc' | 'desc'];
    };
}
