module.exports = {
	root: true,
	extends: ["custom"],
	env: {
		node: true,
		jest: true,
	},
	rules: {
		"no-useless-constructor": "off",
		"no-unused-vars": "off",
	},
}
