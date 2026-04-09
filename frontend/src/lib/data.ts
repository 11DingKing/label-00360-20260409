import fs from 'fs/promises';
import path from 'path';
import { NewsItem, CaseItem } from './types';

const DATA_DIR = path.join(process.cwd(), 'data');
const NEWS_FILE = path.join(DATA_DIR, 'news.json');
const CASES_FILE = path.join(DATA_DIR, 'cases.json');

async function ensureDataDir() {
  try {
    await fs.access(DATA_DIR);
  } catch {
    await fs.mkdir(DATA_DIR, { recursive: true });
  }
}

export async function getNews(): Promise<NewsItem[]> {
  await ensureDataDir();
  try {
    const data = await fs.readFile(NEWS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

export async function saveNews(news: NewsItem[]): Promise<void> {
  await ensureDataDir();
  await fs.writeFile(NEWS_FILE, JSON.stringify(news, null, 2), 'utf-8');
}

export async function getCases(): Promise<CaseItem[]> {
  await ensureDataDir();
  try {
    const data = await fs.readFile(CASES_FILE, 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

export async function saveCases(cases: CaseItem[]): Promise<void> {
  await ensureDataDir();
  await fs.writeFile(CASES_FILE, JSON.stringify(cases, null, 2), 'utf-8');
}
