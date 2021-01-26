import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
    roots: [ "./src", "./tests" ],
    transform: {
        "^.+\\.ts$": "ts-jest"
    },
    testRegex: "tests/.*\\.test\\.ts$"
};

export default config;