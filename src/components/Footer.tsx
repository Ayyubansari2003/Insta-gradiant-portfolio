import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="w-6 h-6" />,
      url: "https://github.com/Ayyubansari2003",
      color: "instagram-royal"
    },
    {
      name: "LinkedIn", 
      icon: <Linkedin className="w-6 h-6" />,
      url: "https://linkedin.com/in/ayyubansari",
      color: "instagram-purple"
    },
    {
      name: "Instagram",
      icon: <Instagram className="w-6 h-6" />,
      url: "https://instagram.com/ayyubansari",
      color: "instagram-magenta"
    },
    {
      name: "Email",
      icon: <Mail className="w-6 h-6" />,
      url: " mailto:ayyubansari2003@gmail.com",
      color: "instagram-orange"
    }
  ];

  return (
    <footer className="relative py-16 px-6 overflow-hidden">
     
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-full" />
      
      
      <div className="absolute inset-0 bg-gradient-to-t from-instagram-purple/5 via-transparent to-transparent" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center">
        
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="inline-flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                <span className="text-white font-bold text-xl">AJ</span>
              </div>
              <span className="text-2xl font-bold gradient-text">
                Ayyub Ansari J
              </span>
            </div>
            <p className="text-gray-400 max-w-md mx-auto">
              Full Stack Developer passionate about creating innovative digital experiences
            </p>
          </motion.div>

         
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center space-x-6 mb-8"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative"
              >
                <div className={`p-4 rounded-xl bg-gradient-to-br from-${social.color}/20 to-${social.color}/10 border border-${social.color}/30 hover:border-${social.color}/50 transition-all duration-300`}>
                  <div className={`text-${social.color} group-hover:text-white transition-colors duration-300`}>
                    {social.icon}
                  </div>
                </div>
                
               
                <div className={`absolute -inset-1 rounded-xl bg-gradient-to-r from-${social.color}/30 to-${social.color}/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm`} />
                
               
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {social.name}
                </div>
              </motion.a>
            ))}
          </motion.div>

        
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center space-x-8 mb-8"
          >
            {['About', 'Skills', 'Projects', 'Contact'].map((link) => (
              <button
                key={link}
                onClick={() => {
                  const element = document.getElementById(link.toLowerCase());
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-gray-400 hover:text-white transition-colors duration-300 hover:gradient-text"
              >
                {link}
              </button>
            ))}
          </motion.div>

         
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="border-t border-white/10 pt-8"
          >
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Ayyub Ansari J. All rights reserved.
            </p>
            <p className="text-gray-600 text-xs mt-2">
              Built with React, TypeScript, Framer Motion & Three.js
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;