import { Github, Linkedin, Mail, Heart } from 'lucide-react'

function Footer({ data }) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 dark:bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          {/* 关于 */}
          <div>
            <h3 className="text-xl font-bold mb-4">关于我</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              {data.bio}
            </p>
          </div>

          {/* 快速链接 */}
          <div>
            <h3 className="text-xl font-bold mb-4">快速链接</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">主页</a></li>
              <li><a href="#skills" className="text-slate-400 hover:text-white transition-colors">技能</a></li>
              <li><a href="#projects" className="text-slate-400 hover:text-white transition-colors">项目</a></li>
              <li><a href="#honors" className="text-slate-400 hover:text-white transition-colors">荣誉</a></li>
              <li><a href="#resources" className="text-slate-400 hover:text-white transition-colors">资料库</a></li>
            </ul>
          </div>

          {/* 社交媒体 */}
          <div>
            <h3 className="text-xl font-bold mb-4">联系我</h3>
            <div className="flex gap-4">
              {data.social.github && (
                <a 
                  href={data.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-800 hover:bg-primary transition-colors"
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
                  className="p-2 rounded-lg bg-slate-800 hover:bg-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              )}
              {data.email && (
                <a 
                  href={`mailto:${data.email}`}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-primary transition-colors"
                  aria-label="邮件"
                >
                  <Mail size={20} />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* 分隔线 */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
            <p className="flex items-center gap-1 mb-4 md:mb-0">
              © {currentYear} {data.name}. 
              <span className="flex items-center gap-1">
                Made with <Heart size={14} className="text-red-500" />
              </span>
            </p>
            <p className="text-xs">
              Built with React • Vite • Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
