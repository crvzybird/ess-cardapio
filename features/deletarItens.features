Scenario: João deseja excluir item do cardapio
    Given João está na página de edição de itens do cardapio
    And quer excluir um item
    When João clica no botão em formato de lixeira próximo ao item
    Then uma janela de pop-up é exibida
    And pergunta se deseja excluir aquele item
    When João clica em Sim
    Then uma mensagem avisando que o item foi excluído com sucesso aparece
    And o pop up é fechado

Scenario: João deseja excluir item do cardapio porem desiste no meio do caminho
    Given João está na página de edição de itens do Cardápio
    And quer excluir um item
    When João clica no botão em formato de lixeira próximo ao item
    Then uma janela de pop-up é exibida 
    And pergunta se deseja excluir aquele item
    When João clica que Cancelar
    Then a janela pop-up é fechada

    Scenario: Larissa deseja excluir varios itens do cardapio de uma só vez
    Given Larissa está na página de edição do Cardápio
    And deseja excluir varios itens ao mesmo tempo
    When Larissa seleciona os itens na opção de multipla escolha 
    And clica no botão em formato de lixeira no canto superior direito
    Then uma janela de pop-up é exibida
    And pergunta se deseja excluir todos aquele itens selecionados
    When Larissa clica em Sim
    Then uma mensagem avisando que os itens foram excluídos com sucesso aparece
    And o pop-up é fechado 

Scenario: Larissa deseja excluir varios itens do cardapio de uma só vez porem desiste no meio do caminho
    Given Larissa está na página de edição do Cardápio
    And deseja excluir varios itens ao mesmo tempo
    When Larissa seleciona os itens na opção de multipla escolha 
    And clica no botão em formato de lixeira no canto superior direito
    Then uma janela de pop-up é exibida
    And pergunta se deseja excluir todos aquele itens selecionados
    When Larissa clica em Cancelar
    Then a janela de pop-up é fechada
    And os itens não estão mais selecionados