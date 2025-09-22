const SkillsCircle = () => {
  const skills = [
    { name: 'React', icon: '⚛️', color: '#61DAFB' },
    { name: 'Node.js', icon: '🟢', color: '#339933' },
    { name: 'AWS', icon: '☁️', color: '#FF9900' },
    { name: 'Docker', icon: '🐳', color: '#2496ED' },
    { name: 'MongoDB', icon: '🍃', color: '#47A248' },
    { name: 'JavaScript', icon: '🟨', color: '#F7DF1E' },
    { name: 'Python', icon: '🐍', color: '#3776AB' },
    { name: 'Kubernetes', icon: '⚙️', color: '#326CE5' },
    { name: 'Git', icon: '📝', color: '#F05032' },
    { name: 'Linux', icon: '🐧', color: '#FCC624' },
    { name: 'TypeScript', icon: '📘', color: '#3178C6' },
    { name: 'Express', icon: '🚀', color: '#000000' },
  ];

  return (
    <div className="relative flex items-center justify-center w-96 h-96">
      {/* Center Text */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center">
          <h3 className="text-4xl font-bold portfolio-gradient-text">SKILLS</h3>
        </div>
      </div>

      {/* Outer Circle - Rotating clockwise */}
      <div className="absolute skills-orbit">
        {skills.slice(0, 8).map((skill, index) => {
          const angle = (index * 45) * (Math.PI / 180);
          const radius = 150;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          
          return (
            <div
              key={skill.name}
              className="absolute w-12 h-12 flex items-center justify-center bg-portfolio-card border-2 border-portfolio-border rounded-full hover:scale-110 transition-transform duration-300 hover:border-portfolio-purple-start"
              style={{
                left: `calc(50% + ${x}px - 24px)`,
                top: `calc(50% + ${y}px - 24px)`,
              }}
              title={skill.name}
            >
              <span className="text-2xl">{skill.icon}</span>
            </div>
          );
        })}
      </div>

      {/* Inner Circle - Rotating counter-clockwise */}
      <div className="absolute skills-orbit-reverse">
        {skills.slice(8).map((skill, index) => {
          const angle = (index * 90) * (Math.PI / 180);
          const radius = 100;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          
          return (
            <div
              key={skill.name}
              className="absolute w-10 h-10 flex items-center justify-center bg-portfolio-card border-2 border-portfolio-border rounded-full hover:scale-110 transition-transform duration-300 hover:border-portfolio-purple-start"
              style={{
                left: `calc(50% + ${x}px - 20px)`,
                top: `calc(50% + ${y}px - 20px)`,
              }}
              title={skill.name}
            >
              <span className="text-lg">{skill.icon}</span>
            </div>
          );
        })}
      </div>

      {/* Dotted circle paths */}
      <div className="absolute w-80 h-80 border-2 border-dashed border-portfolio-border/30 rounded-full"></div>
      <div className="absolute w-52 h-52 border-2 border-dashed border-portfolio-border/30 rounded-full"></div>
    </div>
  );
};

export default SkillsCircle;