'use client';

import Link from 'next/link';
import { updateNews, getNewsList } from '@/lib/actions';
import { NEWS_CATEGORIES, NewsItem } from '@/lib/types';
import ImageUpload from '@/components/admin/ImageUpload';
import { useState, useEffect } from 'react';
import { notFound } from 'next/navigation';

interface NewsEditPageProps {
  params: Promise<{ id: string }>;
}

export default function NewsEditPage(props: NewsEditPageProps) {
  const [news, setNews] = useState<NewsItem | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      const params = await props.params;
      const newsList = await getNewsList();
      const item = newsList.find(n => n.id === params.id);
      if (item) {
        setNews(item);
        setImageUrl(item.image);
      }
      setLoading(false);
    };
    fetchNews();
  }, [props.params]);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-center h-64">
          <div className="w-8 h-8 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin" />
        </div>
      </div>
    );
  }

  if (!news) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center gap-4 mb-8">
        <Link
          href="/admin/news"
          className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
        <div>
          <h1 className="text-3xl font-bold text-white">编辑新闻</h1>
          <p className="text-gray-400">修改新闻内容</p>
        </div>
      </div>

      <form action={updateNews.bind(null, news.id)} className="space-y-6">
        <div className="glass rounded-2xl p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                标题 <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                name="title"
                required
                defaultValue={news.title}
                placeholder="请输入新闻标题"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                短标题（移动端显示）
              </label>
              <input
                type="text"
                name="shortTitle"
                defaultValue={news.shortTitle}
                placeholder="请输入短标题（可选）"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                日期 <span className="text-red-400">*</span>
              </label>
              <input
                type="date"
                name="date"
                required
                defaultValue={news.date}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                分类 <span className="text-red-400">*</span>
              </label>
              <select
                name="category"
                required
                defaultValue={news.category}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all appearance-none cursor-pointer"
              >
                {NEWS_CATEGORIES.map((cat) => (
                  <option key={cat} value={cat} className="bg-gray-900">
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                摘要 <span className="text-red-400">*</span>
              </label>
              <textarea
                name="excerpt"
                required
                rows={3}
                defaultValue={news.excerpt}
                placeholder="请输入新闻摘要"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all resize-none"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                封面图片
              </label>
              <ImageUpload
                name="image"
                value={imageUrl}
                onChange={setImageUrl}
              />
            </div>

            <div className="md:col-span-2">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="featured"
                  defaultChecked={news.featured}
                  className="w-5 h-5 rounded bg-white/5 border-white/10 text-cyan-500 focus:ring-cyan-500/20 cursor-pointer"
                />
                <span className="text-gray-300">设为精选新闻（首页大图展示）</span>
              </label>
              <p className="text-gray-500 text-sm mt-1 ml-8">
                注意：设置为精选后，其他新闻的精选标记将被取消
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end gap-4">
          <Link
            href="/admin/news"
            className="px-6 py-3 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
          >
            取消
          </Link>
          <button
            type="submit"
            className="px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium hover:from-cyan-400 hover:to-blue-400 transition-all shadow-lg shadow-cyan-500/25"
          >
            保存
          </button>
        </div>
      </form>
    </div>
  );
}
