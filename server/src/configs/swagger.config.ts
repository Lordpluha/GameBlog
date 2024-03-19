import { DocumentBuilder } from '@nestjs/swagger'

export const SwaggerConfig = new DocumentBuilder()
	.setTitle('Game blog API')
	.setDescription('The Game blog API description')
	.setVersion('0.1')
	.build()
