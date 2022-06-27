declare function generateQueryString(params: {
    [key: string]: string | number | boolean | string[] | undefined;
}): string;
export default generateQueryString;
