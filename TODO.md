# TODO - Atualização do Portfólio Samuel Dias

## 🎯 Objetivo
Atualizar o portfólio para refletir mudança de foco de Red Team para Blue Team (segurança defensiva), adicionar certificação IBM e novas tecnologias (Wazuh, Docker).

---

## 📋 Tarefas

### 1. ✅ Adicionar Certificação IBM
- [x] Baixar imagem do badge da certificação IBM (https://www.credly.com/badges/7fc4854d-d897-43d1-bbc5-625e095d96bb)
- [x] Adicionar imagem em `/public/certificados/ibm-cybersecurity.png`
- [x] Adicionar certificação no array `certifications` em `src/components/Education.tsx`
- [x] Incluir informações: título, instituição, data, descrição, link do Credly

### 2. 🛡️ Atualizar Hero Section (src/components/Hero.tsx)
- [x] Mudar subtítulo de "Estudante de Cibersegurança" para algo que reflita Blue Team
- [x] Atualizar descrição para mencionar foco em segurança defensiva
- [x] Atualizar lista de tecnologias:
  - [x] Adicionar: Wazuh, Docker, SIEM, Splunk, ELK Stack, IDS/IPS
  - [x] Manter: Linux, Python, Redes, Git
  - [x] Reorganizar: Colocar ferramentas Blue Team primeiro, Red Team depois
  - [x] Remover ou mover para segundo plano: Metasploit, Burp Suite, OWASP ZAP

### 3. 💪 Atualizar Skills Section (src/components/Skills.tsx)
- [x] Adicionar novas skills Blue Team:
  - [x] Wazuh (SIEM/XDR) - 65%
  - [x] Docker (Containerização) - 70%
  - [x] Análise de Logs - 70%
  - [x] Incident Response - 65%
  - [x] Security Monitoring - 75%
- [x] Reorganizar skills existentes:
  - [x] Manter: Linux, Python, Redes, Git
  - [x] Atualizar descrições para foco defensivo
  - [x] Wireshark: enfatizar análise forense
  - [x] Nmap: removido (foco em Blue Team)

### 4. 📖 Atualizar About Section (src/components/About.tsx)
- [x] Atualizar "Meu Objetivo Profissional" para mencionar:
  - [x] Foco em segurança defensiva e Blue Team
  - [x] Interesse em SOC (Security Operations Center)
  - [x] Monitoramento e resposta a incidentes
  - [x] Manter menção ao Red Team como conhecimento complementar
- [x] Atualizar cards de valores:
  - [x] "Foco em Blue Team": mencionar Wazuh, Docker, SIEM
  - [x] "Prática & SOC Operations": mencionar laboratórios de defesa

### 5. 🎓 Atualizar Education Section (src/components/Education.tsx)
- [x] Adicionar certificação IBM no array `certifications`
- [x] Verificar se há cursos relacionados a Blue Team para adicionar
- [x] Considerar adicionar seção de "Tecnologias em Estudo":
  - [x] Wazuh
  - [x] Docker
  - [x] SIEM/SOAR (mencionado na certificação IBM)

### 6. 🎨 Ajustes Visuais e UX
- [x] Verificar se cores e ícones refletem Blue Team
- [x] Adicionar ícones relacionados a defesa (Shield, Eye, AlertTriangle)
- [x] Manter design cyber mas com foco defensivo

### 7. 🧪 Testes
- [x] Testar site localmente (npm run dev)
- [x] Verificar responsividade mobile
- [x] Testar todos os links de certificados
- [x] Verificar carregamento de imagens
- [x] Testar navegação entre seções
- [x] Validar que o foco Blue Team está claro

### 8. 🚀 Deploy
- [ ] Commit das alterações no Git
- [ ] Push para GitHub
- [ ] Verificar deploy automático
- [ ] Testar site em produção (https://www.samdias.net/)
- [ ] Validar que todas as mudanças estão visíveis

---

## 📝 Notas Importantes

### Certificação IBM
- **Título**: IBM Cybersecurity Analyst Professional Certificate (verificar título exato no Credly)
- **Link**: https://www.credly.com/badges/7fc4854d-d897-43d1-bbc5-625e095d96bb/linked_in_profile
- **Instituição**: IBM
- **Plataforma**: Coursera/IBM Skills Network

### Foco Blue Team vs Red Team
- **Blue Team (Prioridade)**: Defesa, monitoramento, resposta a incidentes, análise de logs
- **Red Team (Secundário)**: Manter como conhecimento complementar, útil para entender atacantes
- **Mensagem**: "Conhecer o ataque para melhor defender"

### Tecnologias Blue Team para Destacar
1. **Wazuh** - SIEM/XDR open source
2. **Docker** - Containerização e segurança de containers
3. **SIEM** - Security Information and Event Management
4. **IDS/IPS** - Intrusion Detection/Prevention Systems
5. **Log Analysis** - Análise de logs e correlação de eventos
6. **Incident Response** - Resposta a incidentes
7. **Threat Hunting** - Caça a ameaças proativa

---

## ✅ Checklist Final
- [x] Todas as alterações implementadas
- [x] Testes locais concluídos
- [x] Site funcionando corretamente
- [ ] Deploy em produção realizado
- [ ] Site validado em produção
- [ ] TODO.md atualizado com status final

---

## 📊 Resumo das Mudanças Implementadas

### ✅ Concluído
1. **Certificação IBM adicionada** - Badge e informações completas
2. **Hero Section atualizada** - Foco em Blue Team e SOC
3. **Skills atualizadas** - 10 skills com foco defensivo (Wazuh, Docker, SIEM, etc.)
4. **About Section atualizada** - Objetivo profissional focado em Blue Team
5. **Tecnologias reorganizadas** - Prioridade para ferramentas defensivas
6. **Descrições atualizadas** - Todas refletem segurança defensiva

### 🎯 Próximos Passos
1. Fazer commit das alterações
2. Push para GitHub
3. Verificar deploy automático
4. Validar em produção
