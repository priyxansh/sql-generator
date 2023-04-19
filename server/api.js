const dotenv = require("dotenv")
const openai = require("openai")


dotenv.config({
    path: __dirname + "/.env",
});

const openaiApiKey = process.env.OPENAI_API_KEY;

if (!openaiApiKey) {OpenAIApi
    console.error("OPENAI_API_KEY not set.");
    process.exit(1);
}

const configuration = new openai.Configuration({
    apiKey: openaiApiKey,
});

const openaiapi = new openai.OpenAIApi(configuration);

export default openaiapi;
