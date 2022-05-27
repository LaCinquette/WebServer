import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor } from './logging.interceptor';
import { ClientModule } from './client/client.module';
import { ProjectModule } from './project/project.module';
import { LogController } from './log/log.controller';
import { LogModule } from './log/log.module';
import { BlogModule } from './blog/blog.module';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';
import { EventsModule } from './events/events.module';
import { EventsGateway } from './events.gateway';
import { AppGateway } from './app.gateway';
import config from 'dotenv';

@Module({
  imports: [ClientModule, ProjectModule, LogModule, BlogModule, AuthModule,
    AuthModule.forRoot({
      // These are the connection details of the app you created on supertokens.com
      connectionURI: "https://fd5d1b51da0211eca869b70598b9ead2-eu-west-1.aws.supertokens.io:3571",
      apiKey: "xN3lYwPSS8ThtKy6daLF2cEQjHUcbb",
      appInfo: {
        // Learn more about this on https://supertokens.com/docs/thirdpartyemailpassword/appinfo
        appName: "web",
        apiDomain: process.env.MY_WEBSITE_PATH,
        websiteDomain: process.env.MY_WEBSITE_PATH,
        apiBasePath: "/auth",
        websiteBasePath: "/client/auth"
      },
    }),
    AdminModule,
    EventsModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
    EventsGateway,
    AppGateway,
  ],
})
export class AppModule {}
