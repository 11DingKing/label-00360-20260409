'use client';

import { useToast } from '@/components/ui/Toast';

const cases = [
  {
    title: '某大型银行数字化转型',
    category: '金融科技',
    description: '构建智能风控系统，实现毫秒级风险识别，不良贷款率下降40%',
    stats: { value: '40%', label: '风险降低' },
    gradient: 'from-blue-600 to-cyan-500',
    size: 'large',
  },
  {
    title: '智能制造云平台',
    category: '工业互联网',
    description: '打造工业互联网平台，连接10万+设备',
    stats: { value: '30%', label: '效率提升' },
    gradient: 'from-cyan-500 to-teal-500',
    size: 'small',
  },
  {
    title: '新零售数据中台',
    category: '零售电商',
    description: '统一数据资产，实现精准营销',
    stats: { value: '50%', label: '转化提升' },
    gradient: 'from-orange-500 to-amber-500',
    size: 'small',
  },
  {
    title: '智慧医疗解决方案',
    category: '医疗健康',
    description: '基于AI的辅助诊断系统，服务1000+医疗机构，诊断准确率达98%',
    stats: { value: '98%', label: '诊断准确' },
    gradient: 'from-green-500 to-emerald-500',
    size: 'large',
  },
];

export default function Cases() {
  const { showToast } = useToast();

  const handleCaseClick = (title: string) => {
    showToast(`「${title}」案例详情正在开发中，敬请期待`);
  };

  const handleViewAll = () => {
    showToast('「查看全部案例」功能正在开发中，敬请期待');
  };

  return (
    <section className="relative py-32 bg-gray-950 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 mb-6">
              成功案例
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              客户成功故事
            </h2>
            <p className="text-lg text-gray-400 max-w-xl">
              携手行业领先企业，共同探索数字化转型最佳实践
            </p>
          </div>
          <button
            onClick={handleViewAll}
            className="mt-6 md:mt-0 inline-flex items-center gap-2 text-cyan-400 font-medium hover:text-cyan-300 transition-colors"
          >
            查看全部案例
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        {/* Cases grid - Bento style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((item) => (
            <div
              key={item.title}
              className={`group relative rounded-3xl overflow-hidden cursor-pointer ${
                item.size === 'large' ? 'lg:col-span-2 lg:row-span-1' : ''
              }`}
              onClick={() => handleCaseClick(item.title)}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-80`} />
              
              {/* Pattern overlay */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                  backgroundSize: '24px 24px',
                }}
              />

              {/* Content */}
              <div className="relative p-8 h-full min-h-[280px] flex flex-col justify-between">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-white/20 text-white mb-4">
                    {item.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="flex items-end justify-between mt-6">
                  <div>
                    <div className="text-4xl font-bold text-white">{item.stats.value}</div>
                    <div className="text-sm text-white/70">{item.stats.label}</div>
                  </div>
                  <button className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-colors group-hover:scale-110 transform duration-300">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-20 text-center">
          <p className="text-gray-500 mb-8">受到行业领先企业信赖</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50">
            {['企业A', '企业B', '企业C', '企业D', '企业E'].map((name) => (
              <div key={name} className="text-2xl font-bold text-gray-600">
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
