import { useState } from 'react'
import { Github, ExternalLink, Calendar, X, Award } from 'lucide-react'

function ProjectModal({ project, isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in" onClick={onClose}>
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-slate-800 rounded-2xl shadow-2xl overflow-hidden animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 关闭按钮 */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
          aria-label="关闭"
        >
          <X size={24} />
        </button>

        {/* 内容区域 */}
        <div className="overflow-y-auto max-h-[90vh]">
          {/* 顶部图片/横幅 */}
          <div className="relative h-64 bg-gradient-to-br from-blue-500 to-purple-600">
            <img 
              src={project.image} 
              alt={project.name}
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <h2 className="text-3xl font-bold text-white mb-2">{project.name}</h2>
              <div className="flex items-center gap-2 text-white/90">
                <Calendar size={16} />
                <span className="text-sm">{project.startDate} ~ {project.endDate}</span>
                {project.status === 'ongoing' && (
                  <span className="ml-3 px-3 py-1 text-xs font-semibold rounded-full bg-green-500/80 text-white">
                    进行中
                  </span>
                )}
                {project.status === 'completed' && (
                  <span className="ml-3 px-3 py-1 text-xs font-semibold rounded-full bg-blue-500/80 text-white">
                    已完成
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* 详细内容 */}
          <div className="p-8">
            {/* 简短描述 */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">项目概述</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* 详细描述 */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">详细说明</h3>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line">
                {project.descriptionLong}
              </p>
            </div>

            {/* 技术栈 */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">技术栈</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 text-sm rounded-lg bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* 项目链接 */}
            {(project.github || project.demo) && (
              <div className="pt-6 border-t border-slate-200 dark:border-slate-700">
                <div className="flex gap-4">
                  {project.github && (
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-slate-900 dark:bg-slate-700 text-white hover:bg-primary dark:hover:bg-blue-500 transition-colors font-semibold"
                    >
                      <Github size={20} /> 查看源代码
                    </a>
                  )}
                  {project.demo && (
                    <a 
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border-2 border-primary text-primary dark:border-blue-400 dark:text-blue-400 hover:bg-primary hover:text-white dark:hover:bg-blue-400 dark:hover:text-slate-900 transition-colors font-semibold"
                    >
                      <ExternalLink size={20} /> 在线演示
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function Projects({ projects }) {
  const [selectedProject, setSelectedProject] = useState(null)
  const featuredProjects = projects.filter(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold mb-4">项目经历</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            点击项目卡片查看详细信息
          </p>
        </div>

        {/* 主要项目 - 网格布局 */}
        {featuredProjects.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white flex items-center gap-2">
              <Award className="text-yellow-500" size={28} />
              核心项目
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map((project) => (
                <div 
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="group cursor-pointer bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
                >
                  {/* 项目图片 */}
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600">
                    <img 
                      src={project.image} 
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300"></div>
                    
                    {/* 状态标签 */}
                    <div className="absolute top-3 right-3">
                      {project.status === 'ongoing' && (
                        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-500 text-white shadow-lg">
                          进行中
                        </span>
                      )}
                      {project.status === 'completed' && (
                        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-500 text-white shadow-lg">
                          已完成
                        </span>
                      )}
                    </div>
                  </div>

                  {/* 项目信息 */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 line-clamp-3 group-hover:text-primary dark:group-hover:text-blue-400 transition-colors">
                      {project.name}
                    </h3>
                    
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-3 flex items-center gap-2">
                      <Calendar size={14} />
                      {project.startDate} ~ {project.endDate}
                    </p>

                    <p className="text-slate-700 dark:text-slate-300 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* 技术标签 - 最多显示3个 */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 3).map((tag, index) => (
                        <span 
                          key={index}
                          className="px-2 py-1 text-xs rounded-md bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-2 py-1 text-xs rounded-md bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>

                    {/* 查看详情提示 */}
                    <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                      <span className="text-sm text-primary dark:text-blue-400 font-semibold group-hover:underline">
                        点击查看详情 →
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 其他项目 - 紧凑列表 */}
        {otherProjects.length > 0 && (
          <div>
            <h3 className="text-xl font-bold mb-6 text-slate-900 dark:text-white">其他项目</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {otherProjects.map((project) => (
                <div 
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="group cursor-pointer p-5 bg-white dark:bg-slate-800 rounded-lg shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white group-hover:text-primary dark:group-hover:text-blue-400 transition-colors line-clamp-1">
                      {project.name}
                    </h4>
                    <Calendar size={16} className="text-slate-400 mt-1 flex-shrink-0 ml-2" />
                  </div>
                  
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                    {project.startDate} ~ {project.endDate}
                  </p>

                  <p className="text-slate-700 dark:text-slate-300 text-sm line-clamp-2 mb-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 4).map((tag, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 text-xs rounded-md bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* 项目详情模态框 */}
      <ProjectModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  )
}

export default Projects
