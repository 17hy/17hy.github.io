function Skills({ skills }) {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-800 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4">技能与擅长</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillGroup, index) => (
            <div 
              key={index}
              className="group p-6 bg-slate-50 dark:bg-slate-700 rounded-lg hover:shadow-lg dark:hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold mb-4 text-primary dark:text-blue-400">
                {skillGroup.category}
              </h3>
              <div className="space-y-2">
                {skillGroup.items.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="flex items-center gap-2 text-slate-700 dark:text-slate-300 text-sm"
                  >
                    <span className="w-2 h-2 rounded-full bg-primary dark:bg-blue-400"></span>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
