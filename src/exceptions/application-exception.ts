export default class ApplicationException extends Error {
    status: number;
    title: string;
    constructor(title: string, message: string, httpStatus = 500) {
        super(message);
        this.name = super.constructor.name;
        this.title = title;
        this.status = httpStatus;
    }
}