import HttpStatus from "../enums/http-status";

class ApplicationError extends Error {
    message: string;
    status: HttpStatus;
    constructor(message: string, status?: HttpStatus) {
        super(message);
        this.status = status || HttpStatus.INTERNAL_SERVER_ERROR;
        this.message = message;
    }
}

export default ApplicationError