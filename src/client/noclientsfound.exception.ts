import { HttpException, HttpStatus } from "@nestjs/common";

export class NoClientsFoundException extends HttpException {
    constructor(name: string) {
        super(name, HttpStatus.BAD_REQUEST);
    }
}