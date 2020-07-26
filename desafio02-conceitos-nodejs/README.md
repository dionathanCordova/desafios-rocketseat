<article class="markdown-body entry-content container-lg" itemprop="text"><p><a target="_blank" rel="noopener noreferrer" href="https://camo.githubusercontent.com/d25397e9df01fe7882dcc1cbc96bdf052ffd7d0c/68747470733a2f2f73746f726167652e676f6f676c65617069732e636f6d2f676f6c64656e2d77696e642f626f6f7463616d702d676f737461636b2f6865616465722d6465736166696f732e706e67"><img alt="GoStack" src="https://camo.githubusercontent.com/d25397e9df01fe7882dcc1cbc96bdf052ffd7d0c/68747470733a2f2f73746f726167652e676f6f676c65617069732e636f6d2f676f6c64656e2d77696e642f626f6f7463616d702d676f737461636b2f6865616465722d6465736166696f732e706e67" data-canonical-src="https://storage.googleapis.com/golden-wind/bootcamp-gostack/header-desafios.png" style="max-width:100%;"></a></p>
<h3 align="center"><a id="user-content---desafio-02-conceitos-do-nodejs" class="anchor" aria-hidden="true" href="#--desafio-02-conceitos-do-nodejs"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>
  Desafio 02: Conceitos do Node.js
</h3>
<blockquote align="center">“Não espere para plantar, apenas tenha paciência para colher”!</blockquote>
<p align="center">
  <a target="_blank" rel="noopener noreferrer" href="https://camo.githubusercontent.com/c2c6c348ddb51d2e2c8568f382d38980094a3f92/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f6c616e6775616765732f636f756e742f726f636b6574736561742f626f6f7463616d702d676f737461636b2d6465736166696f733f636f6c6f723d253233303444333631"><img alt="GitHub language count" src="https://camo.githubusercontent.com/c2c6c348ddb51d2e2c8568f382d38980094a3f92/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f6c616e6775616765732f636f756e742f726f636b6574736561742f626f6f7463616d702d676f737461636b2d6465736166696f733f636f6c6f723d253233303444333631" data-canonical-src="https://img.shields.io/github/languages/count/rocketseat/bootcamp-gostack-desafios?color=%2304D361" style="max-width:100%;"></a>
  <a href="https://rocketseat.com.br" rel="nofollow">
    <img alt="Made by Rocketseat" src="https://camo.githubusercontent.com/d684049062a2d9fc1734c726232c4b3b30e2bf47/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6d61646525323062792d526f636b6574736561742d253233303444333631" data-canonical-src="https://img.shields.io/badge/made%20by-Rocketseat-%2304D361" style="max-width:100%;">
  </a>
  <a target="_blank" rel="noopener noreferrer" href="https://camo.githubusercontent.com/dda2124efff062e38068943c6e848540387df6e5/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6c6963656e73652d4d49542d253233303444333631"><img alt="License" src="https://camo.githubusercontent.com/dda2124efff062e38068943c6e848540387df6e5/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6c6963656e73652d4d49542d253233303444333631" data-canonical-src="https://img.shields.io/badge/license-MIT-%2304D361" style="max-width:100%;"></a>
  <a href="https://github.com/Rocketseat/bootcamp-gostack-desafios/stargazers">
    <img alt="Stargazers" src="https://camo.githubusercontent.com/4aaad2bae4ed5641e50ec0b4ea845d75cf5af7aa/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f73746172732f726f636b6574736561742f626f6f7463616d702d676f737461636b2d6465736166696f733f7374796c653d736f6369616c" data-canonical-src="https://img.shields.io/github/stars/rocketseat/bootcamp-gostack-desafios?style=social" style="max-width:100%;">
  </a>
</p>
<p align="center">
  <a href="#rocket-sobre-o-desafio">Sobre o desafio</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#calendar-entrega">Entrega</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>
