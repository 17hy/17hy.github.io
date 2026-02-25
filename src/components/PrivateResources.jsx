import { Lock, Mail, ExternalLink } from 'lucide-react'

function PrivateResources({ data }) {
  return (
    <section id="resources" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-900 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4">项目资料库</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden">
            {/* 头部 */}
            <div className="px-8 py-12 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center">
              <div className="flex justify-center mb-4">
                <Lock size={48} />
              </div>
              <h3 className="text-3xl font-bold mb-2">{data.title}</h3>
              <p className="text-blue-100 text-lg">{data.description}</p>
            </div>

            {/* 内容 */}
            <div className="px-8 py-12">
              <p className="text-slate-600 dark:text-slate-400 mb-8 text-center text-lg">
                {data.accessNote}
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4 p-4 bg-blue-50 dark:bg-slate-700 rounded-lg">
                  <span className="text-2xl mt-1">📚</span>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-1">项目文档</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">完整的设计文档、技术方案和实现细节</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-purple-50 dark:bg-slate-700 rounded-lg">
                  <span className="text-2xl mt-1">💻</span>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-1">源代码</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">完整的项目源代码（如果非公开项目）</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-pink-50 dark:bg-slate-700 rounded-lg">
                  <span className="text-2xl mt-1">📊</span>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-1">案例分析</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">项目成果、性能数据和优化方案</p>
                  </div>
                </div>
              </div>

              {/* 访问方式 */}
              <div className="flex flex-col gap-4 pt-8 border-t border-slate-200 dark:border-slate-700">
                {data.applyLink && (
                  <a 
                    href={data.applyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 px-6 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:shadow-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <ExternalLink size={20} />
                    {data.applyCTA || '申请访问'}
                  </a>
                )}

                {data.contactEmail && (
                  <a 
                    href={`mailto:${data.contactEmail}`}
                    className="w-full py-4 px-6 rounded-lg border-2 border-primary dark:border-blue-400 text-primary dark:text-blue-400 font-semibold hover:bg-blue-50 dark:hover:bg-slate-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <Mail size={20} />
                    通过邮件申请
                  </a>
                )}
              </div>

              {/* 联系信息 */}
              {data.contactEmail && (
                <div className="mt-8 p-4 bg-slate-100 dark:bg-slate-700 rounded-lg text-center text-sm text-slate-600 dark:text-slate-400">
                  <p>📧 申请邮箱：<strong className="text-slate-900 dark:text-white">{data.contactEmail}</strong></p>
                  <p className="mt-2 text-xs">通常在 24-48 小时内回复</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PrivateResources
