'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import { useToast } from '@/components/ui/Toast';

const solutions = [
  {
    title: '金融科技解决方案',
    description: '为银行、保险、证券等金融机构提供安全合规的数字化转型方案，提升业务效率和客户体验。',
    features: ['智能风控系统', '数字化营销', '客户360视图', '合规管理', '反欺诈检测'],
    icon: '🏦',
    gradient: 'from-blue-600 to-cyan-500',
    stats: { value: '40%', label: '风险降低' },
  },
  {
    title: '智能制造解决方案',
    description: '为制造企业提供智能制造、工业互联网、供应链管理等全方位数字化解决方案。',
    features: ['智能生产调度', '设备预测维护', '质量追溯', '供应链协同', 'MES系统'],
    icon: '🏭',
    gradient: 'from-blue-600 to-indigo-500',
    stats: { value: '30%', label: '效率提升' },
  },
  {
    title: '新零售解决方案',
    description: '帮助零售企业构建全渠道运营能力，实现线上线下融合，提升客户体验。',
    features: ['全渠道中台', '智能推荐', '会员管理', '库存优化', '数据分析'],
    icon: '🛒',
    gradient: 'from-orange-500 to-red-500',
    stats: { value: '50%', label: '转化提升' },
  },
  {
    title: '智慧医疗解决方案',
    description: '为医疗机构提供智慧医疗解决方案，提升医疗服务质量和管理效率。',
    features: ['电子病历', '智能诊断', '医院运营', '远程医疗', '健康管理'],
    icon: '🏥',
    gradient: 'from-green-500 to-emerald-500',
    stats: { value: '98%', label: '诊断准确' },
  },
  {
    title: '智慧教育解决方案',
    description: '为教育机构提供智慧教育解决方案，推动教育数字化转型和教学模式创新。',
    features: ['在线教学', '智能学习', '教务管理', '校园一卡通', '数据分析'],
    icon: '🎓',
    gradient: 'from-teal-500 to-cyan-500',
    stats: { value: '60%', label: '效率提升' },
  },
  {
    title: '智慧政务解决方案',
    description: '为政府部门提供数字政务解决方案，提升政务服务效率和群众满意度。',
    features: ['一网通办', '数据共享', '智慧城市', '应急指挥', '政务大数据'],
    icon: '🏛️',
    gradient: 'from-cyan-500 to-blue-500',
    stats: { value: '80%', label: '效率提升' },
  },
];

export default function SolutionsPage() {
  const { showToast } = useToast();

  const handleLearnMore = (title: string) => {
    showToast(`「${title}」详情正在开发中，敬请期待`);
  };

  return (
    <>
      <Header />
      <main className="bg-gray-950 min-h-screen">
        {/* Hero */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-blue-500/10 blur-[150px]" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-cyan-500/10 blur-[120px]" />
          </div>
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 mb-6">
              解决方案
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 whitespace-nowrap">
              行业
              <span className="gradient-text">专属方案</span>
            </h1>
            <p className="mx-auto max-w-2xl text-base sm:text-xl text-gray-400 whitespace-nowrap">
              针对不同行业特点，提供专业的数字化转型解决方案
            </p>
          </div>
        </section>

        {/* Solutions */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-20">
              {solutions.map((solution, index) => (
                <div
                  key={solution.title}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-5xl">{solution.icon}</span>
                      <div>
                        <h3 className="text-3xl font-bold text-white">{solution.title}</h3>
                      </div>
                    </div>
                    <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                      {solution.description}
                    </p>
                    <div className="flex flex-wrap gap-3 mb-8">
                      {solution.features.map((feature) => (
                        <span
                          key={feature}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 text-gray-300 text-sm"
                        >
                          <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </span>
                      ))}
                    </div>
                    <button
                      onClick={() => handleLearnMore(solution.title)}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
                    >
                      了解详情
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>

                  {/* Visual */}
                  <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className={`absolute inset-0 bg-gradient-to-r ${solution.gradient} rounded-3xl blur-2xl opacity-20`} />
                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient}`} />
                      <div
                        className="absolute inset-0 opacity-20"
                        style={{
                          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                          backgroundSize: '24px 24px',
                        }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <span className="text-8xl opacity-50">{solution.icon}</span>
                          <div className="mt-6 glass rounded-2xl px-6 py-4 inline-block">
                            <div className="text-4xl font-bold text-white">{solution.stats.value}</div>
                            <div className="text-sm text-white/70">{solution.stats.label}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gray-900" />
              <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full bg-cyan-500/20 blur-[100px]" />
                <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full bg-blue-500/20 blur-[80px]" />
              </div>
              <div className="relative px-6 py-16 sm:px-16 sm:py-20 text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 whitespace-nowrap">
                  没有找到适合的方案？
                </h2>
                <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                  我们可以根据您的具体需求，定制专属解决方案
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
                >
                  联系我们
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
