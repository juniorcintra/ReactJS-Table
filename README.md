Projeto teste para a vaga de Desenvolvedor React Pleno

## Desenvolvimento:

Front-End desenvolvido em ReactJs<br/>
Back-End desenvolvido em AdonisJs (link do repositorio: https://github.com/juniorcintra/react_table_api)<br/>
Banco de Dados MySQL

API hospedada no Heroku para facilitar a execução do teste e banco de dados hospedado no servidor que tenho para o meu TCC da faculdade.

## Para o Front-End

### Caso tenha o Yarn configurado:

rodar yarn para instalar das dependencias.

rodar yarn start para executar a aplicação.

### Caso não tenha:

rodar npm i para instalar das dependencias.

rodar npm start para executar a aplicação.

## Para o Back-End

Para nao precisar configurar o AdonisJS na máquina para poder rodar a aplicação, tomei a liberdade de hospedar no Heroku onde já hospedo a API do meu TCC, para já facilitar a execução.

Link da API online: https://react-table-api.herokuapp.com/

## Tecnologias Usadas:

Alem do Adonis Js, utilizei algumas tecnologias para desenvolvimento como:
o axios para a parte de requisições HTTP,
react-router-dom para gerencia e configuração de rotas e redirecionamentos,
react-icons para icones de estilo,
styled-components para estilização,
Jwt para autenticação.

## Modo de Uso:

Ao executar a aplicação (yarn start), a primeira pagina a ser acessada é a página de Login, para cadastrar, basta clicar em "criar conta grátis" na parte inferior do form de login e preencher os campos, que serão cadastrados através da rota POST "/users". Ao concluir a requisição e estando tudo certo, o sistema redireciona para a tela de login, ao logar, o sistema envia as informações para a rota "/sessions" criando assim uma sessão com token de autenticação no local storage.
