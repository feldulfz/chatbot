# Angular AI Portfolio Chatbot
[![Ask DeepWiki](https://devin.ai/assets/askdeepwiki.png)](https://deepwiki.com/feldulfz/chatbot)

This repository contains the source code for an AI-powered chatbot built with Angular. The application features a floating chat widget that interacts with an AI model through a backend proxy. The chatbot is designed to function as a "Portfolio Bot," answering questions based on a provided context.

## Core Technologies

*   **Angular 19**: Frontend framework for building the application.
*   **TypeScript**: Primary language for the application logic.
*   **SCSS**: For styling the components.
*   **Angular Signals**: For reactive state management within the application.
*   **OpenRouter / DeepSeek**: The AI service providing the chat completions, proxied during development.
*   **Compodoc**: For generating code documentation.

## Features

*   Floating chat widget that can be toggled on and off.
*   Real-time messaging interface displaying user and assistant messages with timestamps.
*   Context-aware conversations based on a configurable system prompt.
*   API integration with a proxied AI backend (OpenRouter).
*   Loading indicators while the AI is generating a response.
*   Error handling and display for API-related issues.
*   Responsive design for the chat components.

## Project Structure

```
.
├── documentation/       # Auto-generated documentation by Compodoc
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   └── chat/      # The main chat widget component and logic
│   │   ├── services/
│   │   │   └── ai.service.ts # Service for handling AI API communication
│   │   ├── app.component.ts  # Root application component
│   │   └── app.config.ts     # Main application configuration
│   ├── environments/      # Environment-specific settings
│   └── proxy.conf.json    # Proxy configuration for local development
├── angular.json         # Angular CLI configuration
└── package.json         # Project dependencies and scripts
```

## Local Development

### Prerequisites

*   Node.js and npm
*   Angular CLI

### Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/feldulfz/chatbot.git
    cd chatbot
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    The project is configured to use a proxy for API requests to avoid CORS issues.
    ```bash
    npm start
    ```
    The application will be available at `http://localhost:4200/`.

### Configuration

The application communicates with the OpenRouter API. A development API key is hardcoded for convenience.

*   `src/proxy.conf.json`: This file configures the proxy to route `/api` requests to `https://openrouter.ai` and includes the necessary authorization headers.
*   `src/app/services/ai-serrvice/ai.service.ts`: The `AiService` contains the API key and logic for making requests to the AI model.
*   `src/app/app.component.ts`: The `setTheContenxt()` method sets the initial system prompt for the chatbot. This method is triggered by a button in the UI.

## Usage

1.  Open the application in your browser.
2.  Click the red "Button Initialize Context" to provide the initial system prompt to the AI.
3.  Click the floating chat icon in the bottom right corner to open the chat widget.
4.  Type your message in the input box and press Enter or click the send button to interact with the Portfolio Bot.

## Available Scripts

*   `npm start`: Starts the local development server with the proxy configuration.
*   `npm run build`: Compiles the application for production.
*   `npm run test`: Executes unit tests via Karma.
*   `npm run compodoc:build-and-serve`: Generates and serves the code documentation.

## Documentation

This project includes automatically generated documentation created by Compodoc. To view it, run `npm run compodoc:build-and-serve` and navigate to the provided URL. The static documentation is also available in the `/documentation` directory.