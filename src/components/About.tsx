import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-32 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-instagram-purple/10 via-transparent to-instagram-pink/10" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
            About Me
          </h2>
          <div className="h-1 w-24 bg-gradient-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-full bg-gradient-primary p-1">
                <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                  <div className="w-72 h-72 rounded-full bg-gradient-secondary flex items-center justify-center text-6xl font-bold gradient-text">
                    AJ
                  </div>
                </div>
              </div>
              <div className="absolute -inset-4 bg-gradient-primary opacity-20 rounded-full blur-xl" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white mb-4">
                Building Digital Dreams into Reality
              </h3>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                I am a dedicated Full Stack Developer with hands-on experience in Java, Spring Boot, SQL, Angular, HTML, CSS, and 
                JavaScript. During my internships at <b>Vista EdTech</b>  and <b>Novitech R&D Pvt Ltd</b> , I worked on developing full-stack web 
                applications, focusing on REST API development, Angular routing, and SQL integration  </p>

              <p className="text-lg text-gray-300 leading-relaxed">
               Through real-time projects and collaborative environments, I have enhanced my problem-solving and debugging skills.
                My training has equipped me with strong front-end and back-end development abilities, preparing me to tackle
                 industry-level challenges with efficiency.

              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                I hold a Bachelor of Arts in <b>Business Administration</b>  from the University of Madras and a Bachelor of Arts in
                <b>Islamic Studies</b>from B.S. Abdur Rahman Crescent Institute of Science & Technology. With this unique combination 
                 of technical and analytical knowledge, I strive to create impactful and scalable web solutions.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 rounded-lg bg-gradient-to-br from-instagram-royal/20 to-instagram-indigo/20 border border-instagram-royal/30">
                <div className="text-3xl font-bold gradient-text mb-2">4+ M</div>
                <div className="text-sm text-gray-400"> Experience</div>
              </div>
              <div className="text-center p-6 rounded-lg bg-gradient-to-br from-instagram-purple/20 to-instagram-magenta/20 border border-instagram-purple/30">
                <div className="text-3xl font-bold gradient-text mb-2">5+</div>
                <div className="text-sm text-gray-400">Projects Completed</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;