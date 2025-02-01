
export default function resp(errorCode: number, msg: string, data: any, activity?: any): any {
    return {
        errorCode,
        msg,
        data,
        activity
    }
}