<h2><a id="user-content-rocket-sobre-o-desafio" class="anchor" aria-hidden="true" href="#rocket-sobre-o-desafio"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a><g-emoji class="g-emoji" alias="rocket" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f680.png"><img class="emoji" alt="rocket" height="20" width="20" src="https://github.githubassets.com/images/icons/emoji/unicode/1f680.png"></g-emoji> Sobre o desafio</h2>
<p>Nesse desafio, você deve criar uma aplicação para treinar o que você aprendeu até agora no Node.js!</p>
<p>Essa será uma aplicação para armazenar repositórios do seu portfólio, que irá permitir a criação, listagem, atualização e remoção dos repositórios, e além disso permitir que os repositórios possam receber "likes".</p>
<h3><a id="user-content-template-da-aplicação" class="anchor" aria-hidden="true" href="#template-da-aplicação"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Template da aplicação</h3>
<p>Para te ajudar nesse desafio, criamos para você um modelo que você deve utilizar como um template do Github.</p>
<p>O template está disponível na seguinte url: <strong><a href="https://github.com/Rocketseat/gostack-template-conceitos-nodejs">Acessar Template</a></strong></p>
<p><strong>Dica</strong>: Caso não saiba utilizar repositórios do Github como template, temos um guia em <strong><a href="https://github.com/Rocketseat/bootcamp-gostack-desafios/tree/master/faq-desafios">nosso FAQ</a>.</strong></p>
<p>Agora navegue até a pasta criada e abra no Visual Studio Code, lembre-se de executar o comando <code>yarn</code> no seu terminal para instalar todas as dependências, e você terá algo parecido com isso:</p>
<p align="center">
  <a target="_blank" rel="noopener noreferrer" href="/Rocketseat/bootcamp-gostack-desafios/blob/master/desafio-conceitos-nodejs/assets/nodejs-example.png"><img src="/Rocketseat/bootcamp-gostack-desafios/raw/master/desafio-conceitos-nodejs/assets/nodejs-example.png" style="max-width:100%;"></a>
