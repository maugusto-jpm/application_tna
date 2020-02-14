# Avaliação TNA

Os exercícios individuais estã na pasta `individual_applications`

## servidor

O servidor para os exercícios 1 e 3 é um servidor em [Node.Js](https://nodejs.org/en/).

# Dependências

Para executar este servidor é necessário ter nstalados o [Node.Js](https://nodejs.org/en/) e o [Yarn](https://yarnpkg.com/)

Para executar, basta seguir os passos a seguir:

- Executar o comando `yarn install` para instalar as dependências. no caso é o [Express](https://expressjs.com/pt-br) e suas dependências
- Executar o comando `yarn start` para executar o servidor
- Usar o [Postman](https://www.postman.com/) para fazer requisições HTTP

### Rotas

#### O percentual do votos válidos em relação ao total de eleitores

Caminho: /election-calculation/percentage-of-valid-vows
Verbo: GET
Corpo da requisição: Sem corpo
Resposta (JSON):

```json
{
  "result": 10
}
```

#### O percentual de brancos em relação ao total de eleitores

Caminho: /election-calculation/percentage-of-white-vows
Verbo: GET
Corpo da requisição: Sem corpo
Resposta (JSON):

```json
{
  "result": 10
}
```

#### O percentual de nulos em relação ao total de eleitores

Caminho: /election-calculation/percentage-of-null-vows
Verbo: GET
Corpo da requisição: Sem corpo
Resposta (JSON):

```json
{
  "result": 10
}
```

#### Fatorial de um número

Caminho: /factorial
Verbo: POST
Corpo da requisição (JSON):

```json
{
  "number": 10
}
```

Resposta (JSON):

```json
{
  "result": 10
}
```
