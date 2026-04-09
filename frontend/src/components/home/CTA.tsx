'use client';

import Link from 'next/link';

export default function CTA() {
  return (
    <section className="relative py-32 overflow-hidden bg-gray-950">
      {/* Background with light rays effect */}
      <div className="absolute inset-0">
        {/* Central glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px]">
          {/* Main light source */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-white/10 via-cyan-500/5 to-transparent rounded-full blur-3xl" />
          {/* Side glows */}
          <div className="absolute top-1/4 left-0 w-[400px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px]" />
          <div className="absolute top-1/4 right-0 w-[400px] h-[300px] bg-blue-500/10 rounded-full blur-[100px]" />
        </div>
        
        {/* Subtle noise texture overlay */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.1) 0%, transparent 60%)`,
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Icon */}
        <div className="inline-flex p-3 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 shadow-lg shadow-cyan-500/25 mb-8">
          <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-2">
          准备好开启
        </h2>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8">
          <span className="gradient-text-blue">数字化之旅</span>
          <span className="text-white">了吗？</span>
        </h2>
        
        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
          立即联系我们的专业顾问，获取针对您业务的定制化解决方案
        </p>

        <div className="flex flex-row gap-3 sm:gap-4 justify-center">
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-2 px-5 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all text-sm sm:text-base"
          >
            免费咨询
            <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
          
          <Link
            href="tel:400-888-8888"
            className="inline-flex items-center justify-center gap-2 sm:gap-3 px-5 sm:px-8 py-3 sm:py-4 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-white font-semibold hover:bg-white/10 transition-colors text-sm sm:text-base"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            400-888-8888
          </Link>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 sm:mt-16 flex flex-row justify-center gap-4 sm:gap-8 text-gray-500">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500" />
            <span className="text-xs sm:text-sm whitespace-nowrap">免费方案咨询</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500" />
            <span className="text-xs sm:text-sm whitespace-nowrap">专业技术团队</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500" />
            <span className="text-xs sm:text-sm whitespace-nowrap">7×24小时服务</span>
          </div>
        </div>
      </div>
    </section>
  );
}
