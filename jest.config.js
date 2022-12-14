const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './' // path to Next.js app
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
  moduleDirectories: ['node_modules', '<rootDir>/'],
  modulePathIgnorePatterns: ['<rootDir>/cypress/'],
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: [
    '<rootDir>/jest/support/setupTest.ts'
  ],
  moduleNameMapper: {
    '^@modules/(.*)': '<rootDir>/modules/$1',
    '^@pages/(.*)': '<rootDir>/pages/$1',
    '^@public/(.*)': '<rootDir>/public/$1',
    '^@markdown/(.*)': '<rootDir>/libs/markdown/$1',
    '^@mdx-elements/(.*)': '<rootDir>/libs/mdx-elements/$1',
    '^@ui/(.*)': '<rootDir>/libs/ui/$1',
  }
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)