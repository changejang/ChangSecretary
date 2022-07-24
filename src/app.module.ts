import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SchedulerModule } from './scheduler/scheduler.module';
import { ToDoModule } from './to-do/to-do.module';
import { NotificationModule } from './notification/notification.module';
import { ReportModule } from './report/report.module';

@Module({
  imports: [ConfigModule.forRoot(), SchedulerModule, ToDoModule, NotificationModule, ReportModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
