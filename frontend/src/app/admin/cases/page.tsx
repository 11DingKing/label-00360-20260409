import Link from 'next/link';
import { getCasesList, deleteCase, reorderCases } from '@/lib/actions';
import { GRADIENT_PRESETS } from '@/lib/types';

export default async function CasesAdminPage() {
  const cases = await getCasesList();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">案例管理</h1>
          <p className="text-gray-400">管理成功案例展示</p>
        </div>
        <Link
          href="/admin/cases/new"
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium hover:from-cyan-400 hover:to-blue-400 transition-all shadow-lg shadow-cyan-500/25"
        >
          + 新增案例
        </Link>
      </div>

      <div className="glass rounded-2xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">排序</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">案例</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">分类</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">尺寸</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">渐变</th>
              <th className="px-6 py-4 text-right text-sm font-medium text-gray-400">操作</th>
            </tr>
          </thead>
          <tbody>
            {cases.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-6 py-12 text-center text-gray-500">
                  暂无案例数据
                </td>
              </tr>
            ) : (
              cases.map((item) => {
                const gradient = GRADIENT_PRESETS.find(g => g.value === item.gradient);
                return (
                  <tr key={item.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4">
                      <span className="text-gray-500 text-sm">#{item.order}</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        {item.image && (
                          <img
                            src={item.image}
                            alt=""
                            className="w-12 h-12 rounded-lg object-cover"
                          />
                        )}
                        {!item.image && gradient && (
                          <div
                            className={`w-12 h-12 rounded-lg bg-gradient-to-br ${item.gradient}`}
                          />
                        )}
                        <div>
                          <p className="text-white font-medium">{item.title}</p>
                          <p className="text-gray-500 text-sm truncate max-w-xs">{item.description}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-cyan-500/10 text-cyan-400">
                        {item.category}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                        item.size === 'large'
                          ? 'bg-amber-500/10 text-amber-400'
                          : 'bg-gray-500/10 text-gray-400'
                      }`}>
                        {item.size === 'large' ? '大尺寸' : '小尺寸'}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        {gradient && (
                          <div
                            className={`w-8 h-8 rounded-lg bg-gradient-to-br ${item.gradient}`}
                          />
                        )}
                        <span className="text-gray-400 text-sm">{gradient?.label || item.gradient}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Link
                          href={`/admin/cases/${item.id}`}
                          className="px-3 py-1.5 rounded-lg text-sm text-cyan-400 hover:bg-cyan-500/10 transition-colors"
                        >
                          编辑
                        </Link>
                        <form action={deleteCase.bind(null, item.id)}>
                          <button
                            type="submit"
                            className="px-3 py-1.5 rounded-lg text-sm text-red-400 hover:bg-red-500/10 transition-colors"
                            onClick={(e) => {
                              if (!confirm('确定要删除这个案例吗？')) {
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
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
