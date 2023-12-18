import { ConfigModuleOptions } from '@nestjs/config';
import { envValidate } from 'src/common/env.validation';
import { IsNumber } from 'class-validator';

class EnvironmentVariables {
  @IsNumber()
  PORT: number;
}

export const EnvConfigOptions: ConfigModuleOptions = {
  isGlobal: true,
  validate: envValidate(EnvironmentVariables),
};
