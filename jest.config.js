function srcPath(name) {
	return `<rootDir>/src/${name}$1`
}

function sharedPath(name) {
	return `<rootDir>/src/shared/${name}$1`
}

module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	snapshotSerializers: ['enzyme-to-json/serializer'],
	setupFilesAfterEnv: ['<rootDir>/src/config/enzyme.ts'],
	roots: ['<rootDir>/src'],
	transform: {
		'^.+\\.tsx?$': 'ts-jest',
	},
	moduleNameMapper: {
		'^App(.*)$': srcPath('App'),
		'^pages(.*)$': srcPath('pages'),
		'^components(.*)$': sharedPath('components'),
		'^scss(.*)$': sharedPath('scss'),
		'^utils(.*)$': sharedPath('utils'),
	},
	testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
}
