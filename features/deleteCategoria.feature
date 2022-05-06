Feature: Remoção de categoria de itens
	As a administrador de um restaurante
	I want to descategorizar os pratos do cardápio
	So that o sistema deve permitir a remoção de categorias

Scenario: removendo uma categoria existente
	Given Eu estou na página do “home” logado como administrador do cardapio
	And A categoria “frutos do mar” foi adicionada anteriomente
	When Eu clico no botao de configurar categorias
	And Seleciono a categoria “frutos do mar”
    And Clico para deletar a categoria “frutos do mar”
	Then Ao clicar novamente no botao de configurar categorias
    And A categoria “frutos do mar” Não aparecerá como uma opção para selecionar

Scenario: falha ao remover uma categoria ja removida
	Given Eu estou na página do “home” logado como administrador do cardapio
	And A categoria “frutos do mar” foi adicionada anteriomente
    And A categoria “frutos do mar” foi removida
	When Eu clico no botao de configurar categorias
	And Não seleciono uma categoria
    Then Uma mensagem deverá ser exibida indicando que é necessário selecionar uma categoria existente