### Projeto 01

## Capítulo 01 aula 01 - Introdução

- Streaming non blocking IO - Input Output não bloqueante;
https://httpie.io/docs/cli/installation - Instalação do Node e NPM
https://efficient-sloth-d85.notion.site/Instalando-o-Node-e-o-NPM-d162e2582d5c48499bc6703526912456 - Instalação do HTTPie (não é necessário)

## Capítulo 01 aula 02 - Criando um projeto em Node.js

- Começar criar uma pasta do projeto pelo windows
- Pelo terminal do VSCode executar npm -y
- Criar um arquivo server.js dentro do pasta src
- Utilizamos o node para criar REST API
- importar módulo http, com vários funcionalidades para construir as API's
- Padrão de importação chamado CommonJS => require é o formato antigo
- Padrão de importação chamado ESModules => import/export é o novo formato
- Inserindo "type": "module" no package.json
- Importações de módulos internos do node devemos utilizar 'node:XXXX', onde XXXX é o nome do módulo, por exemplo, 'http'

## Capítulo 01 aula 03 - node --watch

- Criando o script dentro do package.json "dev": "node --watch src/server.js"

## Capítulo 02 aula 01 - Rotas de criação e listagem (método HTTP)

- Criando o CRUD (Método HTTP)
  - Criar de usuário (POST) - Criar um recurso no back-end
  - Listar de usuário (GET) - Buscar um recurso no back-end
  - Edição01 de usuário (PATCH) - Atualizar algo específico de um recurso no back-end
  - Edição02 de usuário (PUT) - Atualizar um recurso no back-end
  - Remoção de usuário (DELETE) - Deletar um recurso no back-end
 - Early return - Quando temos uma função e criar vários if's em cadeia somente o primeiro que for verdadeiro será executado desconsiderando o restante do código abaixo.

## Capítulo 02 aula 02 - Salvando usuários em memória (Headers)

- Stateful - Aplicação guardada em memória - Ao desligar a aplicação pode modificar o seu comportamento e perde os dados gravados
- Stateless - Aplicação guardada em um local externo - Banco de dados, arquivos locais, etc. Não perdem os dados armazenados
- JSON - JavaScript Object Notation - Formato de estrutura de dados utilizados, por exemplo, entre front-end e back-end
- Cabeçalhos-Headers (Requisição-Request/Respostas-Response) => São Metadados-Metadata
- Headers podem seguir ambos os fluxos, ou seja, do back-end para front-end como o inverso

## Capítulo 02 aula 03 - Conhecendo HTTP status code

- Grupos de HTTP Status
  - 100 a 199 - Respostas de informação
  - 200 a 299 - Resposta de sucesso
  - 300 a 399 - Mensagens de redirecionamento
  - 400 a 499 - Respostas de erro no lado do cliente
  - 500 a 599 - Respostas de erro no lado do servidor
- Mais utilizados:
  - 200 - Ok - Ex. Sua requisição/solicitação deu certo - Para alguns métodos (GET, HEAD, PUT, POST, TRACE)
  - 201 - Created - Ex. Requisição criada - POST ou PUT
  - 202 - Accepted - Ex. Solicitação aceita
  - 204 - No content - Ex. Sem conteúdo
  - 301 - Moved Permanently - Ex. Essa rota foi movida permanentemente
  - 302 - Found - Ex. Foi redirecionado porém de forma temporária
  - 400 - Bad request  Ex. Cliente enviou um dados errados
  - 401 - Unauthorized Ex. Os dados de acesso (usuário e senha) não estão liberando o acesso acesso a uma rota privada 
  - 403 - Forbidden Ex. O cliente não tem acesso ao conteúdo
  - 404 - Not Found Ex. O servidor não consegue encontrar o recurso solicitado
  - 500 - Internet Server Error Ex. servidor encontrou com uma situação que não sabe lidar
  - 501 - Not Implemented Ex. Solicitação não suportada pelo servidor
  - 502 -  Bad Gateway Ex. O servidor obteve uma resposta inválida quando trabalhava como gateway.

## Capítulo 03 aula 01 - Entendendo Streams no Node

-

