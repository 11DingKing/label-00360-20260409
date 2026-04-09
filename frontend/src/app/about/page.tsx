import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const timeline = [
  { year: '2015', title: '公司成立', desc: '在北京成立，开启科技创新之旅' },
  { year: '2017', title: '业务拓展', desc: '服务客户突破100家，团队扩展至50人' },
  { year: '2019', title: '技术突破', desc: '自主研发AI平台上线，获得多项专利' },
  { year: '2021', title: '全国布局', desc: '在上海、深圳、成都设立分公司' },
  { year: '2023', title: '行业领先', desc: '服务客户超500家，成为行业标杆' },
  { year: '2025', title: '全球化', desc: '开启国际化战略，服务全球客户' },
];

const team = [
  { name: '张三', role: 'CEO', desc: '20年行业经验，前大厂高管' },
  { name: '李四', role: 'CTO', desc: '技术专家，多项专利发明人' },
  { name: '王五', role: 'COO', desc: '资深运营专家，MBA背景' },
  { name: '赵六', role: 'CFO', desc: '金融行业背景，CPA持证' },
];

const values = [
  { icon: '🚀', title: '创新', desc: '持续探索前沿技术，引领行业发展' },
  { icon: '🎯', title: '专业', desc: '深耕技术领域，提供专业解决方案' },
  { icon: '🤝', title: '诚信', desc: '以诚待人，以信立业，赢得客户信赖' },
  { icon: '🌟', title: '共赢', desc: '与客户共同成长，创造持续价值' },
];

export default function AboutPage() {
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
              关于我们
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 whitespace-nowrap">
              用科技创造
              <span className="gradient-text-blue">无限可能</span>
            </h1>
            <p className="mx-auto max-w-2xl text-sm sm:text-xl text-gray-400">
              我们是一家专注于企业数字化转型的科技公司，致力于用技术创新推动企业发展
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: '使命', content: '用科技创新推动企业数字化转型，助力客户实现业务增长', gradient: 'from-cyan-500 to-blue-500' },
                { title: '愿景', content: '成为最受信赖的企业数字化服务商，引领行业发展', gradient: 'from-blue-500 to-indigo-500' },
                { title: '价值观', content: '创新、专业、诚信、共赢', gradient: 'from-teal-500 to-cyan-500' },
              ].map((item) => (
                <div key={item.title} className="relative group">
                  <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity`} />
                  <div className="relative glass rounded-3xl p-8 h-full hover:bg-white/5 transition-colors">
                    <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-gray-900/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">核心价值观</h2>
              <p className="text-gray-400">指引我们前行的信念</p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((item) => (
                <div key={item.title} className="text-center p-8 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors">
                  <span className="text-5xl mb-4 block">{item.icon}</span>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 mb-6">
                发展历程
              </span>
              <h2 className="text-4xl font-bold text-white">十年砥砺前行</h2>
            </div>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500 via-blue-500 to-teal-500 hidden md:block" />
              
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div key={item.year} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                      <div className="glass rounded-2xl p-6 hover:bg-white/5 transition-colors">
                        <span className="text-3xl font-bold gradient-text-blue">{item.year}</span>
                        <h3 className="text-xl font-semibold text-white mt-2">{item.title}</h3>
                        <p className="text-gray-400 mt-1">{item.desc}</p>
                      </div>
                    </div>
                    <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-cyan-500 border-4 border-gray-950 hidden md:block" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 bg-gray-900/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 mb-6">
                核心团队
              </span>
              <h2 className="text-4xl font-bold text-white">专业的领导团队</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member) => (
                <div key={member.name} className="group text-center">
                  <div className="relative w-40 h-40 mx-auto mb-6">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" style={{ animationDuration: '8s' }} />
                    <div className="absolute inset-1 rounded-full bg-gray-900 flex items-center justify-center">
                      <span className="text-5xl font-bold gradient-text-blue">{member.name.charAt(0)}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                  <p className="text-cyan-400 font-medium">{member.role}</p>
                  <p className="text-sm text-gray-400 mt-2">{member.desc}</p>
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
