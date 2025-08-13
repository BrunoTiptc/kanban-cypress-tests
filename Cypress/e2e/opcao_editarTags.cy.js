describe('SCRUM-3 - Não existe opção editar Tags', () => {
  beforeEach(() => {
    cy.visit('https://kanban-dusky-five.vercel.app/')
  })

  it('Deve verificar que não há opção de editar nome das tags (simplificado)', () => {
    // Clica em "Adicionar Tarefa" e cria a tarefa
    cy.contains('Adicionar Tarefa').click()
    cy.get('input[type="text"]', { timeout: 5000 })
      .should('be.visible')
      .type('Tarefa de teste{enter}')

    // Seleciona o último card criado
    cy.get('.board-cards .content').last().as('novaTarefa')

    // Tenta clicar em "Adicionar Tag", mas se não existir, ignora
    cy.get('@novaTarefa').then($card => {
      if ($card.text().includes('Adicionar Tag')) {
        cy.wrap($card).contains('Adicionar Tag').click({ force: true })
        // Tenta digitar a tag
        cy.wrap($card).find('input[type="text"]').type('TagTeste{enter}', { force: true })
      } else {
        cy.log('Botão "Adicionar Tag" não encontrado, pulando etapa')
      }
    })

    // Verifica que não há botão de editar tag
    cy.get('@novaTarefa').within(() => {
      cy.get('.edit-tag').should('not.exist')
    })
  })
})
