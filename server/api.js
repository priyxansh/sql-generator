import { OpenAIApi, Configuration } from "openai";
import dotenv from "dotenv";

dotenv.config({
    path: "/home/priyansh/Code/react/sql-generator/server/.env",
});

const openaiApiKey = process.env.OPENAI_API_KEY;

if (!openaiApiKey) {
    console.error("OPENAI_API_KEY not set.");
    process.exit(1);
}

const configuration = new Configuration({
    apiKey: openaiApiKey,
});

const openai = new OpenAIApi(configuration);

export default openai;
