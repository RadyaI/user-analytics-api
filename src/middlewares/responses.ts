
export default function resp(statusCode: number, msg: string, data: any, activity?: any): any {
    return {
        statusCode,
        msg,
        data,
        activity
    }
}