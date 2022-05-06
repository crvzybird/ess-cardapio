Feature: Update de categoria
	As a administrador de um restaurante
	I want to editar os dados de uma categoria criada anteriomente
	So that o sistema deve permitir a edição de categorias

Scenario: editando uma categoria existente
	Given Eu estou na página do “home” logado como administrador do cardapio
	And A categoria “frutos do mar” foi adicionada anteriomente
    And Eu clico no botao de configurar categorias
	When Clico no botao de editar categoria
	And Devem aparecer pra mim as informações da categoria, neste caso o nome “frutos do mar”
    Then Sou capaz de modificar o nome “frutos do mar” para “comida indiana”
    And salvar “comida indiana” como o novo nome da categoria
    And Ao clicar no botao de configurar categorias lá deverá mostrar agora a categoria “comida indiana”
    And Não a categoria “frutos do mar”

Scenario: falha ao remover uma categoria ja removida
	Given Eu estou na página do “home” logado como administrador do cardapio
	And A categoria “frutos do mar” foi adicionada anteriomente
    And A categoria “frutos do mar” foi removida
	When Eu clico no botao de configurar categorias
	And Não seleciono uma categoria
    Then Uma mensagem deverá ser exibida indicando que é necessário selecionar uma categoria existente