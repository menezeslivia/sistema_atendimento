# 🏥 Sistema de Controle de Atendimento para Laboratórios Médicos

![Ionic](https://img.shields.io/badge/Ionic-3880FF?style=for-the-badge&logo=ionic&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white)

Sistema de gestão de filas com priorização para laboratórios médicos, desenvolvido em Ionic com backend Node.js e MySQL.

## 📌 Funcionalidades

- 🎫 Emissão de senhas com 3 tipos:
  - **SP** (Prioritária - 15min ±5min)
  - **SG** (Geral - 5min ±3min)  
  - **SE** (Exames - <1min para 95% dos casos)
- 📊 Priorização inteligente: `SP → SE|SG → SP → SE|SG`
- 🖥️ Painel com últimas 5 senhas chamadas
- 📅 Relatórios diários/mensais:
  - Estatísticas de atendimento
  - Tempos médios por tipo
  - Detalhes completos por senha
- ⏰ Horário comercial (7h-17h) com descarte automático

## 🛠️ Tecnologias

| Área         | Tecnologia           |
|--------------|----------------------|
| Frontend     | Ionic + Angular      |
| Backend      | Node.js + Express    |
| Banco        | MySQL 8.0            |
| Autenticação | JWT                  |

## 🚀 Como Executar

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/sistema-atendimento.git
cd sistema-atendimento

# 2. Instale as dependências
npm install
cd backend && npm install && cd ..

# 3. Configure o .env
cp .env.example .env
# Edite com suas credenciais do MySQL

# 4. Inicie os serviços
npm run start:backend   # Inicia o servidor Node
npm start               # Inicia o app Ionic

📂 Estrutura do Projeto
sistema-atendimento/
├── src/                   # App Ionic
│   ├── app/               # Componentes principais
│   ├── pages/             # Telas do sistema
│   │   ├── atendente/     # Interface AA
│   │   ├── cliente/       # Interface AC  
│   │   └── painel/        # Display público
│   └── services/          # Lógica de negócios
├── backend/               # API Node.js
│   ├── controllers/       # Regras de atendimento
│   ├── models/            # Entidades do banco
│   └── routes/            # Endpoints API
└── database/              # Migrations e seeds
👥 Agentes do Sistema
Sigla	Função
AS	Sistema (emissão de senhas)
AA	Atendente (guichês)
AC	Cliente (totem de senhas)
📝 Relatórios Gerados
Quantitativos:

Senhas emitidas/atendidas

Distribuição por tipo

Detalhado:

Número da senha (formato YYMMDD-PPSQ)

Horários de emissão/atendimento

Guichê responsável

TM (Tempo Médio):

Variações por tipo de senha

🤝 Contribuidores
[Seu Nome] - Product Owner

[Colega 1] - Frontend

[Colega 2] - Backend

[Colega 3] - Banco de Dados

📄 Licença
MIT License - Consulte o arquivo LICENSE para detalhes.
