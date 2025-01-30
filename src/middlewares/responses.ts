
export default function resp(errorCode: number, msg: string, data: any): any {
    return {
        errorCode,
        msg,
        data
    }
}