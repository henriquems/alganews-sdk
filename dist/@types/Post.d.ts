import { AlgaNews } from "./AlgaNews";
export declare namespace Post {
    type Input = AlgaNews.components['schemas']['PostInput'];
    type Detailed = AlgaNews.components['schemas']['PostDetailed'];
    type Summary = AlgaNews.components['schemas']['PostSummary'];
    type Paginated = AlgaNews.components['schemas']['PostsPaginated'];
    type WithEarnings = AlgaNews.components['schemas']['PostWithEarnings'];
    type Query = {
        editorId?: number;
        page?: number;
        size?: number;
        showAll?: boolean;
        sort?: [keyof Summary, 'asc' | 'desc'];
    };
}
