'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useToast } from '@/components/ui/Toast';

const newsList = [
  {
    id: 1,
    title: '公司荣获2025年度最佳科技创新企业奖',
    shortTitle: '荣获2025最佳科技创新企业奖',
    date: '2025-01-15',
    category: '公司新闻',
    excerpt: '在刚刚结束的行业峰会上，我公司凭借卓越的技术创新能力和优质的客户服务，荣获"2025年度最佳科技创新企业"称号。',
    gradient: 'from-cyan-500 to-blue-500',
    featured: true,
  },
  {
    id: 2,
    title: '新一代AI智能平台正式发布',
    date: '2025-01-10',
    category: '产品动态',
    excerpt: '经过一年的研发，我们全新的AI智能平台正式上线，为企业提供更强大的智能化能力。',
    gradient: 'from-blue-500 to-indigo-500',
    featured: false,
  },
  {
    id: 3,
    title: '与某知名企业达成战略合作',
    date: '2025-01-05',
    category: '公司新闻',
    excerpt: '近日，我公司与某知名企业签署战略合作协议，双方将在数字化转型领域展开深度合作。',
    gradient: 'from-green-500 to-emerald-500',
    featured: false,
  },
  {
    id: 4,
    title: '2024年度技术白皮书发布',
    date: '2024-12-28',
    category: '行业资讯',
    excerpt: '我们发布了2024年度技术白皮书，深入分析了企业数字化转型的趋势和最佳实践。',
    gradient: 'from-orange-500 to-red-500',
    featured: false,
  },
  {
    id: 5,
    title: '云原生架构最佳实践分享',
    date: '2024-12-20',
    category: '技术博客',
    excerpt: '本文将分享我们在云原生架构设计和实施过程中的经验和最佳实践。',
    gradient: 'from-teal-500 to-cyan-500',
    featured: false,
  },
  {
    id: 6,
    title: '成功举办企业数字化转型峰会',
    date: '2024-12-15',
    category: '公司新闻',
    excerpt: '由我公司主办的"2024企业数字化转型峰会"圆满落幕，吸引了超过500位行业专家参与。',
    gradient: 'from-sky-500 to-blue-500',
    featured: false,
  },
  {
    id: 7,
    title: '获得ISO27001信息安全认证',
    date: '2024-12-10',
    category: '公司新闻',
    excerpt: '我公司正式通过ISO27001信息安全管理体系认证，标志着公司信息安全管理水平达到国际标准。',
    gradient: 'from-purple-500 to-pink-500',
    featured: false,
  },
  {
    id: 8,
    title: '大数据平台3.0版本上线',
    date: '2024-12-05',
    category: '产品动态',
    excerpt: '全新升级的大数据平台3.0版本正式发布，性能提升50%，支持更多数据源接入。',
    gradient: 'from-amber-500 to-orange-500',
    featured: false,
  },
  {
    id: 9,
    title: '入选国家高新技术企业名单',
    date: '2024-11-28',
    category: '公司新闻',
    excerpt: '我公司成功入选2024年度国家高新技术企业名单，彰显了公司在技术创新领域的实力。',
    gradient: 'from-rose-500 to-red-500',
    featured: false,
  },
  {
    id: 10,
    title: '微服务架构实战指南发布',
    date: '2024-11-20',
    category: '技术博客',
    excerpt: '基于多年项目经验，我们整理发布了微服务架构实战指南，帮助企业更好地进行架构升级。',
    gradient: 'from-indigo-500 to-purple-500',
    featured: false,
  },
  {
    id: 11,
    title: '智能客服系统全新升级',
    date: '2024-11-15',
    category: '产品动态',
    excerpt: '智能客服系统2.0版本上线，新增多轮对话、情感分析等功能，客户满意度提升30%。',
    gradient: 'from-cyan-500 to-teal-500',
    featured: false,
  },
  {
    id: 12,
    title: '荣获最佳雇主品牌奖',
    date: '2024-11-10',
    category: '公司新闻',
    excerpt: '在2024年度人力资源峰会上，我公司荣获"最佳雇主品牌奖"，彰显了公司优秀的企业文化。',
    gradient: 'from-pink-500 to-rose-500',
    featured: false,
  },
  {
    id: 13,
    title: 'DevOps最佳实践白皮书',
    date: '2024-11-05',
    category: '技术博客',
    excerpt: '分享我们在DevOps实践中的经验总结，包括CI/CD流程优化、自动化测试等内容。',
    gradient: 'from-blue-500 to-cyan-500',
    featured: false,
  },
  {
    id: 14,
    title: '与高校建立产学研合作',
    date: '2024-10-28',
    category: '公司新闻',
    excerpt: '我公司与多所知名高校签署产学研合作协议，共同培养数字化人才，推动技术创新。',
    gradient: 'from-emerald-500 to-green-500',
    featured: false,
  },
  {
    id: 15,
    title: '低代码平台正式发布',
    date: '2024-10-20',
    category: '产品动态',
    excerpt: '全新低代码开发平台上线，让业务人员也能快速构建应用，开发效率提升80%。',
    gradient: 'from-violet-500 to-purple-500',
    featured: false,
  },
  {
    id: 16,
    title: '数据安全合规指南发布',
    date: '2024-10-15',
    category: '行业资讯',
    excerpt: '针对最新数据安全法规，我们发布了企业数据安全合规指南，助力企业合规经营。',
    gradient: 'from-red-500 to-orange-500',
    featured: false,
  },
  {
    id: 17,
    title: '成功服务500+企业客户',
    date: '2024-10-10',
    category: '公司新闻',
    excerpt: '截至2024年10月，我公司累计服务企业客户突破500家，覆盖金融、制造、零售等多个行业。',
    gradient: 'from-yellow-500 to-amber-500',
    featured: false,
  },
  {
    id: 18,
    title: 'Kubernetes实战经验分享',
    date: '2024-10-05',
    category: '技术博客',
    excerpt: '深入分享Kubernetes在生产环境中的部署、运维和优化经验，助力企业容器化转型。',
    gradient: 'from-sky-500 to-indigo-500',
    featured: false,
  },
  {
    id: 19,
    title: '智慧园区解决方案发布',
    date: '2024-09-28',
    category: '产品动态',
    excerpt: '面向产业园区推出智慧园区整体解决方案，涵盖智能安防、能源管理、访客系统等模块。',
    gradient: 'from-teal-500 to-emerald-500',
    featured: false,
  },
  {
    id: 20,
    title: '参加全球开发者大会',
    date: '2024-09-20',
    category: '公司新闻',
    excerpt: '我公司技术团队受邀参加全球开发者大会，分享云原生和AI领域的最新技术成果。',
    gradient: 'from-fuchsia-500 to-pink-500',
    featured: false,
  },
  {
    id: 21,
    title: 'API网关产品全新升级',
    date: '2024-09-15',
    category: '产品动态',
    excerpt: 'API网关3.0版本发布，支持更多协议、更强的限流能力和更完善的监控功能。',
    gradient: 'from-orange-500 to-yellow-500',
    featured: false,
  },
];

