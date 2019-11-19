class MyOwnError extends Error{
    constructor(code, ...params){
        super(...params);
        this.code = code;
        if(Error.captureStackTrace){
            Error.captureStackTrace(this, MyOwnError);
        }
    }
}

try{
    throw new MyOwnError(101, "Custom message");
}
catch(caughtError){
    console.log(caughtError.message);
    console.log(caughtError.name);
    console.log(caughtError.code);
    // console.log(caughtError);
}