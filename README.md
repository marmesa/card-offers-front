# card-offers-front
Este projeto é parte da entrega do curso de Desenvolvimento Front End Avançado da pós-graduação da PUC-Rio.

<div align="center">
    <h2>Card Offers Front-End</h2>
    <p>Aplicação para cadastro de clientes e contratação de cartões de crédito.</p>
</div>

<h3>Funcionalidades Principais</h3>
<ul>
    <li><b>Cadastro de clientes:</b> Usuário, senha (mínimo 6 dígitos), nome, email, telefone (formato (61) 91234-5678) e renda.</li>
    <li><b>Escolha e contratação de cartões:</b> Verde, azul, roxo ou preto. Contratação permitida apenas se a renda for maior que o limite do cartão.</li>
    <li><b>Feedbacks:</b> Mensagens informativas e de erro durante todo o fluxo, conforme validações.</li>
    <li><b>Proteção de rotas:</b> Telas de escolha e confirmação só podem ser acessadas após login. Caso contrário, o usuário é redirecionado para o login com mensagem explicativa.</li>
    <li><b>Botão Voltar:</b> Disponível para facilitar a navegação entre as etapas do fluxo.</li>
    <li><b>404 Not Found:</b> URLs inexistentes exibem página de erro personalizada.</li>
</ul>

<h3>Fluxo de Telas</h3>
<ol>
    <li><b>Registro:</b> Cadastro dos dados do cliente.</li>
    <li><b>Login:</b> Autenticação do cliente. Exibe erro se usuário ou senha estiverem incorretos.</li>
    <li><b>Escolha do Cartão:</b> Seleção do cartão desejado. Contratação só é possível se a renda for suficiente.</li>
    <li><b>Resumo da Contratação:</b> Exibe detalhes do cartão contratado e do cliente.</li>
</ol>

<h3>Detalhes Técnicos</h3>
<ul>
    <li>Utiliza <b>React</b> e <b>React Router</b> para navegação.</li>
    <li>Hooks principais: <b>useNavigate</b> (navegação), <b>useParams</b> (captura de parâmetros), <b>useLocation</b> (controle de origem e proteção de rotas).</li>
    <li>Validações de formulário e feedbacks visuais para melhor experiência do usuário.</li>
</ul>

## Como executar o front

**Primeiro será necessário a execução da API.** No projeto da API você encontra as intruções para a execução.

Será necessário ter o [Nodejs, ou o npm,](https://nodejs.org/en/download/) instalado. 

Após clonar o repositório, é necessário ir ao diretório raiz desse projeto pelo terminal para poder executar os comandos descritos abaixo.

```
$ npm install
```

Este comando instala as dependências/bibliotecas, descritas no arquivo `package.json`. Uma pasta chamada `node_modules` será criada.

Para executar a interface basta executar o comando: 

```
$ npm start
```

Abra o [http://localhost:3000/#/](http://localhost:3000/#/) no navegador.
