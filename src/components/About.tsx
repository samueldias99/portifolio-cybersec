import { Target, Zap } from "lucide-react";
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
                  <h3 className="text-xl font-semibold mb-4">Perfil Profissional</h3>
                  <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
                    <p>
                      Profissional em formação focado em Segurança Defensiva e
                      Threat Intelligence. Minha trajetória é marcada pela
                      especialização autodidata na arquitetura de defesa, onde
                      busco compreender a anatomia de ataques cibernéticos para
                      implementar mitigações eficazes.
                    </p>
                    <p>
                      Atualmente, concentro minha operação técnica na detecção
                      de anomalias e análise forense, utilizando Wazuh, Docker e
                      ferramentas de SIEM em laboratórios de alta fidelidade. O
                      que busco: Uma posição de entrada (SOC N1 / Estágio) para
                      aplicar meu stack técnico na elevação da maturidade de
                      monitoramento da organização e na resposta ágil a
                      incidentes.
                    </p>
                  </div>
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
                    <h4 className="font-semibold mb-2">
                      Foco de Atuação (Blue Team)
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Especialização em monitoramento contínuo e Hardening de
                      infraestrutura. Estudo aprofundado de vetores de ataque
                      para configurar defesas proativas em soluções de EDR e
                      IDS/IPS.
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
                    <h4 className="font-semibold mb-2">
                      Prática & SOC Operations
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Experiência hands-on comprovada em laboratório (Home Lab)
                      documentado. Simulação de rotinas de SOC, desde a ingestão
                      de logs até a contenção de ameaças, com base em frameworks
                      de mercado e táticas de Red Team.
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
