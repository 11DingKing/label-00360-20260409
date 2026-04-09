export interface NewsItem {
  id: string;
  title: string;
  shortTitle: string;
  date: string;
  category: string;
  excerpt: string;
  featured: boolean;
  image: string | null;
  order: number;
}

export interface CaseItem {
  id: string;
  title: string;
  category: string;
  description: string;
  stats: {
    value: string;
    label: string;
  };
  gradient: string;
  size: 'large' | 'small';
  image: string | null;
  order: number;
}

export const NEWS_CATEGORIES = [
  '公司新闻',
  '产品动态',
  '合作动态',
  '行业资讯',
] as const;

export const GRADIENT_PRESETS = [
  { value: 'from-blue-600 to-cyan-500', label: '蓝青色', colors: ['#2563eb', '#06b6d4'] },
  { value: 'from-cyan-500 to-teal-500', label: '青绿色', colors: ['#06b6d4', '#14b8a6'] },
  { value: 'from-orange-500 to-amber-500', label: '橙黄色', colors: ['#f97316', '#f59e0b'] },
  { value: 'from-green-500 to-emerald-500', label: '绿色', colors: ['#22c55e', '#10b981'] },
  { value: 'from-purple-500 to-pink-500', label: '紫粉色', colors: ['#a855f7', '#ec4899'] },
  { value: 'from-red-500 to-rose-500', label: '红色', colors: ['#ef4444', '#f43f5e'] },
  { value: 'from-indigo-500 to-blue-500', label: '靛蓝色', colors: ['#6366f1', '#3b82f6'] },
  { value: 'from-yellow-500 to-orange-500', label: '黄橙色', colors: ['#eab308', '#f97316'] },
] as const;
