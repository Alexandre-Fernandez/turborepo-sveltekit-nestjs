import { Module } from "@nestjs/common"
import { ConfigModule } from "@nestjs/config"
import { MongooseModule } from "@nestjs/mongoose"
import { AppController } from "./app.controller"
import { AppService } from "./app.service"

@Module({
	imports: [
		ConfigModule.forRoot({
			envFilePath: [".env.dev", ".env.prod"],
		}),
		MongooseModule.forRoot(
			createDatabaseUri(
				"mongodb",
				process.env.MONGO_HOST as string,
				process.env.MONGO_NAME as string,
				process.env.MONGO_PORT,
				process.env.MONGO_USER,
				process.env.MONGO_PASSWORD
			)
		),
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}

function createDatabaseUri(
	type: string,
	host: string,
	name: string,
	port?: string,
	user?: string,
	password?: string
) {
	const address = port ? `${host}:${port}` : host
	let credentials = ""
	if (user) credentials = password ? `${user}:${password}@` : `${user}@`
	return `${type}://${credentials}${address}/${name}`
}
