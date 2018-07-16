<h1 align="center">Star Wars Planets</h1>

<h2 align="center"><img src="https://www.mysoti.com/img/user/angold01/product/web/1447319/1447319_show_default.png" width="500" alt="Millenium Falcon"></img></h2>

## Descrição

Este é um desafio proposto pela B2W Digital, que consiste no desenvolvimento de um jogo que serve como base para adivinhar o nome de um planeta existente no universo Star Wars, através de informações como: população, clima, terreno e em quantos filmes o planeta apareceu. O planeta será sorteado pela aplicação.

## Sumário

+ Star Wars Planets
    + Regras do jogo
    + Como jogar?
        + Na internet
        + Localmente
            + Primeira Etapa
            + Segunda Etapa
    + Como foi feito?

### Star Wars Planets

#### Regras do jogo

As regras ficam à critério dos jogadores. Eles podem decidir sobre o número de tentativas e erros até passar a vez, quantas vezes pode-se pular para que assim outro planeta seja sorteado e etc. E claro, é muito mais legal se duas ou mais pessoas estiverem participando do jogo.

#### Como jogar?

Digamos que duas pessoas irão começar a jogar Star Wars Planets. Uma vai fazer as perguntas e a outra irá tentar adivinhar o nome do planeta.

A primeira pessoa, assim que o menu carregar, vai clicar no botão "Play Game". Assim que ela tiver clicado, um planeta será sorteado e suas características serão apresentadas. A primeira pessoa pode perguntar, por exemplo, qual planeta no universo Star Wars possui o clima árido, ou que possua somente oceanos em sua superfície.

Se a segunda pessoa acertar, a primeira pessoa vai clicar no botão "Next" para que um outro planeta seja sorteado.

##### Na internet

Você não precisa ser um cavaleiro Jedi para ser um seguidor da Força.

Caso queira jogar em qualquer lugar, basta acessar o seguinte endereço: https://star-wars-b2w-lucas-amaral.netlify.com/#/

##### Localmente

Agora, caso você queira se aprofundar e saber mais sobre os caminhos da Força, vamos ter que cumprir algumas etapas.

###### Primeira Etapa

Você vai precisar instalar o node.js no seu computador. O instalador pode ser baixado [aqui](https://nodejs.org/en/download/).

Agora vamos abrir o terminal e seguir para a próxima etapa.

Mas antes, caso você não tenha nenhum terminal instalado, você pode baixar o instalador nos seguintes links:

Se você for usuário de Windows, [clique aqui](https://gitforwindows.org/).

Caso use Linux ou Mac, [clique aqui](https://git-scm.com/downloads). Nesse link há também uma opção de download para Windows.

Agora sim! Vamos para a segunda etapa.

###### Segunda Etapa

Agora você já é um Padawan. E sua primeira missão será clonar o repositório para a sua máquina.

Abra o terminal e digite o seguinte:

``` bash
git clone https://github.com/LucasSAmaral/Star-Wars-B2W.git
```
Espere até que todo o repositório seja baixado e digite:

``` bash
cd Star-Wars-B2W
```
Agora que você entrou na pasta do projeto, será necessário instalar todas as dependências para que o jogo possa rodar no seu computador. Para isso, digite o comando abaixo e espere a instalação terminar.

``` bash
npm install
```
Por fim, você vai precisar do último comando abaixo para começar a jogar. 

``` bash
npm run dev
```
Missão cumprida, jovem Padawan! Eu sabia que a Força é forte em você!

Acesse o endereço http://localhost:8080/#/ e comece a jogar.

### Como foi feito?

Para desenvolver a aplicação, utilizei as seguintes tecnologias:

* Vue.js para criar os componentes, fazer a navegação por rotas e a requisição à API.

* O pré-processador SASS, para a reutilizar o código CSS em algumas páginas.

* jQuery para fazer as transições da versão desktop da página principal.

* Foi utilizada a API [SWAPI](https://swapi.co), que possui uma base de dados com informações sobre planetas, naves, veículos, espécies e personagens do universo Star Wars.

* Foi feito um Teste Unitário para checar a renderização dos componentes. Use o seguinte comando para rodar esse teste:
    
``` bash
npm run unit
```
* Foram feitos também Testes e2e, para verificar a navegação do aplicativo. Use o seguinte comando para rodar o teste end-to-end:

``` bash
npm run e2e
```

Caso queira rodar os dois testes com um só comando, utilize:

``` bash
npm run test
```