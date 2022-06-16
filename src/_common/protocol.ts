export interface ResponseProp {
    status: number,
    result: {
        success?: any,
        error? : string
    }
}