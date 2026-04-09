'use client';

import Link from 'next/link';

const services = [
  {
    title: '云计算服务',
    description: '弹性可扩展的云基础设施，为企业提供安全、稳定、高效的计算资源',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    title: '人工智能',
    description: '基于深度学习的AI解决方案，赋能企业智能化升级转型',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path 
          d="M12 2L14 9L21 12L14 15L12 22L10 15L3 12L10 9L12 2Z" 
          stroke="currentColor" 
          strokeWidth={1.5} 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
    ),
    gradient: 'from-blue-500 to-indigo-600',
  },
  {
    title: '大数据分析',
    description: '海量数据处理与智能分析，挖掘数据价值驱动业务增长',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
      </svg>
    ),
    gradient: 'from-orange-500 to-amber-500',
  },
  {
    title: '网络安全',
    description: '全方位安全防护体系，保障企业数字资产安全无忧',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    gradient: 'from-green-500 to-emerald-500',
  },
];

export default function Services() {
  return (
    <section className="relative py-32 bg-gray-950 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-cyan-500/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 mb-6">
            核心服务
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            全方位技术服务
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-400">
            依托强大的技术实力，为企业提供从基础设施到智能应用的全栈解决方案
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative"
            >
              {/* Glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
              
              {/* Card */}
              <div className="relative h-full glass rounded-3xl p-8 hover:bg-white/5 transition-all duration-500 hover-lift">
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.gradient} mb-6`}>
                  <span className="text-white">{service.icon}</span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Link */}
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 group-hover:text-cyan-400 transition-colors"
                >
                  了解更多
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors"
          >
            查看全部服务
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
