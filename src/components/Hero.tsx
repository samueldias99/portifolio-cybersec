import { useState, useEffect } from "react";
import { Shield, Terminal, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaDocker, FaLinux, FaPython } from "react-icons/fa";
import WazuhIcon from "@/components/icons/WazuhIcon";
import WiresharkIcon from "@/components/icons/WiresharkIcon";
import SplunkIcon from "@/components/icons/SplunkIcon";
import SiemIcon from "@/components/icons/SiemIcon";
import IdsIpsIcon from "@/components/icons/IdsIpsIcon";
import LogAnalysisIcon from "@/components/icons/LogAnalysisIcon";
import IncidentResponseIcon from "@/components/icons/IncidentResponseIcon";
import ParticlesBackground from "@/components/ui/ParticlesBackground";
import { motion } from "framer-motion";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Analista de Segurança Defensiva | Blue Team";
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 50); // Slightly faster typing speed
      return () => clearTimeout(timer);
    }
  }, [currentIndex, fullText]);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Effects */}
      <ParticlesBackground />
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/5 to-cyber-green/5 pointer-events-none" />

      {/* Content Container */}
      <motion.div
        className="container mx-auto px-4 text-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-4xl mx-auto">
          {/* Icons */}
          <motion.div
            className="flex justify-center space-x-8 mb-8"
            variants={itemVariants}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <Shield className="w-12 h-12 text-cyber-blue shadow-lg shadow-cyber-blue/20 rounded-full p-2 bg-background/50 border border-cyber-blue/30" />
            </motion.div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <Terminal className="w-12 h-12 text-cyber-green shadow-lg shadow-cyber-green/20 rounded-full p-2 bg-background/50 border border-cyber-green/30" />
            </motion.div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            >
              <Lock className="w-12 h-12 text-cyber-purple shadow-lg shadow-cyber-purple/20 rounded-full p-2 bg-background/50 border border-cyber-purple/30" />
            </motion.div>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-4"
            variants={itemVariants}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyber-blue via-cyber-green to-cyber-blue bg-300% animate-gradient">
              Samuel Dias
            </span>
          </motion.h1>

          {/* Typewriter Subtitle */}
          <motion.div
            className="text-xl md:text-2xl text-muted-foreground mb-8 font-mono h-8"
            variants={itemVariants}
          >
            <span>{displayText}</span>
            <span className="animate-pulse text-cyber-green">_</span>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed"
            variants={itemVariants}
          >
            Focado em segurança defensiva e operações de Blue Team. Em busca de
            oportunidades para atuar em SOC (Security Operations Center), monitoramento
            de segurança, resposta a incidentes e proteção proativa de infraestruturas.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={itemVariants}
          >
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-cyber-blue/10 text-cyber-blue hover:bg-cyber-blue/20 border-cyber-blue/50 hover:shadow-[0_0_20px_rgba(0,242,234,0.3)] transition-all duration-300"
            >
              Entre em Contato
            </Button>

            <a
              href="https://www.linkedin.com/in/samuel-dias48"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background/50 backdrop-blur-sm shadow-sm hover:bg-accent hover:text-accent-foreground h-12 px-6 hover:border-cyber-green/50 hover:text-cyber-green"
            >
              Linkedin
            </a>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            className="mt-12"
            variants={itemVariants}
          >
            <p className="text-sm text-muted-foreground mb-4 font-semibold tracking-wider uppercase">
              Tecnologias em foco
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm max-w-3xl mx-auto">
              {[
                { name: "Wazuh", icon: WazuhIcon },
                { name: "Docker", icon: FaDocker },
                { name: "SIEM", icon: SiemIcon },
                { name: "Linux", icon: FaLinux },
                { name: "Python", icon: FaPython },
                { name: "Wireshark", icon: WiresharkIcon },
                { name: "Splunk", icon: SplunkIcon },
                { name: "IDS/IPS", icon: IdsIpsIcon },
                { name: "Log Analysis", icon: LogAnalysisIcon },
                { name: "Incident Response", icon: IncidentResponseIcon }
              ].map((tech) => {
                const IconComponent = tech.icon;
                return (
                  <motion.span
                    key={tech.name}
                    whileHover={{ scale: 1.05, borderColor: "var(--cyber-green)" }}
                    className="px-3 py-2 bg-card/50 backdrop-blur-sm border border-white/10 rounded-full text-muted-foreground hover:text-white transition-colors flex items-center gap-2 cursor-default"
                  >
                    <IconComponent className="w-5 h-5" />
                    {tech.name}
                  </motion.span>
                );
              })}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
