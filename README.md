# 🏥 Sistema de Controle de Atendimento - Laboratórios Médicos

## 📜 Descrição do Projeto
Desenvolvimento de um sistema de controle de atendimento em filas para laboratórios médicos, utilizando **totem de senhas**, **painel de atendimento** e **controle de guichês**. 

### Agentes Envolvidos
- **AS** – Agente Sistema: Emite senhas e gerencia comandos.
- **AA** – Agente Atendente: Chama próximas senhas.
- **AC** – Agente Cliente: Emite senha no totem e aguarda atendimento.

### Tipos de Senha
- 🌟 **SP** – Prioritária
- 📄 **SE** – Retirada de Exames
- 💰 **SG** – Geral

### Destaques
- Geração automática de senhas no formato `YYMMDD-PPSQ`
- Atendimento com prioridades e regras específicas
- Painel exibindo últimas 5 senhas chamadas
- Controle de expediente das 07h00 às 17h00
- Relatórios diários e mensais completos

## 🛠️ Tecnologias Utilizadas
- **Backend:** Node.js (Express)
- **Banco de Dados:** MySQL 8.0
- **Frontend:** Ionic Framework + Angular

## 🔄 Funcionalidades Principais
- Emissão e controle de senhas por tipo
- Alternância obrigatória entre senhas prioritárias e gerais
- Registro de tempos médios de atendimento
- Tratamento automático de senhas não atendidas
- Geração de relatórios quantitativos e detalhados

## 📁 Estrutura do Projeto
```bash
/backend
  /controllers
  /models
  /routes
  /services
  /utils
/frontend
  /src
    /app
    /pages
    /services
    /components
```

## 💻 Como Rodar o Projeto

### Backend
```bash
cd backend
npm install
# Configure o .env com as credenciais do MySQL
npm run dev
```

### Frontend
```bash
cd frontend
npm install
ionic serve
```

## 📊 Pré-requisitos
- Node.js >= 18.x
- MySQL >= 8.0
- Ionic CLI
  ```bash
  npm install -g @ionic/cli
  ```
- Angular CLI
  ```bash
  npm install -g @angular/cli
  ```

## 👨‍💼 Participantes
- Nome 1
- Nome 2
- Nome 3
- Nome 4

*(Preencher com os nomes dos integrantes do projeto.)*

## 💡 Observações Importantes
- Todas as senhas devem ser descartadas ao final do expediente.
- Senhas não atendidas devem ser registradas como "não atendidas".
- O sistema deve lidar dinamicamente com novas senhas geradas antes da chamada.

---

> "Controle, Agilidade e Excelência no Atendimento!"

