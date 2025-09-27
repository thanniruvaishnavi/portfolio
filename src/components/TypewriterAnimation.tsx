import { useState, useEffect } from 'react';

interface TypewriterAnimationProps {
  titles: string[];
  className?: string;
}

const TypewriterAnimation = ({ titles, className = "" }: TypewriterAnimationProps) => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];
    
    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, 1500);
      return () => clearTimeout(pauseTimer);
    }

    if (!isDeleting && currentText === currentTitle) {
      setIsPaused(true);
      return;
    }

    if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
      return;
    }

    const timer = setTimeout(() => {
      setCurrentText(prev => {
        if (isDeleting) {
          return prev.slice(0, -1);
        } else {
          return currentTitle.slice(0, prev.length + 1);
        }
      });
    }, isDeleting ? 75 : 120);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentTitleIndex, titles, isPaused]);

  return (
    <div className="relative flex items-center justify-center">
      {/* Circular dashed border */}
      <div className="absolute inset-0 rounded-full border-2 border-dashed border-white/60 animate-pulse" style={{ width: '400px', height: '400px' }}></div>
      
      {/* Typewriter text */}
      <span className={`font-mono text-pink-300 ${className}`}>
        {currentText}
        <span className="animate-pulse text-pink-300">|</span>
      </span>
    </div>
  );
};

export default TypewriterAnimation;