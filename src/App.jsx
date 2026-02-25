import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Honors from './components/Honors'
import PrivateResources from './components/PrivateResources'
import Footer from './components/Footer'
import Navigation from './components/Navigation'

// 默认数据
const getDefaultData = () => ({
  personal: {
    name: '郭黄与',
    title: '电子科学与技术 | 河海大学',
    bio: '专业排名 1/45，GPA 4.88/5.0。专注于光学系统设计、嵌入式硬件开发与边缘智能计算。',
    location: '江苏·南京',
    email: '2322020114@hhu.edu.cn',
    avatar: 'https://avatars.githubusercontent.com/u/1?v=4',
    social: {
      github: 'https://github.com/17hy',
      linkedin: '',
      twitter: '',
      blog: ''
    }
  },
  skills: [
    { category: '专业技能', items: ['光学理论与仿真', '数字信号处理', '嵌入式系统开发', '电路设计', '电机驱动控制'] },
    { category: '编程语言', items: ['Python', 'C/C++', 'MATLAB', 'Verilog'] },
    { category: '深度学习', items: ['YOLOv8', 'PyTorch', '模型量化', '边缘计算', '计算机视觉'] },
    { category: '开发工具', items: ['Altium Designer', 'COMSOL', 'Simulink', 'Git'] }
  ],
  projects: [
    {
      id: 'oam',
      name: '基于广义相位调控的多边形涡旋光场整形研究',
      description: '第一作者论文（在投）',
      descriptionLong: '提出广义相位模型，实现光场确定性生成',
      image: 'https://via.placeholder.com/400x300?text=OAM+Research',
      tags: ['光学理论', 'MATLAB', '相位调控'],
      github: '',
      demo: '',
      startDate: '2025-10',
      endDate: '至今',
      status: 'ongoing',
      featured: true
    }
  ],
  privateResources: {
    title: '项目资料与成果库',
    description: '包含详细的项目文档、技术报告、论文手稿等',
    accessNote: '如果您对我的项目感兴趣，欢迎申请访问',
    contactEmail: '2322020114@hhu.edu.cn',
    applyCTA: '发送邮件申请'
  }
})

function App() {
  const [isDark, setIsDark] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [portfolioData, setPortfolioData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // 加载配置数据
    const fetchData = async () => {
      try {
        const response = await fetch('/data/portfolio.json')
        const data = await response.json()
        setPortfolioData(data)
      } catch (error) {
        console.error('Failed to load portfolio data:', error)
        // 使用默认数据防止应用崩溃
        setPortfolioData(getDefaultData())
      } finally {
        setLoading(false)
      }
    }

    fetchData()

    // 检查系统主题偏好
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDark(true)
    }
  }, [])

  useEffect(() => {
    // 应用主题
    if (isDark) {
      document.documentElement.classList.add('dark')
      document.documentElement.style.backgroundColor = '#0f172a'
    } else {
      document.documentElement.classList.remove('dark')
      document.documentElement.style.backgroundColor = '#ffffff'
    }
  }, [isDark])

  if (loading || !portfolioData) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white dark:bg-slate-900">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white transition-colors duration-300">
        {/* 导航栏 */}
        <Navigation 
          isDark={isDark} 
          setIsDark={setIsDark}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          data={portfolioData.personal}
        />

        {/* 主要内容 */}
        <main className="overflow-hidden">
          {/* Hero 部分 */}
          <Hero data={portfolioData.personal} />

          {/* 技能部分 */}
          <Skills skills={portfolioData.skills} />

          {/* 项目部分 */}
          <Projects projects={portfolioData.projects} />

          {/* 荣誉奖项部分 */}
          <Honors />

          {/* 私有资料部分 */}
          <PrivateResources data={portfolioData.privateResources} />
        </main>

        {/* 页脚 */}
        <Footer data={portfolioData.personal} />
      </div>
    </div>
  )
}

export default App
