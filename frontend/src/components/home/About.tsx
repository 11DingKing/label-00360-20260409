'use client';

import Link from 'next/link';

const features = [
  { icon: '🚀', title: '技术领先', desc: '持续创新研发' },
  { icon: '🛡️', title: '安全可靠', desc: '企业级安全保障' },
  { icon: '⚡', title: '高效稳定', desc: '99.99%可用性' },
  { icon: '🤝', title: '专业服务', desc: '7×24小时支持' },
];

export default function About() {
  return (
    <section className="relative py-32 bg-gray-900 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px] -translate-y-1/2" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Visual */}
          <div className="relative">
            {/* Main visual container */}
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border border-cyan-500/20 animate-spin" style={{ animationDuration: '20s' }} />
              <div className="absolute inset-4 rounded-full border border-blue-500/20 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
              
              {/* Center content */}
              <div className="absolute inset-12 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold gradient-text-blue mb-2">10+</div>
                  <div className="text-gray-400">年技术沉淀</div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute top-8 right-8 glass rounded-2xl px-4 py-3 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white text-lg">
                    ☁️
                  </div>
                  <div>
                    <div className="text-white font-semibold">云服务</div>
                    <div className="text-xs text-gray-400">全球部署</div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-8 left-8 glass rounded-2xl px-4 py-3 animate-float-delay">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white text-lg">
                    🤖
                  </div>
                  <div>
                    <div className="text-white font-semibold">AI 能力</div>
                    <div className="text-xs text-gray-400">智能赋能</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 mb-6">
              关于我们
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              用科技连接
              <br />
              <span className="gradient-text">无限可能</span>
            </h2>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              我们是一家专注于企业数字化转型的科技公司，拥有超过10年的行业经验。
              通过持续的技术创新和优质的服务，已成功帮助500+企业实现数字化升级，
              成为行业领先的技术服务商。
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {features.map((item) => (
                <div
                  key={item.title}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <div className="font-medium text-white">{item.title}</div>
                    <div className="text-sm text-gray-400">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
            >
              了解更多
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
