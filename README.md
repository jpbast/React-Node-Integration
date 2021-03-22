# Integração entre React e Node
Neste projeto foi desenvolvido um sistema de login e cadastro onde o usuário logado possui acesso exclusivo a um mural de posts.

Link para a aplicação: https://react-node-integration.herokuapp.com/

## Objetivos
Entre os principais objetivos desta aplicação, pode-se destacar: 
- O estudo referente sobre o backend
-  A integração entre o backend (**Node**) com o frontend (**React**)

## Funcionamento
Ao acessar a página da aplicação, o usuário é levado para a tela de login. Caso não tenha feito ainda o cadastro, ele pode ser feito na rota `/register` ou clicando no link correspondente na tela inicial. Após realizar o cadastro, o usuário é redirecionado para a tela de login novamente.

Depois de realizar o login, o usuário é levado para o mural de posts na rota `/mural` onde é possível deletar ou adicionar novos posts. Caso o usuário não tenha logado primeiro e tente acessar diretamente a rota `/mural`, será emitido um alerta informando que é necessário realizar o login primeiro. O *token* de autenticação é armazenado  com o `sessionStorage()`. Assim, toda vez que o usuário fecha a guia da aplicação é necessário realizar o login novamente.

As informações do usuário e dos posts são armazenadas no banco de dados MongoDB e tratadas através do backend. Em todas as rotas o backend retorna um **JSON** que é tratado no frontend por meio de requisições utilizando o `fetch()`. No backend, o sistema de rotas foi implementado utilizando o **Express** enquanto que no frontend foi implementado utilizando o **React Router**.

## Considerações finais
Como foi mencionado, o objetivo principal dessa aplicação foi de por em prática a integração entre o **React** e o **Node**. Desse modo, o *layout* e o *design* não tiveram uma atenção tão grande, o que não prejudicou a usabilidade neste caso.
