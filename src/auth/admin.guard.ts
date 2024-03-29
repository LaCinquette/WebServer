import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Error as STError } from "supertokens-node";

import { verifySession } from 'supertokens-node/recipe/session/framework/express';

@Injectable()
export class AdminGuard implements CanActivate {
    async canActivate(context: ExecutionContext): Promise<boolean> {
        const ctx = context.switchToHttp();

        let err = undefined;
        const req = ctx.getRequest();
        const resp = ctx.getResponse();
        // You can create an optional version of this by passing {sessionRequired: false} to verifySession

        await verifySession()(
            req,
            resp,
            (res) => {
                err = res;
            },
        );

        if (!err) {
            if (req.session.getAccessTokenPayload()["role"] !== 'admin'){
                resp.redirect('/client/auth');
            }
        }

        if (resp.headersSent) {
            throw new STError({
                message: "RESPONSE_SENT",
                type: "RESPONSE_SENT",
            });
        }


        if (err) {
            throw err;
        }

        return true;
    }
}