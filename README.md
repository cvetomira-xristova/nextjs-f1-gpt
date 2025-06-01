# F1 GPT - Your Formula 1 AI Assistant 🏎️

A Next.js based Formula 1 chatbot powered by GPT-4 that uses retrieval-augmented generation (RAG) to provide more up-to-date answers about F1 racing. The system combines OpenAI's language models with a curated knowledge base of Formula 1 data, ensuring responses are both contextually relevant and current with the latest F1 information.

## AI Model Details 🧠

- **Chat Model**: gpt-4o by OpenAI
- **Embedding Model**: text-embedding-3-small by OpenAI
- **Knowledge Cutoff**: Oct 01, 2023
- **Enhanced with Formula 1 Data from**:

  - Official Formula 1 website (formula1.com)
  - Wikipedia F1 articles (2022-2025 seasons)
  - Forbes F1 coverage

## Tech Stack 💻

- **Frontend**: Next.js, TypeScript, Tailwind CSS
- **AI**: OpenAI API for embeddings and chat
- **Database**: Astra DB (Vector Database)

## Getting started 🏁

1. Clone the repository:

```bash
git clone https://github.com/yourusername/nextjs-f1-gpt.git
cd nextjs-f1-gpt
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

- Create a .env.local file

```
touch .env.local
```

- Add your credentials

```OPENAI_API_KEY=your_key
ASTRA_DB_NAMESPACE=your_namespace
ASTRA_DB_COLLECTION=your_collection
ASTRA_DB_API_ENDPOINT=your_endpoint
ASTRA_DB_APPLICATION_TOKEN=your_token
```

4. Load F1 data into vector database:

```
npm run seed
```

5. Start the development server:

```
npm run dev
```

Your F1 GPT should be running at [http://localhost:3000](http://localhost:3000) 🏎️
