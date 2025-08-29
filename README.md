# GAB AI Utils

**Unofficial utilities and examples for Gab AI subscribers**

This project provides utilities for working with AI models through [Gab AI](https://gab.ai)'s OpenAI-compatible API endpoints.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create environment file:
   ```bash
   cp env.example .env
   ```

3. Edit `.env` file with your actual Gab AI API credentials:
   ```
   API_KEY=your_gab_ai_api_key
   BASE_URL=https://gab.ai/api/v1
   ```
   
   You can get your API key from your Gab AI account settings.

## Scripts

### List Available Models

```bash
node models-list.js
```

Lists all available AI models from your Gab AI subscription with their display names.

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

## Why Gab AI?

- **Multiple AI models**: Access to Claude, GPT, Deepseek, Gemini, and many others in one subscription
- **Fixed pricing**: Predictable & affordable costs with high usage limits
- **API Access**: Easy to integrate with existing OpenAI-based code. Use a model of your choice to power software such as Brave Leo, Cursor, n8n, LangChain, etc.
- **No per-token billing**: Use as much as you need within your subscription limits
- **No training**: Chats are not used to train any offered models.
- **Uniqueness**: Arya is a bespoke right wing model. Interesting however not best for coding and reasoning tasks.
- **Authenticity**: Operated by a small business owner who champions free speech and his Christian faith.
