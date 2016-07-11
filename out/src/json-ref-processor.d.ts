export interface Fetcher {
    (url: string, base?: string): Promise<string>;
}
export declare class JsonReferenceProcessor {
    constructor(fetch?: Fetcher);
    fetchRef(url: string, base?: string): Promise<any>;
    expandRef(url: string): Promise<any>;
    _expandRefs(url: string, base?: string): any;
    _expandDynamic(obj: any, filename: string, base?: string, keypath?: string[]): any;
    _findRefs(x: any): string[];
    _fetchContent(urlArg: string, base?: string): Promise<any>;
    _adjustUrl(url: string, base?: string): string;
    private _adjusterCache;
    _urlAdjuster(base: string): (x: string) => string;
    _fetchRefs(x: any, base: string): Promise<any[]>;
    _fetchRefsAll(files: string[], x: any[]): Promise<any[]>;
    private _fetch;
    private _cache;
    private _contents;
}