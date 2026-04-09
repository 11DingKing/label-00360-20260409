'use client';

import { login } from '@/lib/actions';
import { useFormState } from 'react-dom';

export default function LoginPage() {
  const [state, formAction] = useFormState(login, { error: '' });

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center p-4">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px]" />
      </div>

      <div className="relative w-full max-w-md">
        <div className="glass rounded-3xl p-8 sm:p-10">
          <div className="text-center mb-8">
            <div className="relative h-16 w-16 mx-auto mb-4">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400 via-blue-500 to-blue-600 animate-gradient" />
              <div className="absolute inset-[3px] rounded-[14px] bg-gray-900 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">T</span>
              </div>
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">管理后台</h1>
            <p className="text-gray-400">请登录以继续</p>
          </div>

          <form action={formAction} className="space-y-5">
            {state?.error && (
              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                {state.error}
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                用户名
              </label>
              <input
                type="text"
                name="username"
                required
                placeholder="请输入用户名"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                密码
              </label>
              <input
                type="password"
                name="password"
                required
                placeholder="请输入密码"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium hover:from-cyan-400 hover:to-blue-400 transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40"
            >
              登录
            </button>
          </form>

          <p className="mt-6 text-center text-xs text-gray-500">
            默认账号: admin / admin123
          </p>
        </div>
      </div>
    </div>
  );
}
