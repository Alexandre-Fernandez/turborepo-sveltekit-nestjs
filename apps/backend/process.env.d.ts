/* eslint-disable unicorn/prevent-abbreviations */

declare global {
	namespace NodeJS {
		interface ProcessEnv {
			MONGO_USER?: string
			MONGO_PASSWORD?: string
			MONGO_HOST?: string
			MONGO_PORT?: string
			MONGO_NAME?: string
		}
	}
}

export {}
