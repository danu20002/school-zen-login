import { Users, BookOpen, Award, Globe } from "lucide-react";

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float blur-sm"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-accent/10 rotate-45 animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-32 left-16 w-12 h-12 bg-primary-glow/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/3 right-10 w-8 h-8 bg-accent/10 rotate-12 animate-float" style={{ animationDelay: '0.5s' }}></div>
      
      {/* Educational icons floating */}
      <div className="absolute top-24 right-1/4 text-primary/20 animate-float" style={{ animationDelay: '1.5s' }}>
        <Users size={24} />
      </div>
      <div className="absolute bottom-1/4 left-1/4 text-accent/20 animate-float" style={{ animationDelay: '3s' }}>
        <BookOpen size={20} />
      </div>
      <div className="absolute top-1/2 right-12 text-primary-glow/20 animate-float" style={{ animationDelay: '2.5s' }}>
        <Award size={18} />
      </div>
      <div className="absolute bottom-20 right-1/3 text-primary/20 animate-float" style={{ animationDelay: '4s' }}>
        <Globe size={22} />
      </div>

      {/* Gradient orbs */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-br from-primary/20 to-primary-glow/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-gradient-to-br from-accent/15 to-primary/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
    </div>
  );
};

export default AnimatedBackground;