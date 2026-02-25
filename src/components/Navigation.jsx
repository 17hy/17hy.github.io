import { useState } from 'react'
import { Menu, X, Moon, Sun } from 'lucide-react'

function Navigation({ isDark, setIsDark, isMenuOpen, setIsMenuOpen, data }) {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a 
            href="#" 
            className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            17hy
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#skills" className="hover:text-primary transition-colors">技能</a>
            <a href="#projects" className="hover:text-primary transition-colors">项目</a>
            <a href="#honors" className="hover:text-primary transition-colors">荣誉</a>
            <a href="#resources" className="hover:text-primary transition-colors">资料</a>
          </div>

          {/* Theme Toggle & Menu */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              aria-label="切换主题"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
              aria-label="菜单"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-slate-200 dark:border-slate-800">
            <a href="#skills" className="block py-2 hover:text-primary transition-colors">技能</a>
            <a href="#projects" className="block py-2 hover:text-primary transition-colors">项目</a>
            <a href="#honors" className="block py-2 hover:text-primary transition-colors">荣誉</a>
            <a href="#resources" className="block py-2 hover:text-primary transition-colors">资料</a>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
