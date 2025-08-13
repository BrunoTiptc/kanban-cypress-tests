# Testes Cypress - Kanban Frontend

Este repositório contém **testes end-to-end** automatizados para o site Kanban:

- **SCRUM-1**: Exclusão de coluna sem confirmação e sem recuperação.  
- **SCRUM-3**: Verificação da ausência de botão de edição de tags.

---

## URL do site testado

[https://kanban-dusky-five.vercel.app/](https://kanban-dusky-five.vercel.app/)

---

## Estrutura de arquivos

cypress/
├─ e2e/
│ ├─ excluir_coluna.cy.js # Teste de exclusão de coluna
│ └─ opcao_editarTags.cy.js # Teste de edição de tags (simplificado)

Descrição dos testes
SCRUM-1 - Exclusão de coluna

Objetivo: Verificar se a coluna “Done” pode ser excluída sem aparecer uma janela de confirmação.

Resultado esperado: Coluna “Done” desaparece e não aparece confirmação nem botão “desfazer/undo”.

Resultado obtido: Teste passou, coluna foi removida corretamente.

SCRUM-3 - Edição de tags

Objetivo: Verificar se existe botão de edição de tags nas tarefas.

Resultado esperado: Não deve existir botão de editar tags.

Resultado obtido: Teste passou, botão de editar não existe.

Observação: Adição de tags foi simplificada para que o teste funcione mesmo que o layout do site varie.