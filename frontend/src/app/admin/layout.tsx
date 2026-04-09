import Link from 'next/link';
import { isAuthenticated, logout } from '@/lib/actions';
import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: '管理后台 - TechCorp',
};

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const authenticated = await isAuthenticated();

  if (!authenticated) {
    redirect('/admin/login');
  }

  return (
    <div className="min-h-screen bg-gray-950">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <Link href="/admin" className="flex items-center gap-2">
                <div className="relative h-8 w-8">
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 animate-gradient" />
                  <div className="absolute inset-[1.5px] rounded-md bg-gray-900 flex items-center justify-center">
                    <span className="text-sm font-bold text-white">T</span>
                  </div>
                </div>
                <span className="text-lg font-bold text-white">管理后台</span>
              </Link>
              <div className="hidden md:flex items-center gap-1">
                <Link
                  href="/admin"
                  className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                >
                  仪表盘
                </Link>
                <Link
                  href="/admin/news"
                  className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                >
                  新闻管理
                </Link>
                <Link
                  href="/admin/cases"
                  className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                >
                  案例管理
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/"
                target="_blank"
                className="px-4 py-2 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                查看网站
              </Link>
              <form action={logout}>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                >
                  退出登录
                </button>
              </form>
            </div>
          </div>
        </div>
      </nav>
      <main className="pt-16">{children}</main>
    </div>
  );
}
