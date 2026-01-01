# Testes Automatizados com Cypress - Kanban Frontend

Este repositório contém **testes end-to-end** desenvolvidos com [Cypress](https://www.cypress.io/) para validar funcionalidades de um sistema Kanban.

## 🎯 Objetivos
- Exercitar práticas de QA automatizado.
- Identificar comportamentos inesperados no sistema.
- Demonstrar conhecimento em escrita e execução de testes.

## 🧪 Cenários de Teste
- **SCRUM-1**: Exclusão de coluna sem confirmação e sem opção de recuperação.
- **SCRUM-3**: Verificação da ausência de botão de edição de tags.

## 📂 Estrutura

cypress/ ├─ e2e/ │  ├─ excluir_coluna.cy.js   # Teste de exclusão de coluna │  └─ opcao_editarTags.cy.js # Teste de edição de tags


## ✅ Resultados
- **SCRUM-1**: Coluna "Done" removida sem confirmação ou opção de desfazer.  
- **SCRUM-3**: Botão de editar tags não existe, conforme esperado.  

---

## 🔮 Futuras melhorias
- Adicionar testes de **login e autenticação**.  
- Validar **criação e edição de tarefas**.  
- Testar **movimentação de tarefas entre colunas**.  
- Implementar testes de **responsividade** (mobile vs desktop).  
- Configurar **pipeline de CI/CD** para execução automática dos testes.  

---

> ⚠️ Este repositório tem caráter **didático e demonstrativo**, mostrando minha experiência prática com testes automatizados.
