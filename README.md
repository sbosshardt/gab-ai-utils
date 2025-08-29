# GAB AI Utils / Chat Example

This project demonstrates how to use the OpenAI client library to make chat completions with custom API endpoints.

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

## Running

```bash
npm start
```

or

```bash
node models-list.js
```

## What it does

The script makes a chat completion request to the 'arya' model with a simple greeting message and prints the response.
