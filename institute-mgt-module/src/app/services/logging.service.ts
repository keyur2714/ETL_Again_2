export class LoggingService{
    constructor(){
        this.logInfo("Logging Service Object Created.");
    }
    logInfo(msg : string) : void{
        console.log("INFO : "+msg);
    }
    logError(msg : string) : void{
        console.log("ERROR : "+msg);
    }
    logDebug(msg : string) : void{
        console.log("Debug : "+msg);
    }
}