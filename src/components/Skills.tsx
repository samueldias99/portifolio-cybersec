import {
  Terminal,
  Network,
  Code,
  GitBranch,
  Shield,
  Search,
  Server,
  Container,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skills = [
    {
      name: "Wazuh (SIEM/XDR)",
      level: 65,
      icon: Shield,
      description:
        "Monitoramento de segurança, detecção de ameaças, análise de logs",
      color: "cyber-blue",
    },
    {
      name: "Docker",
      level: 70,
      icon: Terminal,
      description: "Containerização, segurança de containers, orquestração",
      color: "cyber-green",
    },
    {
      name: "Security Monitoring",
      level: 75,
      icon: Search,
      description: "Monitoramento contínuo, detecção de anomalias, alertas",
      color: "cyber-purple",
    },
    {
      name: "Linux",
      level: 80,
      icon: Terminal,
      description:
        "Administração de sistemas, hardening, análise forense",
      color: "cyber-blue",
    },
    {
      name: "Python",
      level: 75,
      icon: Code,
      description: "Automação de segurança, análise de logs, scripts SOC",
      color: "cyber-green",
    },
    {
      name: "Análise de Logs",
      level: 70,
      icon: Search,
      description: "Correlação de eventos, investigação, threat hunting",
      color: "cyber-orange",
    },
    {
      name: "Fundamentos de Redes",
      level: 70,
      icon: Network,
      description: "TCP/IP, protocolos, análise de tráfego, segurança de rede",
      color: "cyber-purple",
    },
    {
      name: "Incident Response",
      level: 65,
      icon: Shield,
      description: "Resposta a incidentes, contenção, remediação",
      color: "cyber-blue",
    },
    {
      name: "Wireshark",
      level: 65,
      icon: Network,
      description: "Análise forense de rede, investigação de incidentes",
      color: "cyber-green",
    },
    {
      name: "Git & GitHub",
      level: 85,
      icon: GitBranch,
      description: "Controle de versão, colaboração, DevSecOps",
      color: "cyber-orange",
    },
    {
      name: "Virtualização",
      level: 70,
      icon: Server,
      description:
        "Experiência em configuração de VMs para laboratórios de segurança (VirtualBox/VMware)",
      color: "cyber-purple",
    },
    {
      name: "Conteinerização (Docker & Podman)",
      level: 75,
      icon: Container,
      description:
        "Gestão de contêineres, uso de Docker Compose e implementação de serviços em ambientes isolados (ex: n8n e ferramentas de SOC em conteiner como o wazuh)",
      color: "cyber-green",
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Hard Skills</span>
            </h2>
            <p className="text-muted-foreground">
              Competências técnicas desenvolvidas através de estudos e prática
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {skills.map((skill, index) => (
              <Card
                key={skill.name}
                className="hover:cyber-glow transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <skill.icon className={`w-6 h-6 text-${skill.color}`} />
                    <h3 className="font-semibold">{skill.name}</h3>
                  </div>

                  <div className="mb-3">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">
                        Proficiência
                      </span>
                      <span className="text-primary">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>

                  <p className="text-sm text-muted-foreground">
                    {skill.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
