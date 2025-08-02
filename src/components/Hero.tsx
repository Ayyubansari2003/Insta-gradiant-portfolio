import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ParticleBackground from "./ParticleBackground";
import ThreeBackground from "./ThreeBackground";
import { Download, Rocket } from "lucide-react";

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
    console.log("Downloading resume...");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      <ThreeBackground />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-transparent to-black/70 z-10" />
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative z-20 text-center max-w-4xl mx-auto px-6"
      >
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-4 gradient-text">
            Ayyub Ansari J
          </h1>
          <div className="h-1 w-32 bg-gradient-primary mx-auto rounded-full mb-6" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-xl md:text-2xl text-gray-300 mb-8 font-light"
        >
          Full Stack Developer | Building modern web solutions
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Passionate about creating innovative digital experiences with cutting-edge technologies.
          Specializing in React, Angular, Java, and modern web development.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Button
            variant="hero"
            size="hero"
            onClick={scrollToProjects}
            className="group"
          >
            <Rocket className="w-6 h-6 mr-2 group-hover:animate-bounce" />
            View My Projects
          </Button>
          
          <Button
            variant="ghost-gradient"
            size="hero"
            onClick={downloadResume}
            className="group"
          >
            <Download className="w-6 h-6 mr-2 group-hover:animate-pulse" />
            Download Resume
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-16"
        >
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full mx-auto">
              <div className="w-1 h-3 bg-gradient-primary rounded-full mx-auto mt-2 animate-pulse" />
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-2">Scroll to explore</p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;