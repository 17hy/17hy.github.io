import { Award, Trophy, Star } from 'lucide-react'

function Honors() {
  const honors = [
    {
      name: '2025年国家奖学金',
      level: '国家级',
      year: '2025',
      type: 'scholarship'
    },
    {
      name: '第十九届"挑战杯"全国大学生课外学术科技作品竞赛"揭榜挂帅"专项赛',
      level: '全国三等奖',
      year: '2024',
      type: 'competition'
    },
    {
      name: '2025年度中国青年科技创新"揭榜挂帅"擂台赛',
      level: '全国三等奖',
      year: '2025',
      type: 'competition'
    },
    {
      name: '全国大学生智能汽车竞赛',
      level: '华东赛区二等奖',
      year: '2025',
      type: 'competition'
    },
    {
      name: '全球校园人工智能算法精英大赛',
      level: '江苏省二等奖',
      year: '2025',
      type: 'competition'
    },
    {
      name: '第十二届"大唐杯"全国大学生新一代信息通信技术大赛ICT通识赛',
      level: '赛区三等奖',
      year: '2025',
      type: 'competition'
    },
    {
      name: '发明专利：汽轮机内部检测装置',
      level: '第一发明人',
      year: '2025',
      type: 'patent'
    }
  ]

  const getIcon = (type) => {
    switch (type) {
      case 'scholarship':
        return <Star size={24} className="text-yellow-500" />
      case 'patent':
        return <Award size={24} className="text-purple-500" />
      default:
        return <Trophy size={24} className="text-blue-500" />
    }
  }

  const getTypeLabel = (type) => {
    switch (type) {
      case 'scholarship':
        return '奖学金'
      case 'patent':
        return '知识产权'
      default:
        return '竞赛奖项'
    }
  }

  return (
    <section id="honors" className="py-20 bg-white dark:bg-slate-800 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4">荣誉与奖项</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {honors.map((honor, index) => (
            <div 
              key={index}
              className="group p-6 bg-slate-50 dark:bg-slate-700 rounded-lg border border-slate-200 dark:border-slate-600 hover:shadow-lg dark:hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  {getIcon(honor.type)}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-base font-semibold text-slate-900 dark:text-white leading-tight">
                      {honor.name}
                    </h3>
                    <span className="flex-shrink-0 ml-4 text-sm font-medium text-slate-500 dark:text-slate-400">
                      {honor.year}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                      {honor.level}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      {getTypeLabel(honor.type)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 统计信息 */}
        <div className="mt-12 grid grid-cols-3 gap-6 text-center">
          <div className="p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20 rounded-lg">
            <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">3</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">国家级奖项</div>
          </div>
          <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">5</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">竞赛获奖</div>
          </div>
          <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-lg">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">1</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">发明专利</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Honors
