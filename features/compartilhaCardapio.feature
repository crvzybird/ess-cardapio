Scenario: Gerando link de compartilhamento
	Given: Eu sou um usuário "admin" do "restaurante do carlito"
	and Existe um cardápio "entradas" cadastrado no "restaurante do carlito"
	When Eu clico em "Gerar link compartilhável"
	Then Eu vejo um link copiável para compartilhar o cardápio
	And o link é automaticamente colocado no meu clipboard

Scenario: Acessando um link compartilhado
	Given: Eu sou um usuário "guest" do app
	When Acesso um link compartilhado de um cardapio de "entradas" do "restaurante do carlito"
	Then Eu sou levado ao app "ifood-cin" e vejo o cardápio de "entradas" do "restaurante do carlito"

Scenario: Compartilhar no Twitter
	Given: Eu sou um usuário "admin" do "restaurante do carlito" e tenho o app "twitter" instalado no meu dispositivo
	and Existe um cardápio "entradas" cadastrado no "restaurante do carlito"
	When Eu acesso "Compartilhar no twitter"
	Then sou redirecionado para o app do "twitter" com um "esboço de um tweet" contendo o link do cardapio de "entradas"

Scenario: Compartilhar no facebook
	Given: Eu sou um usuário "admin" do "restaurante do carlito" e tenho o app "facebook" instalado no meu dispositivo
	and Existe um cardápio "entradas" cadastrado no "restaurante do carlito"
	When Eu acesso "Compartilhar no facebook"
	Then sou redirecionado para o app do "facebook" com um "esboço de um post" contendo o link do cardapio de "entradas"

Scenario: Compartilhar no gab
	Given: Eu sou um usuário "admin" do "restaurante do carlito" e tenho o app "gab" instalado no meu dispositivo
	and Existe um cardápio "entradas" cadastrado no "restaurante do carlito"
	When Eu acesso "Compartilhar no gab"
	Then sou redirecionado para o app do "gab" com um "esboço de um post" contendo o link do cardapio de "entradas"

Scenario: Compartilhar no facebook com falha
	Given: Eu sou um usuário "admin" do "restaurante do carlito" e nao tenho o app "facebook" instalado no meu dispositivo
	and Existe um cardápio "entradas" cadastrado no "restaurante do carlito"
	When Eu acesso "Compartilhar no facebook"
	Then uma mensagem de erro aparece dizendo que o app do facebook nao esta instalado no celular

Scenario: Compartilhar no twitter com falha
	Given: Eu sou um usuário "admin" do "restaurante do carlito" e nao tenho o app "twitter" instalado no meu dispositivo
	and Existe um cardápio "entradas" cadastrado no "restaurante do carlito"
	When Eu acesso "Compartilhar no twitter"
	Then uma mensagem de erro aparece dizendo que o app do twitter nao esta instalado no celular

Scenario: Compartilhar no orkut
	Given: Eu sou um usuário "admin" do "restaurante do carlito" e tenho o app "orkut" instalado no meu dispositivo
	and Existe um cardápio "entradas" cadastrado no "restaurante do carlito"
	When Eu acesso "Compartilhar no orkut"
	Then sou redirecionado para o app do "orkut" com um "esboço de um post" contendo o link do cardapio de "entradas"
