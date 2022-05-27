import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';
import { Response, Request } from 'express';
import { NoClientsFoundException } from './noclientsfound.exception';


@Catch(NoClientsFoundException)
export class NoClientsFoundFilter implements ExceptionFilter {
  catch(exception: NoClientsFoundException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();

    response
      .status(status)
      .json({
        length: 0,
        clientName: exception.message
      });
  }
}
