'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { getNews, saveNews, getCases, saveCases } from './data';
import { NewsItem, CaseItem } from './types';

const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = 'admin123';
const SESSION_COOKIE_NAME = 'admin_session';
const SESSION_VALUE = 'authenticated';

export async function login(prevState: { error: string }, formData: FormData) {
  const username = formData.get('username') as string;
  const password = formData.get('password') as string;

  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    const cookieStore = await cookies();
    cookieStore.set(SESSION_COOKIE_NAME, SESSION_VALUE, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/',
      maxAge: 60 * 60 * 24,
    });
    redirect('/admin');
  }

  return { error: '用户名或密码错误' };
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE_NAME);
  redirect('/admin/login');
}

export async function isAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies();
  const session = cookieStore.get(SESSION_COOKIE_NAME);
  return session?.value === SESSION_VALUE;
}

export async function getNewsList(): Promise<NewsItem[]> {
  const news = await getNews();
  return news.sort((a, b) => a.order - b.order);
}

export async function createNews(formData: FormData) {
  const news = await getNews();
  const maxOrder = news.length > 0 ? Math.max(...news.map(n => n.order)) : 0;

  const newItem: NewsItem = {
    id: Date.now().toString(),
    title: formData.get('title') as string,
    shortTitle: formData.get('shortTitle') as string,
    date: formData.get('date') as string,
    category: formData.get('category') as string,
    excerpt: formData.get('excerpt') as string,
    featured: formData.get('featured') === 'on',
    image: (formData.get('image') as string) || null,
    order: maxOrder + 1,
  };

  if (newItem.featured) {
    news.forEach(n => n.featured = false);
  }

  news.push(newItem);
  await saveNews(news);
  redirect('/admin/news');
}

export async function updateNews(id: string, formData: FormData) {
  const news = await getNews();
  const index = news.findIndex(n => n.id === id);

  if (index === -1) {
    redirect('/admin/news');
  }

  const featured = formData.get('featured') === 'on';

  if (featured && !news[index].featured) {
    news.forEach(n => n.featured = false);
  }

  news[index] = {
    ...news[index],
    title: formData.get('title') as string,
    shortTitle: formData.get('shortTitle') as string,
    date: formData.get('date') as string,
    category: formData.get('category') as string,
    excerpt: formData.get('excerpt') as string,
    featured,
    image: (formData.get('image') as string) || null,
  };

  await saveNews(news);
  redirect('/admin/news');
}

export async function deleteNews(id: string) {
  const news = await getNews();
  const filtered = news.filter(n => n.id !== id);
  await saveNews(filtered);
  redirect('/admin/news');
}

export async function reorderNews(ids: string[]) {
  const news = await getNews();
  const reordered = ids.map((id, index) => {
    const item = news.find(n => n.id === id);
    return item ? { ...item, order: index + 1 } : null;
  }).filter(Boolean) as NewsItem[];

  const remaining = news.filter(n => !ids.includes(n.id));
  remaining.forEach((item, index) => {
    item.order = reordered.length + index + 1;
  });

  await saveNews([...reordered, ...remaining]);
}

export async function getCasesList(): Promise<CaseItem[]> {
  const cases = await getCases();
  return cases.sort((a, b) => a.order - b.order);
}

export async function createCase(formData: FormData) {
  const cases = await getCases();
  const maxOrder = cases.length > 0 ? Math.max(...cases.map(c => c.order)) : 0;

  const newItem: CaseItem = {
    id: Date.now().toString(),
    title: formData.get('title') as string,
    category: formData.get('category') as string,
    description: formData.get('description') as string,
    stats: {
      value: formData.get('statsValue') as string,
      label: formData.get('statsLabel') as string,
    },
    gradient: formData.get('gradient') as string,
    size: formData.get('size') as 'large' | 'small',
    image: (formData.get('image') as string) || null,
    order: maxOrder + 1,
  };

  cases.push(newItem);
  await saveCases(cases);
  redirect('/admin/cases');
}

export async function updateCase(id: string, formData: FormData) {
  const cases = await getCases();
  const index = cases.findIndex(c => c.id === id);

  if (index === -1) {
    redirect('/admin/cases');
  }

  cases[index] = {
    ...cases[index],
    title: formData.get('title') as string,
    category: formData.get('category') as string,
    description: formData.get('description') as string,
    stats: {
      value: formData.get('statsValue') as string,
      label: formData.get('statsLabel') as string,
    },
    gradient: formData.get('gradient') as string,
    size: formData.get('size') as 'large' | 'small',
    image: (formData.get('image') as string) || null,
  };

  await saveCases(cases);
  redirect('/admin/cases');
}

export async function deleteCase(id: string) {
  const cases = await getCases();
  const filtered = cases.filter(c => c.id !== id);
  await saveCases(filtered);
  redirect('/admin/cases');
}

export async function reorderCases(ids: string[]) {
  const cases = await getCases();
  const reordered = ids.map((id, index) => {
    const item = cases.find(c => c.id === id);
    return item ? { ...item, order: index + 1 } : null;
  }).filter(Boolean) as CaseItem[];

  const remaining = cases.filter(c => !ids.includes(c.id));
  remaining.forEach((item, index) => {
    item.order = reordered.length + index + 1;
  });

  await saveCases([...reordered, ...remaining]);
}
