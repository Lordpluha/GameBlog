import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EnvConfigOptions } from './configs/env.config';

@Module({
  imports: [ConfigModule.forRoot(EnvConfigOptions)],
  controllers: [],
  providers: [],
})
export class AppModule {}
