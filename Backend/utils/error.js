export class AppError extends Error{
    constructor(statusCode,message){
        super(message)

        Object.setPrototypeOf(this,new.target.prototype);

        this.statusCode =statusCode;
        this.message = message;

        if(Error.captureStackTrace){
            Error.captureStackTrace(this,this.constructor);
        }else{
            this.stack = new Error(message).stack;
        }
    }

    format(){
        const errorResponse = {
            statusCode : this.statusCode,
            message : this.message,
            success : false
        }

        if(this.errors && this.errors.length >0 ){
            errorResponse.error = this.errors;
        }

        return errorResponse;
    }
}

export class NotFoundError extends AppError{
    constructor(message = "Resource Not Found Error"){
        super(404,message);
        this.name = "Not Found Error";
    }
}

// 400 is for Bad Request || here we using for internal validation before getting into controller!
export class InternalValidationError extends AppError{
    constructor(errorsOrMessage = "InternalValidationError"){
        if(Array.isArray(errorsOrMessage)){
            this.errors = errorsOrMessage
        }
        super(400,"Internal Validation Error Occured");
        this.name = "InternalValidationError";
    }
}


export class UnauthorizedError extends AppError{
    constructor(message = "Unauthorized"){
        super(401,message);
        this.name = "UnauthorizedError";
    }
}

export class ForbiddenError extends AppError{
    constructor(message="Forbidden"){
        super(403,message);
        this.name = "ForbiddenError"
    }
}

export class UnknownError extends AppError{
    constructor(message="Unknown Error",errorStack = " "){
        super(500,message);
        this.errorStack = errorStack;
        this.name = "UnknownError" 
    }
}

export class DBOperationError extends AppError{
    constructor(message = "DataBase Operation failed"){
        super(500,message);
        this.name = "DBOperationError";
    }
}

export function isAppError(error){
    return (
        error instanceof AppError ||
        error instanceof NotFoundError || 
        error instanceof InternalValidationError ||
        error instanceof UnauthorizedError ||
        error instanceof ForbiddenError ||
        error instanceof DBOperationError ||
        error instanceof UnknownError
    )
}