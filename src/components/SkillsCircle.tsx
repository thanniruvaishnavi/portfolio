const SkillsCircle = () => {
  const skills = [
    { name: 'React', icon: '⚛️', bgColor: '#61DAFB' },
    { name: 'Node.js', icon: '🟢', bgColor: '#339933' },
    { name: 'AWS', icon: '☁️', bgColor: '#FF9900' },
    { name: 'Docker', icon: '🐳', bgColor: '#2496ED' },
    { name: 'MongoDB', icon: '🍃', bgColor: '#47A248' },
    { name: 'JavaScript', icon: '🟨', bgColor: '#F7DF1E' },
    { name: 'Python', icon: '🐍', bgColor: '#3776AB' },
    { name: 'Kubernetes', icon: '⚙️', bgColor: '#326CE5' },
    { name: 'Git', icon: '📝', bgColor: '#F05032' },
    { name: 'Linux', icon: '🐧', bgColor: '#FCC624' },
    { name: 'TypeScript', icon: '📘', bgColor: '#3178C6' },
    { name: 'Express', icon: '🚀', bgColor: '#000000' },
  ];

  return (
    <div className="relative flex items-center justify-center w-[500px] h-[500px]">
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
          const radius = 180;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          
          return (
            <div
              key={skill.name}
              className="absolute w-16 h-16 flex items-center justify-center rounded-full hover:scale-110 transition-transform duration-300 shadow-lg"
              style={{
                left: `calc(50% + ${x}px - 32px)`,
                top: `calc(50% + ${y}px - 32px)`,
                backgroundColor: '#2a2a2a',
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
          const radius = 120;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          
          return (
            <div
              key={skill.name}
              className="absolute w-14 h-14 flex items-center justify-center rounded-full hover:scale-110 transition-transform duration-300 shadow-lg"
              style={{
                left: `calc(50% + ${x}px - 28px)`,
                top: `calc(50% + ${y}px - 28px)`,
                backgroundColor: '#2a2a2a',
              }}
              title={skill.name}
            >
              <span className="text-lg">{skill.icon}</span>
            </div>
          );
        })}
      </div>

      {/* Dotted circle paths */}
      <div className="absolute w-96 h-96 border-4 border-dashed border-white/70 rounded-full"></div>
      <div className="absolute w-64 h-64 border-4 border-dashed border-white/70 rounded-full"></div>
    </div>
  );
};

export default SkillsCircle;