## Capítulo 03 aula 02 - Criando stream de leitura

-

## Capítulo 03 aula 03 - Stream de escrita e transformação

-

## Capítulo 03 aula 04 - Aplicando Streams no módulo HTTP

-

## Capítulo 03 aula 05 - Consumindo uma stream completa

-

## Capítulo 03 aula 06 - Corpo de requisição em JSON (Stream e Buffers)

-

## Capítulo 03 aula 07 - Entendendo Buffers no Node

-

## Capítulo 03 aula 08 - Criando Middleware de JSON

-

## Capítulo 04 aula 01 - Criando banco de dados JSON

- Salvar os dados em arquivo físico(stateless) e não mais em memória(stateful);
- Criar um arquivo database
- Criar a classe Database
- Criar uma propriedade database que recebe um objeto database = {}
- Criar método insert com tabelas e dados e um select 
- Método select - Receber em data os valores que recebe do parâmetro table que está dentro de database, se não existir retorna uma array vazia
- Método insert - verificar se tem algo dentro da tabela, se sim, vai adicionar os dados. Se não tem uma tabela cria essa tabela
- Colocando a "#" na frente da propriedade ela se torna privada, ou seja, outras arquivos não tem mais acesso

## Capítulo 04 aula 02 - Persistindo banco de dados 

- Para trabalhar com o arquivos físicos, mudar de stateless para stateful
- Dois módulos do fs - fs e fs/promises
- Sempre que possível trabalhar com promises para trabalhar com assincronismo, async, await
- Promises não tem métodos para ler arquivos de stream, para isso utilizar o fs tradicional
- Método persist vai escrever no banco de dados, deve ser chamado toda a vez que inserir uma nova informação no banco de dados

## Capítulo 04 aula 03 - Criando ID único e universal (UUID)

- Universally Unique identifier - Utilizando o módulo node:crypto randomUUID
- Existe uma opção "shortID"
https://www.npmjs.com/package/shortid

## Capítulo 05 aula 01 - Separando rotas de aplicação


## Capítulo 05 aula 02 - Route e Query parameters

Query Parameters: URL stateful => Utilizados em Filtros, paginação, não-obrigatórios, algum tipo de busca;
Ex: http://localhost:3333/users?userId=1&name=Paulo
Route Parameters: => Utilizamos para identificação de recursos, no caso abaixo sabemos que é um Id de usuário
Ex: GET(listar) ou DELETE(deletar) http://localhost:3333/users/1  - o usuário 1
Nos casos acima não devem ser utilizados para envio de info sensível.
Request Body: => Envio de informações de um formulário. Neste caso é o método de envio de info sensíveis (HTTPs)
Ex: POST http://localhost:3333/users/

## Capítulo 05 aula 03 - Criando regex dos parâmetros

Rota com parâmetro dinâmico: "('/users/:id')"
- Toda vez que tem dois pontos ":" no caminho da rota significa que temos uma informação dinâmica;
Regex dos parâmetros /:([a-zA-Z]+)/g    -- regex = expressão irregular. Ou seja... 
- Encontrar no texto "('/users/:id')" dentro da variável que começa depois do ":" na frente...
- /:([a-zA-Z])/ letras de a-z e A-Z
- /:([a-zA-Z]+)/ elas podem se repetir uma ou + vezes
- /:([a-zA-Z]+)/g se tiver duas vezes uma regex no texto ela vai fazer uma procura global na rota/texto

## Capítulo 05 aula 04 - Rotas com parâmetros (RegEx)

(?<id1>[a-z0-9\-_]+) - Nesse formato todo o campo regex vai retornar com a identificação id1 na frente.
(?<$1>[a-z0-9\-_]+) - Nesse formato o campo regex trará o nome do campo antes da variável.

## Capítulo 05 aula 05 - Remoção de registros

- Ajustando o server, para buscar o id do usuário para enviar para o endpoint/rota de deleção.
- Criando o método delete no database, percorrendo na tabela users o id indicado para deletar. Se achar vai informar qual é o índice na tabela. Após remover ele persiste.
- Na rota vai fazer a busca pelo id através do id passado pelo parâmetro chamando o método delete do database, retornando 204.

