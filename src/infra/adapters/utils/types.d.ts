/* eslint-disable @typescript-eslint/no-explicit-any */
type IAxiosAdapter = {
    url: string;
    method: "get" | "post" | "put" | "delete" | "patch";
    data?: any;
    query?: {
        [key: string]: any;
    };
    errorTitle: string;
};
