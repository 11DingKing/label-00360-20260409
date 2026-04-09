'use client';

import { useToast } from '@/components/ui/Toast';
import { NewsItem } from '@/lib/types';

interface NewsProps {
  news: NewsItem[];
}

export default function News({ news }: NewsProps) {
  const { showToast } = useToast();
  const featuredNews = news.find((n) => n.featured);
  const otherNews = news.filter((n) => !n.featured);

  const handleNewsClick = (title: string) => {
    showToast('「' + title + '」详情正在开发中，敬请期待');
  };

  const handleViewAll = () => {
    showToast('「查看全部」功能正在开发中，敬请期待');
  };

  return (
    <section className="relative py-32 bg-gray-900 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] -translate-y-1/2" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 mb-6">
              新闻动态
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              最新资讯
            </h2>
            <p className="text-lg text-gray-400">
              了解公司最新动态和行业前沿资讯
            </p>
          </div>
          <button
            onClick={handleViewAll}
            className="mt-6 md:mt-0 inline-flex items-center gap-2 text-cyan-400 font-medium hover:text-cyan-300 transition-colors"
          >
            查看全部
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredNews && (
            <div 
              className="group relative rounded-2xl sm:rounded-3xl overflow-hidden lg:row-span-2 cursor-pointer"
              onClick={() => handleNewsClick(featuredNews.title)}
            >
              {featuredNews.image ? (
                <img
                  src={featuredNews.image}
                  alt={featuredNews.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-600 to-blue-600" />
              )}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: 'linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%)',
                  backgroundSize: '200% 200%',
                }}
              />
              <div className="relative p-5 sm:p-10 h-full min-h-[280px] sm:min-h-[400px] flex flex-col justify-end">
                <span className="inline-block w-fit px-3 py-1 rounded-full text-xs font-medium bg-white/20 text-white mb-3 sm:mb-4">
                  {featuredNews.category}
                </span>
                <h3 className="text-xl sm:text-3xl font-bold text-white mb-3 sm:mb-4 group-hover:text-white/90 transition-colors">
                  <span className="sm:hidden">{featuredNews.shortTitle || featuredNews.title}</span>
                  <span className="hidden sm:inline">{featuredNews.title}</span>
                </h3>
                <p className="text-sm sm:text-base text-white/80 mb-4 sm:mb-6 line-clamp-2">{featuredNews.excerpt}</p>
                <div className="flex items-center justify-between">
                  <time className="text-xs sm:text-sm text-white/60">{featuredNews.date}</time>
                  <span className="inline-flex items-center gap-2 text-sm sm:text-base text-white font-medium group-hover:gap-3 transition-all">
                    阅读全文
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          )}

          <div className="space-y-4 sm:space-y-6">
            {otherNews.map((item) => (
              <article
                key={item.id}
                className="group glass rounded-2xl p-4 sm:p-6 hover:bg-white/5 transition-colors cursor-pointer"
                onClick={() => handleNewsClick(item.title)}
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2 sm:mb-3">
                      <span className="text-xs font-medium text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded">
                        {item.category}
                      </span>
                      <time className="text-xs sm:text-sm text-gray-500">{item.date}</time>
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2 group-hover:text-cyan-400 transition-colors line-clamp-1 sm:line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm line-clamp-1 sm:line-clamp-2">{item.excerpt}</p>
                  </div>
                  {item.image ? (
                    <img
                      src={item.image}
                      alt=""
                      className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover"
                    />
                  ) : (
                    <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 group-hover:bg-cyan-500/20 group-hover:text-cyan-400 transition-colors">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
