import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Mail, MapPin, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

   
    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const mailtoLink = `mailto:ayyubansari2003@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    
    window.open(mailtoLink);

  
    toast({
      title: "Message Prepared!",
      description:
        "Your email client should open with the message ready to send.",
    });

  
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };


  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "ayyubansari2003@gmail.com",
      color: "instagram-royal",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+91 948-826-6211",
      color: "instagram-purple",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "India",
      color: "instagram-magenta",
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="py-32 px-6 relative overflow-hidden text-white"
    >
      
      <div className="absolute inset-0 bg-gradient-to-tr from-instagram-orange/10 via-transparent to-instagram-gold/10" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
            Let's Connect
          </h2>
          <div className="h-1 w-24 bg-gradient-accent mx-auto rounded-full mb-8" />
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's build something amazing
            together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
         
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold mb-4">Send me a message</h3>
              <p className="text-gray-400 mb-8">
                Have a project in mind? I'd love to hear about it. Send me a
                message and let's discuss how we can work together.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-instagram-purple h-12"
              />

              <Input
                name="email"
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-instagram-purple h-12"
              />

              <Textarea
                name="message"
                placeholder="Your Message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
                className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-instagram-purple resize-none"
              />

              <Button
                type="submit"
                variant="gradient"
                size="lg"
                className="w-full group"
              >
                <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-200" />
                Send Message
              </Button>
            </form>
          </motion.div>

         
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold mb-4">Get in touch</h3>
              <p className="text-gray-400 mb-8">
                Prefer a more direct approach? Feel free to reach out through
                any of these channels. I'm always happy to connect!
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="flex items-center space-x-4 p-4 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-br from-${info.color}/20 to-${info.color}/10`}
                  >
                    <div className={`text-${info.color}`}>{info.icon}</div>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{info.label}</h4>
                    <p className="text-gray-400">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="p-8 rounded-2xl bg-gradient-to-br from-instagram-purple/20 to-instagram-pink/20 border border-instagram-purple/30"
            >
              <h4 className="text-xl font-bold gradient-text mb-4">
                Let's build something amazing together!
              </h4>
              <p className="text-gray-300 mb-6">
                Whether it's a web application, mobile app, or any digital
                solution, I'm here to help turn your vision into reality.
              </p>
              <div className="flex space-x-4">
                <Button
                  variant="cta"
                  size="sm"
                  onClick={() =>
                    window.open("mailto:ayyubansari2003@gmail.com", "_blank")
                  }
                >
                  Quick Email
                </Button>
                <Button
                  variant="ghost-gradient"
                  size="sm"
                  onClick={() =>
                    window.open("https://wa.me/9488266211", "_blank")
                  }
                >
                  WhatsApp
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
