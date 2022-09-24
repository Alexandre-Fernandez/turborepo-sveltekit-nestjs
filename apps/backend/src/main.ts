import {
	FastifyAdapter,
	NestFastifyApplication,
} from "@nestjs/platform-fastify"
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger"
import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"

async function bootstrap() {
	const app = await NestFactory.create<NestFastifyApplication>(
		AppModule,
		new FastifyAdapter()
	)

	const config = new DocumentBuilder()
		.setTitle(process.env.DOCS_TITLE || "Swagger")
		.setDescription(process.env.DOCS_DESCRIPTION || "API documentation")
		.setVersion(process.env.API_VERSION || "1.0")
		.build()
	const document = SwaggerModule.createDocument(app, config, {
		operationIdFactory(_, methodKey) {
			return methodKey
		},
	})
	SwaggerModule.setup(process.env.API_DOCS_ROUTE || "docs", app, document)

	await app.listen(3000)
}
bootstrap()