export default function NewsPage() {
  const { showToast } = useToast();
  const featuredNews = newsList.find((n) => n.featured);
  const otherNews = newsList.filter((n) => !n.featured);

  const handleNewsClick = (title: string) => {
    showToast(`「${title}」详情正在开发中，敬请期待`);
  };

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
              新闻动态
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 whitespace-nowrap">
              最新
              <span className="gradient-text-blue">资讯</span>
            </h1>
            <p className="mx-auto max-w-2xl text-base sm:text-xl text-gray-400 whitespace-nowrap">
              了解公司最新动态、产品发布和行业前沿资讯
            </p>
          </div>
        </section>

        {/* News List */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* News Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* Featured */}
              {featuredNews && (
                <div 
                  className="lg:col-span-2 lg:row-span-2 cursor-pointer"
                  onClick={() => handleNewsClick(featuredNews.title)}
                >
                  <article className="group relative h-full rounded-2xl sm:rounded-3xl overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${featuredNews.gradient}`} />
                    <div
                      className="absolute inset-0 opacity-20"
                      style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                        backgroundSize: '24px 24px',
                      }}
                    />
                    <div className="relative h-full min-h-[280px] sm:min-h-[500px] p-5 sm:p-10 flex flex-col justify-end">
                      <span className="inline-block w-fit px-3 py-1 rounded-full text-xs font-medium bg-white/20 text-white mb-3 sm:mb-4">
                        {featuredNews.category}
                      </span>
                      <h2 className="text-lg sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 group-hover:text-white/90 transition-colors line-clamp-2">
                        <span className="sm:hidden">{featuredNews.shortTitle || featuredNews.title}</span>
                        <span className="hidden sm:inline">{featuredNews.title}</span>
                      </h2>
                      <p className="text-xs sm:text-base text-white/80 mb-4 sm:mb-6 max-w-xl line-clamp-2">{featuredNews.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <time className="text-xs sm:text-sm text-white/60">{featuredNews.date}</time>
                        <span className="inline-flex items-center gap-2 text-sm sm:text-base text-white font-medium group-hover:gap-3 transition-all">
                          阅读全文
                          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </article>
                </div>
              )}

              {/* Other news */}
              {otherNews.map((news) => (
                <article
                  key={news.id}
                  className="group glass rounded-2xl overflow-hidden hover:bg-white/5 transition-colors cursor-pointer"
                  onClick={() => handleNewsClick(news.title)}
                >
                  <div className={`h-2 bg-gradient-to-r ${news.gradient}`} />
                  <div className="p-5 sm:p-6">
                    <div className="flex items-center gap-3 mb-3 sm:mb-4">
                      <span className="text-xs font-medium text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded">
                        {news.category}
                      </span>
                      <time className="text-xs sm:text-sm text-gray-500">{news.date}</time>
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                      {news.title}
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm line-clamp-2 mb-3 sm:mb-4">{news.excerpt}</p>
                    <span className="inline-flex items-center gap-2 text-xs sm:text-sm text-gray-400 group-hover:text-cyan-400 transition-colors">
                      阅读更多
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
