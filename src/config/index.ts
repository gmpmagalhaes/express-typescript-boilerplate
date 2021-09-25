import { NodeEnv } from "../enums";
import * as dotenv from 'dotenv';

if (process.env.NODE_ENV !== NodeEnv.PROD) {
    dotenv.config();
}

interface Config {
    port: number;
}

const config: Config = {
    port: Number(process.env.PORT) || 8080,
}

export default config;