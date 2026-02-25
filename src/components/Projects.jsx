import { useState } from 'react'
import { Github, ExternalLink, Calendar, X, Award, ChevronLeft, ChevronRight, FileText } from 'lucide-react'

function ProjectModal({ project, isOpen, onClose }) {
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0)
  
  if (!isOpen) return null

  const gallery = project.gallery || [project.image]
  const currentItem = gallery[currentGalleryIndex]
  const isPdf = currentItem.endsWith('.pdf')
  
  const handlePrevGallery = (e) => {
    e.stopPropagation()
    setCurrentGalleryIndex((prev) => prev === 0 ? gallery.length - 1 : prev - 1)
  }
  
  const handleNextGallery = (e) => {
    e.stopPropagation()
    setCurrentGalleryIndex((prev) => prev === gallery.length - 1 ? 0 : prev + 1)
  }

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
          {/* 图片库展示 */}
          <div className="relative h-96 bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center overflow-hidden">
            {isPdf ? (
              <div className="w-full h-full flex flex-col items-center justify-center bg-slate-800">
                <FileText size={80} className="text-slate-500 mb-4" />
                <p className="text-white text-lg mb-4">研究资料</p>
                <a 
                  href={currentItem}
                  download
                  className="flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
                >
                  <FileText size={20} />
                  下载PDF文档
                </a>
              </div>
            ) : (
              <img 
                src={currentItem} 
                alt={`${project.name} - 图片 ${currentGalleryIndex + 1}`}
                className="w-full h-full object-contain"
              />
            )}

            {/* 图片导航 */}
            {gallery.length > 1 && (
              <>
                <button
                  onClick={handlePrevGallery}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors"
                  aria-label="上一张"
                >
                  <ChevronLeft size={32} />
                </button>
                <button
                  onClick={handleNextGallery}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors"
                  aria-label="下一张"
                >
                  <ChevronRight size={32} />
                </button>
                
                {/* 图片指示器 */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-full bg-black/50 text-white text-sm">
                  <span>{currentGalleryIndex + 1}</span>
                  <span className="text-white/60">/</span>
                  <span>{gallery.length}</span>
                </div>
              </>
            )}
          </div>

          {/* 图片缩略图导航 */}
          {gallery.length > 1 && (
            <div className="px-8 py-4 bg-slate-50 dark:bg-slate-700 flex gap-2 overflow-x-auto">
              {gallery.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentGalleryIndex(index)}
                  className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden transition-all ${
                    index === currentGalleryIndex 
                      ? 'ring-2 ring-blue-500 scale-105' 
                      : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  {item.endsWith('.pdf') ? (
                    <div className="w-full h-full bg-slate-600 flex items-center justify-center">
                      <FileText size={24} className="text-white" />
                    </div>
                  ) : (
                    <img src={item} alt={`缩略图 ${index + 1}`} className="w-full h-full object-cover" />
                  )}
                </button>
              ))}
            </div>
          )}

          {/* 详细内容 */}
          <div className="p-8">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">{project.name}</h2>
            
            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 mb-6">
              <Calendar size={16} />
              <span>{project.startDate} ~ {project.endDate}</span>
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
                  {/* 项目头部 - 显示项目图片 */}
                  <div className="relative h-40 overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-4 group">
                    {project.image.endsWith('.pdf') ? (
                      /* PDF项目显示特殊样式 */
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-slate-600 to-slate-800">
                        <FileText size={64} className="text-slate-300 mb-2" />
                        <p className="text-slate-300 text-sm font-semibold">研究资料</p>
                        <p className="text-slate-400 text-xs mt-1">{project.gallery ? project.gallery.length : 1} 份文档</p>
                      </div>
                    ) : (
                      /* 图片项目显示图片 */
                      <>
                        <img 
                          src={project.image} 
                          alt={project.name}
                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent group-hover:from-black/20 transition-colors duration-300"></div>
                      </>
                    )}
                    
                    {/* 状态标签 */}
                    <div className="absolute top-3 right-3 z-10">
                      {project.status === 'ongoing' && (
                        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-500 text-white shadow-lg">
                          进行中
                        </span>
                      )}
                      {project.status === 'completed' && (
                        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-400 text-white shadow-lg">
                          已完成
                        </span>
                      )}
                    </div>

                    {/* 图片计数 */}
                    {project.gallery && project.gallery.length > 1 && (
                      <div className="absolute bottom-3 left-3 px-3 py-1 rounded-lg bg-black/50 text-white text-xs font-semibold backdrop-blur-sm">
                        📸 {project.gallery.length} 张
                      </div>
                    )}
                  </div>

                  {/* 项目信息 */}
                  <div className="p-5">
                    <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 line-clamp-2 group-hover:text-primary dark:group-hover:text-blue-400 transition-colors leading-snug">
                      {project.name}
                    </h3>
                    
                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-2 flex items-center gap-1">
                      <Calendar size={13} />
                      {project.startDate} ~ {project.endDate}
                    </p>

                    <p className="text-slate-700 dark:text-slate-300 text-xs mb-3 line-clamp-1">
                      {project.description}
                    </p>

                    {/* 技术标签 - 最多显示2个 */}
                    <div className="flex flex-wrap gap-1">
                      {project.tags.slice(1, 3).map((tag, index) => (
                        <span 
                          key={index}
                          className="px-2 py-0.5 text-xs rounded-md bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-2 py-0.5 text-xs rounded-md bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400">
                          +{project.tags.length - 2}
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

        {/* 其他项目 - 简洁卡片列表 */}
        {otherProjects.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">其他项目</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project) => (
                <div 
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="group cursor-pointer bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
                >
                  {/* 项目头部 - 显示项目图片 */}
                  <div className="relative h-36 overflow-hidden bg-gradient-to-br from-slate-400 to-slate-600 flex items-center justify-center p-4 group">
                    {project.image.endsWith('.pdf') ? (
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-slate-600 to-slate-800">
                        <FileText size={48} className="text-slate-300 mb-1" />
                        <p className="text-slate-300 text-xs font-semibold">研究资料</p>
                      </div>
                    ) : (
                      <>
                        <img 
                          src={project.image} 
                          alt={project.name}
                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                      </>
                    )}
                  </div>

                  {/* 项目信息 */}
                  <div className="p-5">
                    <h4 className="text-base font-bold text-slate-900 dark:text-white line-clamp-2 group-hover:text-primary dark:group-hover:text-blue-400 transition-colors mb-1 leading-snug">
                      {project.name}
                    </h4>
                    
                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-2 flex items-center gap-1">
                      <Calendar size={12} />
                      {project.startDate} ~ {project.endDate}
                    </p>

                    <p className="text-slate-700 dark:text-slate-300 text-xs line-clamp-1">
                      {project.description}
                    </p>
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
