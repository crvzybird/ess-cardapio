Scenario: Abelardo acrescenta quantidade de itens do ingrediente Tomate
        Given Abelardo está na página de listagem de itens do Restaurante
        And quer incrementar em uma unidade a quantidade de Tomate
        When Abelardo clica no botão de “+” no canto inferior esquerdo da foto do item Tomate
        Then o valor correspondente à quantidade de Tomate é acrescido de um
        And é indicado na página de listagem de itens do Restaurante que a quantidade anterior de Tomate foi incrementada em um

Scenario: Gedésio altera a foto do item Vinho
        Given Abelardo está na página de listagem de itens do Restaurante
        And deseja alterar o foto do ingrediente Vinho da lista de itens do Restaurante
        When Abelardo clica no botão com ícone de “lápis”, no canto superior direto da foto do item Vinho
        Then uma janela de Pop-up é exibida
        And é indicado para que seja feito o upload da nova foto
        When Abelardo faz o upload da nova foto através do pop-up exibido e confirma clicando no botão de “confirma”
        Then o pop-up é fechado
        And Abelardo pode visualizar que a foto foi alterada com sucesso

Scenario: Abelardo altera o preço do ingrediente Azeite de Oliva
        Given Abelardo está na página de listagem de itens do Restaurante
         And quer mudar o preço do ingrediente Azeite de Oliva
        When Abelardo clica no botão com ícone de “lápis”,no canto inferior direto da foto do item Azeite de Oliva
        Then uma janela de Pop-up é exibida
        And é indicado para que um novo valor numérico seja inserido
        When Abelardo insere o novo valor que corresponde ao novo preço e confirma clicando no botão de “confirma”
        Then o pop-up é fechado
        And Abelardo pode visualizar que o preço do Azeite de Oliva foi alterada com sucesso

Scenario: Abelardo altera o link de compartilhamento do item Strogonoff de Frango
        Given Abelardo está na página de listagem de itens do Restaurante
        And quer alterar o link de compartilhamento do item  Strogonoff de Frango
        When Abelardo clica no botão com ícone de “corrente”,no canto superior esquerdo da foto  do item Strogonoff de Frango
        Then uma janela de Pop-up é exibida
        And é indicado para que um novo valor para o campo link seja inserido
        When Abelardo insere o novo link de compartilhamento e confirma clicando no botão de “confirma”
        Then uma mensagem de “Sucesso” é exibida informando que o Link foi alterado com sucesso
        And o pop-up é fechado

Scenario: Ivonildo não consegue alterar foto do item Maçã do Cardápio