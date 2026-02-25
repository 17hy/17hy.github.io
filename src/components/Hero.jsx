import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react'

function Hero({ data }) {
  return (
    <section className="min-h-screen pt-24 pb-12 bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 flex items-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* 左侧：文本内容 */}
          <div className="space-y-6 animate-fade-in">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                {data.name}
              </h1>
              <p className="text-2xl text-primary dark:text-blue-400 font-semibold mb-4">
                {data.title}
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                {data.bio}
              </p>
            </div>

            {/* 个人信息 */}
            <div className="flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
              <span>📍 {data.location}</span>
              <span>✉️ {data.email}</span>
            </div>

            {/* 社交媒体链接 */}
            <div className="flex gap-4">
              {data.social.github && (
                <a 
                  href={data.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-slate-200 dark:bg-slate-700 hover:bg-primary hover:text-white dark:hover:bg-primary transition-all transform hover:scale-110"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
              )}
              {data.social.linkedin && (
                <a 
                  href={data.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-slate-200 dark:bg-slate-700 hover:bg-primary hover:text-white dark:hover:bg-primary transition-all transform hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              )}
              {data.email && (
                <a 
                  href={`mailto:${data.email}`}
                  className="p-3 rounded-lg bg-slate-200 dark:bg-slate-700 hover:bg-primary hover:text-white dark:hover:bg-primary transition-all transform hover:scale-110"
                  aria-label="邮件"
                >
                  <Mail size={20} />
                </a>
              )}
            </div>

            {/* CTA按钮 */}
            <div className="flex gap-4 pt-4">
              <a 
                href="#projects"
                className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-blue-600 dark:hover:bg-blue-500 transition-colors"
              >
                查看作品
              </a>
              <a 
                href={data.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-primary text-primary dark:border-blue-400 dark:text-blue-400 rounded-lg font-semibold hover:bg-primary hover:text-white dark:hover:bg-blue-400 dark:hover:text-slate-900 transition-colors flex items-center gap-2"
              >
                GitHub <ExternalLink size={16} />
              </a>
            </div>
          </div>

          {/* 右侧：头像 */}
          <div className="flex justify-center items-center animate-slide-up">
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <img 
                src={data.avatar} 
                alt={data.name}
                className="relative w-full h-full object-cover rounded-full border-4 border-white dark:border-slate-800 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
