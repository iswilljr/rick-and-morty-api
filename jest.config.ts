import type { Config } from "jest";

const config: Config = {
  moduleFileExtensions: ["js", "json", "ts"],
  rootDir: "src",
  testRegex: ".*\\.spec\\.ts$",
  transform: {
    "^.+\\.(t|j)s$": "ts-jest",
  },
  collectCoverageFrom: ["**/*.(t|j)s", "!**/*.d.ts"],
  coveragePathIgnorePatterns: ["<rootDir>/main.ts"],
  coverageDirectory: "../coverage",
  testEnvironment: "node",
};

export default config;
