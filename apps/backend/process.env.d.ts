/* eslint-disable unicorn/prevent-abbreviations */

declare global {
	namespace NodeJS {
		interface ProcessEnv {
			MONGO_USER?: string
			MONGO_PASSWORD?: string
			MONGO_HOST?: string
			MONGO_PORT?: string
			MONGO_NAME?: string
			DOCS_TITLE?: string
			DOCS_DESCRIPTION?: string
			API_VERSION?: string
			API_DOCS_ROUTE?: string
		}
	}
}

export {}
