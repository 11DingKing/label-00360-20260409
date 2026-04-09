import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

const services = [
  {
    title: '云计算服务',
    description: '提供公有云、私有云、混合云等多种云计算解决方案，帮助企业构建安全、稳定、弹性的IT基础设施。',
    features: ['弹性计算', '云存储', '容器服务', '云数据库', 'CDN加速', '负载均衡'],
    icon: '☁️',
    gradient: 'from-cyan-500 to-blue-500',
    customIcon: false,
  },
  {
    title: '人工智能',
    description: '运用机器学习、深度学习、自然语言处理等AI技术，为企业打造智能化应用和服务。',
    features: ['智能客服', '图像识别', '语音识别', '预测分析', '智能推荐', 'NLP处理'],
    icon: '',
    gradient: 'from-blue-500 to-indigo-600',
    customIcon: true,
  },
  {
    title: '大数据分析',
    description: '提供数据采集、存储、处理、分析全链路服务，帮助企业挖掘数据价值，实现数据驱动决策。',
    features: ['数据治理', '数据仓库', 'BI报表', '数据挖掘', '实时计算', '数据可视化'],
    icon: '📊',
    gradient: 'from-orange-500 to-red-500',
    customIcon: false,
  },
  {
    title: '网络安全',
    description: '提供全方位安全防护体系，保障企业数字资产安全，防范各类网络威胁。',
    features: ['安全评估', '渗透测试', '安全运维', 'DDoS防护', '数据加密', '合规审计'],
    icon: '🛡️',
    gradient: 'from-green-500 to-emerald-500',
    customIcon: false,
  },
  {
    title: '软件定制开发',
    description: '根据企业业务需求，提供Web应用、移动应用、企业管理系统等软件定制开发服务。',
    features: ['需求分析', 'UI/UX设计', '敏捷开发', '持续交付', '系统集成', '运维支持'],
    icon: '💻',
    gradient: 'from-sky-500 to-blue-500',
    customIcon: false,
  },
  {
    title: 'IT咨询服务',
    description: '为企业提供数字化转型战略规划、技术选型、架构设计等专业咨询服务。',
    features: ['战略规划', '架构设计', '技术选型', '流程优化', '组织变革', '人才培养'],
    icon: '💡',
    gradient: 'from-yellow-500 to-orange-500',
    customIcon: false,
  },
  {
    title: '物联网平台',
    description: '提供设备接入、数据采集、远程控制等物联网整体解决方案，助力企业实现万物互联。',
    features: ['设备管理', '数据采集', '远程控制', '规则引擎', '边缘计算', '可视化大屏'],
    icon: '📡',
    gradient: 'from-teal-500 to-cyan-500',
    customIcon: false,
  },
  {
    title: '区块链服务',
    description: '基于区块链技术提供可信存证、供应链金融、数字资产等创新解决方案。',
    features: ['智能合约', '可信存证', '供应链溯源', '数字资产', '跨链服务', '隐私计算'],
    icon: '🔗',
    gradient: 'from-purple-500 to-pink-500',
    customIcon: false,
  },
  {
    title: '低代码平台',
    description: '通过可视化拖拽方式快速构建企业应用，大幅降低开发门槛，提升交付效率。',
    features: ['可视化设计', '表单引擎', '流程引擎', '报表引擎', '权限管理', '多端适配'],
    icon: '🧩',
    gradient: 'from-rose-500 to-red-500',
    customIcon: false,
  },
  {
    title: 'DevOps服务',
    description: '提供持续集成、持续交付、自动化运维等DevOps全流程解决方案，加速软件交付。',
    features: ['CI/CD流水线', '代码托管', '制品管理', '自动化测试', '监控告警', '日志分析'],
    icon: '🔄',
    gradient: 'from-indigo-500 to-blue-500',
    customIcon: false,
  },
];

// 四角星 AI 图标
const AIStarIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
    <path 
      d="M12 2L13.5 9.5L21 12L13.5 14.5L12 22L10.5 14.5L3 12L10.5 9.5L12 2Z" 
      stroke="white" 
      strokeWidth={1.5} 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="bg-gray-950 min-h-screen">
        {/* Hero */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-cyan-500/10 blur-[150px]" />
          </div>
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 mb-6">
              产品服务
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 whitespace-nowrap">
              全方位
              <span className="gradient-text-blue">技术服务</span>
            </h1>
            <p className="mx-auto max-w-2xl text-sm sm:text-xl text-gray-400">
              依托强大的技术实力，为企业提供从基础设施到智能应用的全栈解决方案
            </p>
          </div>
        </section>

        {/* Services */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {services.map((service) => (
                <div key={service.title} className="group relative">
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                  <div className="relative glass rounded-3xl p-5 sm:p-8 h-full hover:bg-white/5 transition-all duration-500">
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
                      <div className={`flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center text-2xl sm:text-3xl`}>
                        {service.customIcon ? <AIStarIcon /> : service.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-cyan-400 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                          {service.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {service.features.map((feature) => (
                            <span
                              key={feature}
                              className="px-2.5 sm:px-3 py-1 text-xs font-medium text-gray-300 bg-white/5 rounded-full"
                            >
                              {feature}
                            </span>
                          ))}
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
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600" />
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                  backgroundSize: '32px 32px',
                }}
              />
              <div className="relative px-5 py-12 sm:px-16 sm:py-16 text-center">
                <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-white mb-4 whitespace-nowrap">
                  需要定制化解决方案？
                </h2>
                <p className="text-sm sm:text-base text-white/80 mb-6 sm:mb-8 max-w-xl mx-auto">
                  联系我们的专业顾问，获取针对您业务的专属方案
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-gray-900 font-semibold hover:bg-gray-100 transition-colors"
                >
                  立即咨询
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
