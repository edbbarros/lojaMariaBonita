# lojaMariaBonita

Olá, sejam bem vindos ao sistema de cadastro da loja Maria Bonita, com essa aplicação você será capaz de cadastrar, editar, deletar e listar todos os clientes, nela foi usado o materialize.css, react, css, node, sequelize, express e mysql.

Como iniciar a Aplicação:

1.	Na pasta backend rode o npm install
2.	Na pasta frontend rode o npm install
3.	Para iniciar o backend rode o node index.js na pasta backend
4.	Para iniciar o front end rode o npm start na pasta frontend

Rotas da Aplicação
		1 – (Rota principal com a listagem de todos os usuários)
		2 – (Rota com detalhes de um usuário específico)
		3 – (Rota para a criação de novos usuários)
		4 – (Rota de edição dos usuários)
		5 – (Rota para deletar o usuário)

1.	Route exact path = "/usuario" component={MainUsuario} 
2.	Route path = "/usuarios/:id" component={Detalheusuario} 
3.	Route path = "/criar" component={CriarUsuario} 
4.	Route path = "/editarUsuario/:id" component={EditarUsuario} 
5.	Route path = "/deletarUsuario/:id" component={DeletarUsuario}
