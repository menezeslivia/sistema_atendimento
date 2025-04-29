tickets

Aplicativo Móvel de Controle de Senhas para Laboratórios Médicos

Este repositório contém o código-fonte de um app híbrido (Ionic + Angular) para controle de atendimento em filas de laboratórios médicos, desenvolvido como trabalho de disciplina.

📱 Sobre o Projeto

Plataforma: Mobile (Ionic Framework + Angular)

Escopo: Frontend standalone (não há integração com backend ou banco de dados; toda informação é gerenciada em LocalStorage)

Agentes:

AS (Agente Sistema) — Emite senhas via totens

AA (Agente Atendente) — Chama próximas senhas no guichê

AC (Agente Cliente) — Recebe senha e aguarda no painel

Principais Funcionalidades

Totem de Senhas (SP, SE, SG)

Chamada de Senhas no Guichê (priorização automática)

Painel de Chamadas (exibe últimas 5 senhas)

Relatórios (visão diária e mensal)

Persistência local via LocalStorage (sem backend)

🎨 Telas do Aplicativo

1. Totem de Emissão de Senhas

2. Guichê de Atendimento

3. Painel de Chamadas

⚙️ Requisitos para Rodar o Projeto

Node.js (versão >= 18.x)

Ionic CLI (>= 6.x)

Angular CLI (>= 15.x)

Passos

Clone o repositório:

git clone https://github.com/<seu-usuario>/tickets.git
cd tickets

Instale as dependências:

npm install

Inicie o app em modo de desenvolvimento:

ionic serve

Acesse no seu navegador ou emulador via: http://localhost:8100

👨‍💻 Submissão Individual

Embora o projeto possa ser desenvolvido em grupo, cada aluno deve realizar a própria submissão individual.

Este repositório é público e atende ao requisito de entrega de nota.

📄 Licença

Este trabalho está licenciado sob a licença Creative Commons – Atribuição 4.0 Internacional (CC BY 4.0).Consulte o arquivo LICENSE para detalhes.

Desenvolvido como parte da disciplina de Sistemas de Informação – Trabalho Individual

