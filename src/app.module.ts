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

@Module({
  imports: [ClientModule, ProjectModule, LogModule, BlogModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
  ],
})
export class AppModule {}
