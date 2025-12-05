# Angular Context-Aware AI Chatbot

![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![OpenRouter](https://img.shields.io/badge/OpenRouter_AI-5A67D8?style=for-the-badge)
![DeepSeek](https://img.shields.io/badge/DeepSeek_AI-000000?style=for-the-badge)
![Compodoc](https://img.shields.io/badge/Compodoc-000000?style=for-the-badge&logo=compodoc&logoColor=white)

This repository contains the source code for an AI-powered chatbot built with Angular. The application features a floating chat widget that interacts with an AI model through a local backend proxy. The chatbot is designed to function as a "Portfolio Bot," answering questions based on a provided context.

## Core Technologies

*   **Angular 19**: A powerful framework for building the frontend application.
*   **TypeScript**: The primary language for application logic.
*   **SCSS**: Used for advanced and structured styling of components.
*   **Angular Signals**: For modern, fine-grained reactive state management.
*   **Node.js**: Powers the local proxy server for securely handling API requests.
*   **OpenRouter / DeepSeek**: The AI service providing the chat completions.
*   **Compodoc**: For generating comprehensive code documentation.

## Features

*   **Floating Chat Widget**: A toggleable chat interface that sits unobtrusively on the page.
*   **Real-time Messaging**: A familiar chat UI displaying user and assistant messages with timestamps.
*   **Context-Aware Conversations**: The chatbot's responses are based on a configurable system prompt.
*   **Secure API Integration**: Uses a local Node.js proxy to manage API keys, keeping them out of the frontend code.
*   **Loading & Error States**: The UI includes a typing indicator while the AI responds and displays clear error messages if issues occur.

## Project Structure

```
.
├── api-proxy/           # Node.js proxy server for AI API calls
│   ├── server.js        # The proxy server logic
│   └── .env             # Environment variables for the proxy (API key)
├── documentation/       # Auto-generated documentation by Compodoc
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   └── chat/      # The main chat widget component
│   │   └── services/
│   │       └── ai.service.ts # Service for frontend-to-proxy communication
│   └── app.component.ts   # Root application component
└── package.json         # Project dependencies and scripts
```

## Local Development

This project requires running a local Node.js proxy server in one terminal and the Angular development server in another.

### Prerequisites

*   Node.js and npm
*   Angular CLI (`npm install -g @angular/cli`)

### Setup Instructions

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/feldulfz/chatbot.git
    cd chatbot
    ```

2.  **Install Frontend Dependencies:**
    From the root directory (`chatbot`), run:
    ```bash
    npm install
    ```

3.  **Configure and Install Proxy Dependencies:**
    *   Navigate to the proxy directory: `cd api-proxy`
    *   Create a `.env` file with your OpenRouter API key:
        ```bash
        echo "MODEL_API_KEY=YOUR_OPENROUTER_API_KEY_HERE" > .env
        ```
    *   Install proxy dependencies: `npm install`
    *   Navigate back to the root directory: `cd ..`

4.  **Run the Servers:**
    *   **Terminal 1 (Proxy Server):** From the `api-proxy` directory, start the proxy.
        ```bash
        npm start
        ```
        The proxy will run on `http://localhost:3000`.

    *   **Terminal 2 (Frontend App):** From the root `chatbot` directory, start the Angular app.
        ```bash
        npm start
        ```
        The application will be available at `http://localhost:4200/`.

## Usage

1.  With both servers running, open `http://localhost:4200/` in your browser.
2.  Click the red **"Button Initialize Context"** to set the initial system prompt for the chatbot.
3.  Click the floating robot icon in the bottom right corner to open the chat widget.
4.  Type a message and press Enter to interact with the Portfolio Bot.

## Available Scripts

*   `npm start`: Starts the Angular development server.
*   `npm run build`: Compiles the application for production.
*   `npm run test`: Executes unit tests via Karma.
*   `npm run compodoc:build-and-serve`: Generates and serves the code documentation locally.

## Documentation

This project uses Compodoc to generate documentation from the source code. To view it, run `npm run compodoc:build-and-serve` and navigate to the provided local URL. A pre-built version of the documentation is also available in the `/documentation` directory of this repository.

---

## Visuals

### Environment file configuration

![chatbor_1](ReadMeImages/chatbor_1.png 'chatbor_1')

### Run local server for backend api key

![chatbor_2](ReadMeImages/chatbor_2.png 'chatbor_2')

### Set chatbot context

![chatbor_3](ReadMeImages/chatbor_3.png 'chatbor_3')

### Use the chatbot

![chatbor_4](ReadMeImages/chatbor_4.png 'chatbor_4')

![chatbor_5](ReadMeImages/chatbor_5.png 'chatbor_5')

### Ask chatbot related to context

![chatbor_6](ReadMeImages/chatbor_6.png 'chatbor_6')

### Chatbot cannot answer outside the context

![chatbor_7](ReadMeImages/chatbor_7.png 'chatbor_7')
