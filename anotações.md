## Capítulo 05 módulo 02

Query Parameters: URL stateful => Utilizados em Filtros, paginação, não-obrigatórios, algum tipo de busca;
Ex: http://localhost:3333/users?userId=1&name=Paulo
Route Parameters: => Utilizamos para identificação de recursos, no caso abaixo sabemos que é um Id de usuário
Ex: GET(listar) ou DELETE(deletar) http://localhost:3333/users/1  - o usuário 1
Nos casos acima não devem ser utilizados para envio de info sensível.
Request Body: => Envio de informações de um formulário. Neste caso é o método de envio de info sensíveis (HTTPs)
Ex: POST http://localhost:3333/users/

## Capítulo 05 módulo 03

Rota com parâmetro dinâmico: "('/users/:id')"
- Toda vez que tem dois pontos ":" no caminho da rota significa que temos uma informação dinâmica;
Regex dos parâmetros /:([a-zA-Z]+)/g    -- regex = expressão irregular. Ou seja... 
- Encontrar no texto "('/users/:id')" dentro da variável que começa depois do ":" na frente...
- /:([a-zA-Z])/ letras de a-z e A-Z
- /:([a-zA-Z]+)/ elas podem se repetir uma ou + vezes
- /:([a-zA-Z]+)/g se tiver duas vezes uma regex no texto ela vai fazer uma procura global na rota/texto

## Capítulo 05 módulo 04


(?<id1>[a-z0-9\-_]+) - Nesse formato todo o campo regex vai retornar com a identificação id1 na frente
(?<$1>[a-z0-9\-_]+) - 