const OpenAI = require('openai');
require('dotenv').config();

const client = new OpenAI({
  apiKey: process.env.API_KEY,
  baseURL: process.env.BASE_URL,
});

async function main() {
  try {
    // use the /v1/models GET endpoint to see available models
    // like 'arya' or 'gpt-4o'
    const response = await client.chat.completions.create({
      model: 'arya',
      messages: [
        { role: 'user', content: 'Hello, how are you?' }
      ]
    });

    console.log(response.choices[0].message.content);
  } catch (error) {
    console.error('Error calling OpenAI API:', error.message);
    process.exit(1);
  }
}

main();
