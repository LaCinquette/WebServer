/* eslint-disable @typescript-eslint/no-unused-vars */
import { Get, Controller, Render, UseGuards } from '@nestjs/common';
import { ApiExcludeController } from '@nestjs/swagger';
import { AuthGuard } from './auth/auth.guard';
import { SessionContainer } from "supertokens-node/recipe/session";
import { Session } from './auth/session.decorator';
import { OptionalAuthGuard } from './auth/optional-auth.guard';

@ApiExcludeController()
@Controller()
export class AppController {
  @Get()
  @UseGuards(OptionalAuthGuard)
  @Render('index')
  root(@Session() session: SessionContainer) {
    if (session !== undefined) {
      const role = session.getAccessTokenPayload()["role"]
      return { role: role }
    } else {
      return { role: 'guest' };
    }

    // const role = session.getAccessTokenPayload()["role"]
    // console.log(role)
    // return { role: role }
  }

  @Get('test')
  @UseGuards(AuthGuard)
  async getTest(@Session() session: SessionContainer): Promise<string> {
    // TODO: magic    
    return "magic";  
  }
}
