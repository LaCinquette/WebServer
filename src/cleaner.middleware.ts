
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

function clean(obj) {
  return Object.fromEntries(
    Object.entries(obj)
      .filter(([_, v]) => v != '')
      .map(([k, v]) => [k, v === Object(v) ? clean(v) : v])
  );
}

@Injectable()
export class CleanerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    req.body = clean(req.body);
    
    next();
  }
}
