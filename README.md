# Sistema de Controle de Atendimento - Laboratórios Médicos

## Descrição do Projeto
Este projeto visa desenvolver um sistema de controle de atendimento em filas para laboratórios médicos, utilizando tecnologia de **totem de senhas**, **painel de atendimento** e **controle de guichês**.  
Três tipos de agentes participam do fluxo:
- **AS** – Agente Sistema: emite senhas e gerencia os comandos da atendente.
- **AA** – Agente Atendente: chama a próxima senha para atendimento.
- **AC** – Agente Cliente: emite a senha no totem e aguarda o chamado.

O atendimento é priorizado em três categorias de senha:
- **SP** – Senha Prioritária
- **SE** – Senha para Retirada de Exames
- **SG** – Senha Geral

O sistema também gera **relatórios diários e mensais** com informações detalhadas sobre os atendimentos.

## Tecnologias Utilizadas
- **Backend:** Node.js (Express)
- **Banco de Dados:** MySQL 8.0
- **Frontend:** Ionic Framework com Angular

## Funcionalidades
- Emissão de senhas com numeração no formato `YYMMDD-PPSQ`.
- Gestão de filas com regras específicas de prioridade e alternância de atendimento.
- Painel de chamadas exibindo as últimas 5 senhas atendidas.
- Controle do horário de expediente (07h00 às 17h00).
- Tratamento de senhas não atendidas (5% descartadas).
- Cálculo de tempo médio de atendimento com variações específicas por tipo de senha.
- Emissão de relatórios diários e mensais:
  - Quantitativo de senhas emitidas e atendidas (geral e por prioridade).
  - Relatório detalhado de cada senha.
  - Relatório de tempos médios de atendimento.

## Estrutura do Projeto
```
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

## Como Rodar o Projeto

### Backend
1. Acesse a pasta `/backend`
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Configure o arquivo `.env` com as credenciais do banco MySQL.
4. Inicie o servidor:
   ```bash
   npm run dev
   ```

### Frontend
1. Acesse a pasta `/frontend`
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Rode o app:
   ```bash
   ionic serve
   ```

## Pré-requisitos
- Node.js >= 18.x
- MySQL >= 8.0
- Ionic CLI (`npm install -g @ionic/cli`)
- Angular CLI (`npm install -g @angular/cli`)

## Participantes
- Nome 1
- Nome 2
- Nome 3
- Nome 4

*(Preencher com os nomes dos integrantes do projeto.)*

## Observações
- Todas as senhas devem ser descartadas ao final do expediente.
- Senhas não atendidas devem ser marcadas como "não atendidas" no sistema.
- Novas senhas podem influenciar na ordem de atendimento até o momento da chamada.

