import LoginForm from "@/components/LoginForm";
import AnimatedBackground from "@/components/AnimatedBackground";
import heroImage from "@/assets/school-hero.jpg";
import { GraduationCap, Users, BookOpen, Award, Shield, Clock } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-background overflow-hidden">
      <div className="grid lg:grid-cols-2 min-h-screen">
        {/* Left Panel - Hero Section */}
        <div className="hidden lg:flex flex-col justify-center px-12 relative">
          <AnimatedBackground />
          
          {/* Hero Image */}
          <div className="relative z-10 mb-8">
            <img 
              src={heroImage} 
              alt="School Campus" 
              className="w-full h-64 object-cover rounded-2xl shadow-elegant animate-fade-in"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 space-y-6 animate-slide-in-left">
            <div>
              <h1 className="text-5xl font-bold text-foreground leading-tight mb-4">
                Excellence in 
                <span className="block bg-gradient-primary bg-clip-text text-transparent">
                  Education Management
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Streamline your educational institution with our comprehensive ERP system. 
                Manage students, faculty, academics, and administration all in one place.
              </p>
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="flex items-center space-x-3 group">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Student Management</h3>
                  <p className="text-sm text-muted-foreground">Complete student lifecycle</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 group">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                  <BookOpen className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Academic Planning</h3>
                  <p className="text-sm text-muted-foreground">Curriculum & scheduling</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 group">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Performance Tracking</h3>
                  <p className="text-sm text-muted-foreground">Analytics & reports</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 group">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                  <Shield className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Secure Access</h3>
                  <p className="text-sm text-muted-foreground">Role-based security</p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="flex items-center justify-between pt-8 border-t border-border/50">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Schools Trust Us</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">1M+</div>
                <div className="text-sm text-muted-foreground">Students Managed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel - Login Form */}
        <div className="flex flex-col justify-center px-6 sm:px-12 lg:px-16 relative bg-background/50 backdrop-blur-sm">
          <AnimatedBackground />
          
          {/* Mobile Header */}
          <div className="lg:hidden mb-8 text-center animate-fade-in">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <GraduationCap className="w-8 h-8 text-primary" />
              <h1 className="text-2xl font-bold text-foreground">School ERP</h1>
            </div>
            <p className="text-muted-foreground">Your gateway to educational excellence</p>
          </div>

          {/* Login Form */}
          <div className="relative z-10">
            <LoginForm />
          </div>

          {/* Footer */}
          <div className="relative z-10 mt-8 text-center space-y-4">
            <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>Available 24/7 for your educational needs</span>
            </div>
            <div className="text-xs text-muted-foreground">
              © 2024 School ERP System. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
