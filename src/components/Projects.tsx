import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const projects = [
    {
      title: "Task Manager App",
      description: "A comprehensive task management application built with Angular featuring real-time updates, drag-and-drop functionality, and collaborative features.",
      tech: ["Angular", "TypeScript", "Node.js", "Html5", "CSS3"],
      image: "/task-management.png",  // <-- This Image will render
      github: "https://github.com/ayyubansari",
      demo: "https://taskmanager-demo.com",
      color: "instagram-royal"
    },
    {
      title: "Electricity Bill Generator",
      description: "Java-based desktop application for generating and managing electricity bills with advanced calculations and report generation features.",
      tech: ["Java", "Swing", "MySQL", "JasperReports"],
      image: "",  // No Image — Initials fallback
      github: "https://github.com/ayyubansari",
      demo: "#",
      color: "instagram-purple"
    },
    {
      title: "Portfolio Website",
      description: "Modern, responsive portfolio website showcasing projects and skills with stunning animations and interactive elements.",
      tech: ["Angular", "SCSS", "TypeScript", "Animations"],
      image: "",  // No Image — Initials fallback
      github: "https://github.com/ayyubansari",
      demo: "https://ayyubansari.dev",
      color: "instagram-magenta"
    },
    {
      title: "Text-to-Speech Web App",
      description: "Progressive web application that converts text to speech with multiple voice options and customizable speech parameters.",
      tech: ["JavaScript", "Web Speech API", "PWA", "CSS3"],
      image: "",
      github: "https://github.com/ayyubansari",
      demo: "https://tts-app-demo.com",
      color: "instagram-pink"
    },
    {
      title: "QR Code Generator",
      description: "Dynamic QR code generator with customization options, batch processing, and multiple output formats for various use cases.",
      tech: ["JavaScript", "Canvas API", "HTML5", "CSS3"],
      image: "",
      github: "https://github.com/ayyubansari",
      demo: "https://qr-generator-demo.com",
      color: "instagram-orange"
    },
    {
      title: "Web Calculator",
      description: "Advanced web calculator with scientific functions, history tracking, and keyboard support for enhanced user experience.",
      tech: ["JavaScript", "CSS3", "HTML5", "Local Storage"],
      image: "",
      github: "https://github.com/ayyubansari",
      demo: "https://calculator-demo.com",
      color: "instagram-gold"
    }
  ];

  return (
    <section id="projects" ref={ref} className="py-32 px-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-bl from-instagram-purple/10 via-transparent to-instagram-pink/10" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
            Featured Projects
          </h2>
          <div className="h-1 w-24 bg-gradient-warm mx-auto rounded-full mb-8" />
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of my most impactful work, demonstrating expertise across 
            different technologies and problem-solving approaches.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50, rotateX: 10 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 50, rotateX: 10 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="h-full rounded-2xl overflow-hidden bg-gradient-to-br from-black/60 to-black/30 border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                
                {/* Project Image / Initials */}
                <div className="relative h-48 overflow-hidden flex items-center justify-center bg-black/30">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className={`w-20 h-20 rounded-full bg-gradient-to-br from-${project.color} to-${project.color}/60 flex items-center justify-center`}>
                      <span className="text-2xl font-bold text-white">
                        {project.title.split(' ').map(word => word[0]).join('').slice(0, 2)}
                      </span>
                    </div>
                  )}

                  {/* Hover Overlay Buttons */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <Button
                      variant="ghost-gradient"
                      size="sm"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="gradient"
                      size="sm"
                      onClick={() => window.open(project.demo, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:gradient-text transition-all duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-white/10 text-xs text-gray-300 hover:bg-white/20 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(project.github, '_blank')}
                      className="flex-1 border-white/20 hover:border-white/40"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button
                      variant="gradient"
                      size="sm"
                      onClick={() => window.open(project.demo, '_blank')}
                      className="flex-1"
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </div>

                {/* Glow Effect */}
                <div className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-${project.color}/50 to-${project.color}/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            Want to see more of my work?
          </p>
          <Button
            variant="hero"
            size="lg"
            onClick={() => window.open('https://github.com/Ayyubansari2003', '_blank')}
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
