import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Code2, 
  Database, 
  Globe, 
  Smartphone,
  Server,
  GitBranch,
  Palette,
  Zap
} from "lucide-react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skills = [
    {
      category: "Frontend",
      icon: <Globe className="w-8 h-8" />,
      skills: ["React", "Angular", "HTML5", "CSS3", "JavaScript", "TypeScript", "Bootstrap", "Tailwind CSS"],
      color: "instagram-royal"
    },
    {
      category: "Backend",
      icon: <Server className="w-8 h-8" />,
      skills: ["Java", "Spring Boot", "Node.js", "RESTful APIs","SQL" ],
      color: "instagram-purple"
    },
   
    {
      category: "Tools & DevOps",
      icon: <GitBranch className="w-8 h-8" />,
      skills: ["Git", "GitHub", "GitLab", "VS Code", "Postman"],
      color: "instagram-pink"
    },
    
  ];

  return (
    <section ref={ref} className="py-32 px-6 relative overflow-hidden">
      
      <div className="absolute inset-0 bg-gradient-to-tr from-instagram-royal/5 via-instagram-purple/5 to-instagram-magenta/5" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
            My Skills
          </h2>
          <div className="h-1 w-24 bg-gradient-accent mx-auto rounded-full mb-8" />
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive toolkit of modern technologies and methodologies 
            that I use to build exceptional digital experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillSet, index) => (
            <motion.div
              key={skillSet.category}
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : { opacity: 0, y: 50, rotateY: -15 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-black/40 to-black/20 border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
               
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-${skillSet.color}/10 to-${skillSet.color}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br from-${skillSet.color}/20 to-${skillSet.color}/10 mb-6 group-hover:from-${skillSet.color}/30 group-hover:to-${skillSet.color}/15 transition-all duration-300`}>
                    <div className={`text-${skillSet.color}`}>
                      {skillSet.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:gradient-text transition-all duration-300">
                    {skillSet.category}
                  </h3>
                  
                  <div className="space-y-2">
                    {skillSet.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.4, delay: (index * 0.1) + (skillIndex * 0.05) }}
                        className="flex items-center space-x-2"
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r from-${skillSet.color} to-${skillSet.color}/60`} />
                        <span className="text-gray-300 hover:text-white transition-colors duration-200">
                          {skill}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Skills Animation */}
        <div className="mt-20 flex justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-center"
          >
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl">
              {["React", "Angular", "Java", "Spring Boot", "TypeScript","JavaScript", "Node.js", "Html", "Css", "Git"].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ duration: 0.4, delay: 1.2 + (index * 0.1) }}
                  className="px-4 py-2 rounded-full bg-gradient-primary text-white text-sm font-medium hover:scale-110 hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;