import Link from 'next/link';
import { getNewsList, deleteNews } from '@/lib/actions';

export default async function NewsAdminPage() {
  const news = await getNewsList();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">新闻管理</h1>
          <p className="text-gray-400">管理网站新闻动态</p>
        </div>
        <Link
          href="/admin/news/new"
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium hover:from-cyan-400 hover:to-blue-400 transition-all shadow-lg shadow-cyan-500/25"
        >
          + 新增新闻
        </Link>
      </div>

      <div className="glass rounded-2xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">标题</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">分类</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">日期</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">状态</th>
              <th className="px-6 py-4 text-right text-sm font-medium text-gray-400">操作</th>
            </tr>
          </thead>
          <tbody>
            {news.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-6 py-12 text-center text-gray-500">
                  暂无新闻数据
                </td>
              </tr>
            ) : (
              news.map((item) => (
                <tr key={item.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      {item.image && (
                        <img
                          src={item.image}
                          alt=""
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                      )}
                      <div>
                        <p className="text-white font-medium">{item.title}</p>
                        {item.shortTitle && (
                          <p className="text-gray-500 text-sm">{item.shortTitle}</p>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-cyan-500/10 text-cyan-400">
                      {item.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-400 text-sm">{item.date}</td>
                  <td className="px-6 py-4">
                    {item.featured ? (
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-amber-500/10 text-amber-400">
                        精选
                      </span>
                    ) : (
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-gray-500/10 text-gray-400">
                        普通
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Link
                        href={`/admin/news/${item.id}`}
                        className="px-3 py-1.5 rounded-lg text-sm text-cyan-400 hover:bg-cyan-500/10 transition-colors"
                      >
                        编辑
                      </Link>
                      <form action={deleteNews.bind(null, item.id)}>
                        <button
                          type="submit"
                          className="px-3 py-1.5 rounded-lg text-sm text-red-400 hover:bg-red-500/10 transition-colors"
                          onClick={(e) => {
                            if (!confirm('确定要删除这条新闻吗？')) {
                              e.preventDefault();
                            }
                          }}
                        >
                          删除
                        </button>
                      </form>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
