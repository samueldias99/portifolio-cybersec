import {
  Terminal,
  Network,
  Code,
  Shield,
  Search,
  Container,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";


const Skills = () => {
  const skills = [
    {
      name: "Wazuh (SIEM & XDR)",
      icon: Shield,
      description:
        "Foco: Implementação e Monitoramento (Home Lab) Configuração e deploy de infraestrutura SIEM utilizando Docker. Experiência prática na instalação de agentes (Windows/Linux), ingestão de logs e criação de regras de detecção personalizadas (XML) para identificar varreduras de rede e ataques de força bruta. Gerenciamento de alertas via painel Kibana/OpenSearch.",
      color: "cyber-blue",
    },
    {
      name: "Container Security (Docker & Podman)",
      icon: Container,
      description:
        "Foco: Orquestração e Isolamento Utilização diária de Docker e Podman para criação de laboratórios de segurança isolados. Domínio de docker-compose para subir stacks completas (ELK, Wazuh) e práticas de execução rootless com Podman para redução de superfície de ataque no ambiente Athena OS.",
      color: "cyber-green",
    },
    {
      name: "Linux & Hardening",
      icon: Terminal,
      description:
        "Foco: Administração de Sistemas (Athena OS/Arch) Proficiência em ambientes baseados em Arch Linux e Debian. Domínio avançado de CLI (Bash/Zsh) para navegação, manipulação de arquivos e gerenciamento de permissões (chmod/chown). Conhecimento prático em gerenciamento de processos, análise de logs de sistema (journalctl, syslog) e configuração de firewall local. Validado por: TryHackMe Linux Fundamentals e uso diário como SO principal.",
      color: "cyber-blue",
    },
    {
      name: "Network Traffic Analysis",
      icon: Network,
      description:
        "Foco: Forense de Rede e Protocolos Análise de pacotes e tráfego de rede utilizando Wireshark e Tcpdump. Compreensão sólida do modelo OSI e TCP/IP para identificar anomalias de tráfego. Habilidade em mapeamento de rede e descoberta de hosts/serviços ativos utilizando Nmap. Validado por: TryHackMe Networking & Wireshark Basics.",
      color: "cyber-purple",
    },
    {
      name: "Blue Team Operations & Threat Intel",
      icon: Search,
      description:
        "Foco: Defesa e Identificação de Ameaças Compreensão teórica e prática da Pyramid of Pain e táticas de defesa. Estudo de vulnerabilidades recentes (ex: CVE-2024-21413) e aplicação de conceitos de Incident Response para triagem de alertas. Familiaridade com frameworks de defesa e ciclo de vida de ataques cibernéticos.",
      color: "cyber-orange",
    },
    {
      name: "Python for Security",
      icon: Code,
      description:
        "Foco: Automação e Scripting Desenvolvimento de scripts para automação de tarefas repetitivas e parsing de logs. Utilização de bibliotecas para interação com sistemas e redes, com foco em criar ferramentas auxiliares para rotinas de segurança e testes de conectividade.",
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