</p>
<h3><a id="user-content-rotas-da-aplicação" class="anchor" aria-hidden="true" href="#rotas-da-aplicação"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Rotas da aplicação</h3>
<p>Agora que você já está com o template clonado, e pronto para continuar, você deve abrir o arquivo app.js, e completar onde não possui código com o código para atingir os objetivos de cada rota.</p>
<ul>
<li>
<p><strong><code>POST /repositories</code></strong>: A rota deve receber <code>title</code>, <code>url</code> e <code>techs</code> dentro do corpo da requisição, sendo a URL o link para o github desse repositório. Ao cadastrar um novo projeto, ele deve ser armazenado dentro de um objeto no seguinte formato: <code>{ id: "uuid", title: 'Desafio Node.js', url: 'http://github.com/...', techs: ["Node.js", "..."], likes: 0 }</code>; Certifique-se que o ID seja um UUID, e de sempre iniciar os likes como 0.</p>
</li>
<li>
<p><strong><code>GET /repositories</code></strong>: Rota que lista todos os repositórios;</p>
</li>
<li>
<p><strong><code>PUT /repositories/:id</code></strong>: A rota deve alterar apenas o <code>title</code>, a <code>url</code> e as <code>techs</code> do repositório que possua o <code>id</code> igual ao <code>id</code> presente nos parâmetros da rota;</p>
</li>
<li>
<p><strong><code>DELETE /repositories/:id</code></strong>: A rota deve deletar o repositório com o <code>id</code> presente nos parâmetros da rota;</p>
</li>
<li>
<p><strong><code>POST /repositories/:id/like</code></strong>: A rota deve aumentar o número de likes do repositório específico escolhido através do <code>id</code> presente nos parâmetros da rota, a cada chamada dessa rota, o número de likes deve ser aumentado em 1;</p>
</li>
</ul>
<p><strong>Dica</strong>: Acima utilizamos <code>POST</code> em uma rota, mesmo ela alterando o número de likes do repositório sem criar nada diretamente.</p>
<p>Se dividirmos semânticamente as responsabilidades da nossa aplicação em entidades, o <code>like</code> seria uma entidade, e <code>repository</code> seria outra entidade.</p>
<p>Com essa separação, temos diferentes regras de negócio para cada entidade, assim, ao chamar a rota de <code>like</code> e adicionamos apenas um like, podemos interpretar que estamos criando um novo like, e não atualizando os likes.</p>
<p>Então por que não usar <code>PUT</code> no lugar de <code>POST</code>? Justamente por estarmos "criando" UM novo like, e não atualizando o número de likes para qualquer outro valor.</p>
<p>Talvez fique difícil enxergar por ser apenas um número, mas pense que cada like seja salvo em uma tabela no banco junto do usuário que realizou esse like. Agora fica mais claro que você está criando um novo like, certo?</p>
<p>Bons estudos &lt;3</p>
<h3><a id="user-content-específicação-dos-testes" class="anchor" aria-hidden="true" href="#específicação-dos-testes"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Específicação dos testes</h3>
<p>Em cada teste, tem uma breve descrição no que sua aplicação deve cumprir para que o teste passe.</p>
<p>Caso você tenha dúvidas quanto ao que são os testes, e como interpretá-los, dé uma olhada em <strong><a href="https://github.com/Rocketseat/bootcamp-gostack-desafios/tree/master/faq-desafios">nosso FAQ</a>.</strong></p>
<p>Para esse desafio temos os seguintes testes:</p>
<ul>
<li>
<p><strong><code>should be able to create a new repository</code></strong>: Para que esse teste passe, sua aplicação deve permitir que um repositório seja criado, e retorne um json com o projeto criado.</p>
</li>
<li>
<p><strong><code>should be able to list the repositories</code></strong>: Para que esse teste passe, sua aplicação deve permitir que seja retornado um array com todos os repositórios que foram criados até o momento.</p>
</li>
<li>
<p><strong><code>should be able to update repository</code></strong>: Para que esse teste passe, sua aplicação deve permitir que sejam alterados apenas os campos <code>url</code>, <code>title</code> e <code>techs</code>.</p>
</li>
<li>
<p><strong><code>should not be able to update a repository that does not exist</code></strong>: Para que esse teste passe, você deve validar na sua rota de update se o id do repositório enviado pela url existe ou não. Caso não exista, retornar um erro com status <code>400</code>.</p>
</li>
<li>
<p><strong><code>should not be able to update repository likes manually</code></strong>: Para que esse teste passe, você não deve permitir que sua rota de update altere diretamente os likes desse repositório, mantendo o mesmo número de likes que o repositório já possuia antes da atualização. Isso porque o único lugar que deve atualizar essa informação é a rota responsável por aumentar o número de likes.</p>
</li>
<li>
<p><strong><code>should be able to delete the repository</code></strong>: Para que esse teste passe, você deve permitir que a sua rota de delete exclua um projeto, e ao fazer a exclusão, ele retorne uma resposta vazia, com status <code>204</code>.</p>
</li>
<li>
<p><strong><code>should not be able to delete a repository that does not exist</code></strong>: Para que esse teste passe, você deve validar na sua rota de delete se o id do repositório enviado pela url existe ou não. Caso não exista, retornar um erro com status <code>400</code>.</p>
</li>
<li>
<p><strong><code>should be able to give a like to the repository</code></strong>: Para que esse teste passe, sua aplicação deve permitir que um repositório com o id informado possa receber likes. O valor de likes deve ser incrementado em 1 a cada requisição, e como resultado, retornar um json contendo o repositório com o número de likes atualizado.</p>
</li>
<li>
<p><strong><code>should not be able to like a repository that does not exist</code></strong>: Para que esse teste passe, você deve validar na sua rota de like se o id do repositório enviado pela url existe ou não. Caso não exista, retornar um erro com status <code>400</code>.</p>
</li>
</ul>
<h2><a id="user-content-calendar-entrega" class="anchor" aria-hidden="true" href="#calendar-entrega"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a><g-emoji class="g-emoji" alias="calendar" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f4c6.png"><img class="emoji" alt="calendar" height="20" width="20" src="https://github.githubassets.com/images/icons/emoji/unicode/1f4c6.png"></g-emoji> Entrega</h2>
<p>Esse desafio deve ser entregue a partir da plataforma Skylab, envie o link do repositório que você fez suas alterações. Após concluir o desafio, fazer um post no Linkedin e postar o código no Github é uma boa forma de demonstrar seus conhecimentos e esforços para evoluir na sua carreira para oportunidades futuras.</p>
<h2><a id="user-content-memo-licença" class="anchor" aria-hidden="true" href="#memo-licença"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a><g-emoji class="g-emoji" alias="memo" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f4dd.png"><img class="emoji" alt="memo" height="20" width="20" src="https://github.githubassets.com/images/icons/emoji/unicode/1f4dd.png"></g-emoji> Licença</h2>
<p>Esse projeto está sob a licença MIT. Veja o arquivo <a href="/Rocketseat/bootcamp-gostack-desafios/blob/master/desafio-conceitos-nodejs/LICENSE">LICENSE</a> para mais detalhes.</p>
<hr>
<p>Feito com <g-emoji class="g-emoji" alias="purple_heart" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f49c.png"><img class="emoji" alt="purple_heart" height="20" width="20" src="https://github.githubassets.com/images/icons/emoji/unicode/1f49c.png"></g-emoji> by Rocketseat <g-emoji class="g-emoji" alias="wave" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f44b.png"><img class="emoji" alt="wave" height="20" width="20" src="https://github.githubassets.com/images/icons/emoji/unicode/1f44b.png"></g-emoji> <a href="https://discordapp.com/invite/gCRAFhc" rel="nofollow">Entre na nossa comunidade!</a></p>
</article>