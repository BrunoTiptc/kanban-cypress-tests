describe('SCRUM-1 - Exclusão de coluna sem confirmação e sem recuperação', () => {
  beforeEach(() => {
    cy.visit('https://kanban-dusky-five.vercel.app/')
  })

  it('Deve tentar excluir a coluna "Done" e verificar ausência de confirmação', () => {
    // Captura qualquer confirm que apareça e falha o teste se aparecer
    cy.on('window:confirm', () => {
      throw new Error('Apareceu confirmação, mas não deveria')
    })

    // Clica no botão de excluir a coluna
    cy.get('#🚀\\ \\ Donetrash svg', { timeout: 5000 }).click({ force: true })

    // Verifica de forma segura se a coluna "Done" NÃO existe
    cy.get('body', { timeout: 0 }).then(($body) => {
      if ($body.find('*:contains("Done")').length) {
        throw new Error('Coluna "Done" ainda existe, deveria ter sido removida')
      } else {
        cy.log('Coluna "Done" não encontrada, tudo certo')
      }
    })

    // Verifica de forma segura se o botão "desfazer/undo" NÃO apareceu
    cy.get('body', { timeout: 0 }).then(($body) => {
      if ($body.find('button:contains("desfazer"), button:contains("undo")').length) {
        throw new Error('Botão de desfazer apareceu, mas não deveria')
      } else {
        cy.log('Botão de desfazer não encontrado, tudo certo')
      }
    })
  })
})
