module.exports = {
	parser: "@typescript-eslint/parser",
	extends: [
		"airbnb-base",
		"plugin:import/recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:github/recommended",
		"plugin:sonarjs/recommended",
		"plugin:unicorn/recommended",
		"prettier",
	],
	plugins: ["@typescript-eslint", "import", "github", "sonarjs", "unicorn"],
	ignorePatterns: ["eslintrc.*", ".eslintrc.*"],
	parserOptions: {
		sourceType: "module",
		ecmaVersion: 2020,
		project: ["packages/*/tsconfig.json", "apps/*/tsconfig.json"],
	},
	settings: {
		"import/parsers": {
			"@typescript-eslint/parser": [".ts", ".tsx"],
		},
		"import/resolver": {
			typescript: {
				alwaysTryTypes: true,
				project: ["packages/*/tsconfig.json", "apps/*/tsconfig.json"],
			},
		},
	},
	rules: {
		"import/no-unresolved": "error",
		"import/no-namespace": "off",
		"import/extensions": "off",
		"import/prefer-default-export": "off",
		"@typescript-eslint/interface-name-prefix": "off",
		"@typescript-eslint/explicit-function-return-type": "off",
		"@typescript-eslint/explicit-module-boundary-types": "off",
		"@typescript-eslint/no-explicit-any": "off",
		"unicorn/prefer-top-level-await": "off",
		"filenames/match-regex": "off",
		"i18n-text/no-en": "off",
		"class-methods-use-this": "off",
		"no-use-before-define": "off",
		"eslint-comments/no-use": "warn",
		"no-console": "warn",
	},
}
