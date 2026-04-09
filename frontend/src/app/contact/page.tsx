'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useState } from 'react';
import { useToast } from '@/components/ui/Toast';

const contactInfo = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    title: '服务热线',
    content: '400-888-8888',
    sub: '工作时间：周一至周五 9:00-18:00',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: '电子邮箱',
    content: 'contact@techcorp.com',
    sub: '我们会在24小时内回复您',
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { showToast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    showToast('感谢您的留言，我们会尽快与您联系！');
    setIsSubmitting(false);
    setFormData({ name: '', company: '', email: '', phone: '', service: '', message: '' });
  };

  return (
    <>
      <Header />
      <main className="bg-gray-950 min-h-screen">
        {/* Hero */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-blue-500/10 blur-[150px]" />
          </div>
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 mb-6">
              联系我们
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 whitespace-nowrap">
              开启合作
              <span className="gradient-text">新篇章</span>
            </h1>
            <p className="mx-auto max-w-2xl text-sm sm:text-xl text-gray-400">
              我们期待与您的合作，请留下您的联系方式，专业顾问将尽快与您取得联系
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Contact Info - Horizontal */}
            <div className="mb-16">
              <div className="text-center mb-10">
                <h2 className="text-2xl font-bold text-white mb-2">联系方式</h2>
                <p className="text-gray-400">我们随时为您提供帮助</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {contactInfo.map((item) => (
                  <div key={item.title} className="group flex gap-4 p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/5 hover:border-cyan-500/30">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-shadow">
                      {item.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                      <p className="text-cyan-400 font-medium mb-1 break-all">{item.content}</p>
                      <p className="text-sm text-gray-500">{item.sub}</p>
                    </div>
                  </div>
                ))}
                {/* 在线状态卡片 */}
                <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-lg text-green-400 font-medium">在线服务中</span>
                  </div>
                  <p className="text-gray-400">
                    平均响应时间 <span className="text-white font-medium">2小时</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form - Full Width */}
            <div className="max-w-4xl mx-auto">
              <div className="glass rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/10">
                <h2 className="text-2xl font-bold text-white mb-6">在线留言</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                          姓名 <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          required
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all"
                          placeholder="请输入您的姓名"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                          公司名称
                        </label>
                        <input
                          type="text"
                          id="company"
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all"
                          placeholder="请输入公司名称"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                          邮箱 <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all"
                          placeholder="请输入邮箱地址"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                          电话 <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          required
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all"
                          placeholder="请输入联系电话"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                        感兴趣的服务
                      </label>
                      <select
                        id="service"
                        className="w-full px-4 py-3 pr-10 rounded-xl bg-white/5 border border-white/10 text-white focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all cursor-pointer appearance-none"
                        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%239ca3af'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1.25rem' }}
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      >
                        <option value="" className="bg-gray-900">请选择服务类型</option>
                        <option value="cloud" className="bg-gray-900">云计算服务</option>
                        <option value="ai" className="bg-gray-900">人工智能</option>
                        <option value="bigdata" className="bg-gray-900">大数据分析</option>
                        <option value="security" className="bg-gray-900">网络安全</option>
                        <option value="custom" className="bg-gray-900">软件定制开发</option>
                        <option value="other" className="bg-gray-900">其他</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        留言内容 <span className="text-red-400">*</span>
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all resize-none"
                        placeholder="请描述您的需求或问题..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full relative group px-8 py-4 overflow-hidden rounded-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:shadow-lg hover:shadow-cyan-500/20"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-600 animate-gradient" />
                      <span className="relative flex items-center justify-center gap-2 text-base font-semibold text-white">
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            提交中...
                          </>
                        ) : (
                          <>
                            提交留言
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                          </>
                        )}
                      </span>
                    </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-900/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">常见问题</h2>
              <p className="text-gray-400">快速了解我们的服务</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { q: '如何开始合作？', a: '您可以通过在线留言、电话或邮件联系我们，我们的专业顾问会在24小时内与您取得联系，了解您的需求并提供解决方案。' },
                { q: '项目周期一般多长？', a: '项目周期根据需求复杂度而定，一般小型项目2-4周，中型项目1-3个月，大型项目3-6个月。我们会在需求确认后提供详细的项目计划。' },
                { q: '是否提供售后服务？', a: '是的，我们提供完善的售后服务体系，包括7×24小时技术支持、定期系统维护、功能升级等服务，确保系统稳定运行。' },
                { q: '如何保障数据安全？', a: '我们已通过ISO27001信息安全认证，采用多层安全防护机制，包括数据加密、访问控制、安全审计等，全方位保障您的数据安全。' },
              ].map((item, index) => (
                <div key={index} className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-cyan-500/30 transition-colors">
                  <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-sm font-bold">Q</span>
                    {item.q}
                  </h3>
                  <p className="text-gray-400 leading-relaxed pl-11">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Office Locations */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">办公地点</h2>
              <p className="text-gray-400">全国多地布局，就近为您服务</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { city: '北京', address: '朝阳区建国路88号SOHO现代城A座', type: '总部' },
                { city: '上海', address: '浦东新区陆家嘴环路1000号', type: '分公司' },
                { city: '深圳', address: '南山区科技园南区高新南一道', type: '分公司' },
                { city: '成都', address: '高新区天府大道北段1700号', type: '分公司' },
              ].map((office) => (
                <div key={office.city} className="group p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-cyan-500/30 hover:bg-white/10 transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{office.city}</h3>
                      <span className="text-xs text-cyan-400">{office.type}</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400">{office.address}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
