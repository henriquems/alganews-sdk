import { AxiosResponse } from "axios";
declare class Service {
    protected static Http: import("axios").AxiosInstance;
    protected static getData: typeof getData;
}
declare function getData<T>(res: AxiosResponse<T>): T;
export default Service;
