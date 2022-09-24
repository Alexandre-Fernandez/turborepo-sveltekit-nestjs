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
				process.env.MONGO_USER,
				process.env.MONGO_PASSWORD,
				process.env.MONGO_HOST,
				process.env.MONGO_PORT,
				process.env.MONGO_NAME
			)
		),
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}

function createDatabaseUri(
	type?: string,
	user?: string,
	password?: string,
	host?: string,
	port?: string,
	name?: string
) {
	const address = port ? `${host}:${port}` : host
	let credentials = ""
	if (user) credentials = password ? `${user}:${password}@` : `${user}@`
	return `${type}://${credentials}${address}/${name}`
}
