
export class GeneralResponce{
    constructor(success,data,statusCode = 200,message){
        this.success = success,
        this.data = data,
        this.statusCode=statusCode,
        this.message=message
    }
}