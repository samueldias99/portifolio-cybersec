import { User, Target, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Sobre Mim</span>
            </h2>
            <p className="text-muted-foreground">
              Conheça minha jornada na cibersegurança
            </p>
          </div>

          {/* Journey Story */}
          <Card className="mb-8 cyber-glow">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <Target className="w-8 h-8 text-cyber-blue mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-4">Minha Jornada</h3>
                  <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
                    <p>
                      Minha jornada no mundo da tecnologia começou com uma
                      curiosidade profunda sobre o Bitcoin. Fascinado pela
                      inovação por trás das moedas digitais e sua arquitetura
                      descentralizada, comecei a explorar o universo do
                      desenvolvimento web para entender como a internet
                      funciona.
                    </p>
                    <p>
                      Foi nesse processo que descobri a área de cibersegurança.
                      Rapidamente, me apaixonei por ela, percebendo que era o
                      campo perfeito para unir minha paixão por tecnologia com a
                      necessidade de proteção em um mundo cada vez mais digital.
                    </p>
                    <p>
                      Acredito firmemente que, à medida que a adoção de moedas
                      digitais como o Bitcoin cresce, a segurança da informação
                      se torna ainda mais crucial para proteger indivíduos e
                      sistemas contra ameaças e crimes digitais. Meu objetivo é
                      contribuir ativamente para esse futuro, usando minhas
                      habilidades para construir um ambiente digital mais seguro
                      e resiliente.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Main Description */}
          <Card className="mb-8 cyber-glow">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <User className="w-8 h-8 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-4">
                    Meu Objetivo Profissional
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    Estudante de cibersegurança com foco em <strong>segurança defensiva e operações de Blue Team</strong>. 
                    Em busca de oportunidades para atuar em SOC (Security Operations Center), 
                    monitoramento de segurança, resposta a incidentes e análise de ameaças. 
                    Experiência com ferramentas como Wazuh, Docker, SIEM e análise de logs. 
                    Conhecimento complementar em Red Team para melhor compreensão das táticas 
                    de atacantes e fortalecimento das defesas.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="hover:cyber-glow transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Target className="w-6 h-6 text-cyber-green mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Foco em Blue Team</h4>
                    <p className="text-muted-foreground text-sm">
                      Especialização em segurança defensiva com foco em monitoramento, 
                      detecção de ameaças e resposta a incidentes. Estudando Wazuh, 
                      Docker, SIEM e ferramentas de análise de logs para proteção 
                      proativa de infraestruturas.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:cyber-glow transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Zap className="w-6 h-6 text-cyber-blue mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Prática & SOC Operations</h4>
                    <p className="text-muted-foreground text-sm">
                      Experiência hands-on com laboratórios de segurança defensiva, 
                      simulações de SOC e análise de incidentes. Conhecimento em Red Team 
                      para entender táticas de atacantes e fortalecer as defesas.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
