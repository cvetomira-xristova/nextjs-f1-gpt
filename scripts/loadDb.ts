import { DataAPIClient } from '@datastax/astra-db-ts';
import { PuppeteerWebBaseLoader } from '@langchain/community/document_loaders/web/puppeteer';
import OpenAI from 'openai';
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter';

import 'dotenv/config';

type SimilarityMetric = 'dot_product' | 'cosine' | 'euclidean';

const {
  ASTRA_DB_NAMESPACE,
  ASTRA_DB_COLLECTION,
  ASTRA_DB_API_ENDPOINT,
  ASTRA_DB_APPLICATION_TOKEN,
  OPENAI_API_KEY,
} = process.env;

if (!ASTRA_DB_API_ENDPOINT || !ASTRA_DB_NAMESPACE || !ASTRA_DB_COLLECTION) {
  throw new Error('Missing required environment variables');
}

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
});

const f1Data = [
  'http://en.wikipedia.org/wiki/Formula_One',
  'https://en.wikipedia.org/wiki/2025_Formula_One_World_Championship',
  'https://en.wikipedia.org/wiki/2024_Formula_One_World_Championship',
  'https://en.wikipedia.org/wiki/2023_Formula_One_World_Championship',
  'https://en.wikipedia.org/wiki/2022_Formula_One_World_Championship',
  'https://www.formula1.com/en/latest/all',
  'https://www.formula1.com/en/racing/2024',
  'https://www.forbes.com/sites/brettknight/2024/12/10/formula-1s-highest-paid-drivers-2024/',
];

const client = new DataAPIClient(ASTRA_DB_APPLICATION_TOKEN);
const db = client.db(ASTRA_DB_API_ENDPOINT, { keyspace: ASTRA_DB_NAMESPACE });

const splitter = new RecursiveCharacterTextSplitter({
  chunkSize: 512,
  chunkOverlap: 100, // preserves crosschunk context
});

// Create a collection in Astra DB with vector capabilities
const createCollection = async (
  similarityMetric: SimilarityMetric = 'dot_product'
) => {
  const res = await db.createCollection(ASTRA_DB_COLLECTION, {
    vector: {
      dimension: 1536,
      metric: similarityMetric,
    },
  });
  console.log('Collection created:', res);
};

// Load sample data into the collection
// This function scrapes the provided URLs, splits the content into chunks,
// generates embeddings for each chunk, and inserts them into the Astra DB collection.
const loadSampleData = async () => {
  const collection = await db.collection(ASTRA_DB_COLLECTION);

  for await (const url of f1Data) {
    const content = await scrapePage(url);
    const chunks = await splitter.splitText(content);

    for await (const chunk of chunks) {
      const embedding = await openai.embeddings.create({
        model: 'text-embedding-3-small',
        input: chunk,
        encoding_format: 'float',
      });

      const vector = embedding.data[0].embedding;

      const res = await collection.insertOne({
        $vector: vector,
        text: chunk,
      });
      console.log('Inserted chunk:', res);
    }
  }
};

// Function to scrape a web page and return its text content
const scrapePage = async (url: string) => {
  const loader = new PuppeteerWebBaseLoader(url, {
    launchOptions: {
      headless: true,
    },
    gotoOptions: {
      waitUntil: 'domcontentloaded',
    },
    evaluate: async (page, browser) => {
      const result = await page.evaluate(() => document.body.innerHTML);
      await browser.close();
      return result;
    },
  });
  return (await loader.scrape())?.replace(/<[^>]*>?/gm, '') || '';
};

createCollection().then(() => loadSampleData());
