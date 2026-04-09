'use client';

import Link from 'next/link';
import { useEffect, useState, useMemo } from 'react';
import { useToast } from '@/components/ui/Toast';

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const { showToast } = useToast();

  // Pre-generate particle positions to avoid Math.random during render
  const particles = useMemo(() => 
    [...Array(20)].map((_, i) => ({
      id: i,
      left: `${(i * 5 + 2) % 100}%`,
      top: `${(i * 7 + 3) % 100}%`,
      delay: `${(i * 0.25) % 5}s`,
      duration: `${5 + (i % 5)}s`,
    })), []
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-950">
      {/* Animated background */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Gradient orbs - blue theme */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-cyan-500/20 blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-blue-500/20 blur-[120px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-blue-500/10 blur-[150px]" />

        {/* Floating particles */}
        {mounted && (
          <div className="absolute inset-0">
            {particles.map((p) => (
              <div
                key={p.id}
                className="absolute w-1 h-1 bg-cyan-400/50 rounded-full animate-float"
                style={{
                  left: p.left,
                  top: p.top,
                  animationDelay: p.delay,
                  animationDuration: p.duration,
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className={`transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
            </span>
            <span className="text-sm text-gray-300">探索数字化未来</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold text-white mb-8 tracking-tight">
            <span className="block">科技创新</span>
            <span className="block mt-2 gradient-text-blue">驱动未来</span>
          </h1>

          <p className="text-sm text-gray-400 mb-12">
            我们是一家专注于企业数字化转型的科技公司，致力于用技术创新推动企业发展
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-row gap-3 sm:gap-4 justify-center mb-20 px-4 sm:px-0">
            <Link
              href="/services"
              className="group relative inline-flex items-center justify-center px-5 sm:px-8 py-3 sm:py-4 overflow-hidden rounded-full"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-600 animate-gradient" />
              <span className="relative flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base font-semibold text-white whitespace-nowrap">
                探索服务
                <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
            <button
              onClick={() => showToast('「观看视频」功能正在开发中，敬请期待')}
              className="group inline-flex items-center justify-center px-5 sm:px-8 py-3 sm:py-4 rounded-full glass hover:bg-white/10 transition-colors border border-white/10"
            >
              <span className="flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base font-semibold text-white whitespace-nowrap">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                观看视频
              </span>
            </button>
          </div>
        </div>

        {/* Stats */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-1000 delay-300 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {[
            { value: '10+', label: '年行业深耕', suffix: '' },
            { value: '500', label: '服务企业', suffix: '+' },
            { value: '99.9', label: '服务可用性', suffix: '%' },
            { value: '50', label: '技术专利', suffix: '+' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative glass rounded-2xl p-6 hover:bg-white/5 transition-colors">
                <p className="text-3xl sm:text-4xl font-bold text-white mb-1">
                  {stat.value}
                  <span className="text-cyan-400">{stat.suffix}</span>
                </p>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-gray-600 flex justify-center pt-2">
          <div className="w-1 h-2 bg-cyan-400 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
