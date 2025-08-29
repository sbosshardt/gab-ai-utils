# GAB AI Utils

This project provides utilities for working with AI models through OpenAI-compatible API endpoints.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create environment file:
   ```bash
   cp env.example .env
   ```

3. Edit `.env` file with your actual API credentials:
   ```
   API_KEY=your_actual_api_key
   BASE_URL=your_actual_base_url
   ```

## Scripts

### List Available Models

```bash
node models-list.js
```

Lists all available AI models from your API endpoint with their display names.

Example output:
```
Available models:
- arya (Arya)
- claude-sonnet-3-5 (Claude 3.5 Sonnet)
- claude-sonnet-4 (Claude Sonnet 4)
- gpt-4o (GPT 4o)
- deepseek-r1 (Deepseek R1)
- o3 (o3)
- sonar (Perplexity Sonar)
... and more
```

### Chat Example

```bash
node chat-hello.js
```

Sends a simple "Hello, how are you?" message to the 'arya' model and displays the response.
