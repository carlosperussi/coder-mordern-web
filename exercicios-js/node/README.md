# How to

### Criando um projeto
Para transformar o seu projeto em um package, utilize no terminal o comando npm init e responda as perguntas do wizard, ou utilize npm init -y para responder à todas as perguntas do wizard como YES. Ao fim, será criado dentro da pasta do projeto um arquivo chamado 'package.json' e um arquivo 'package-lock.json'.

### Incluindo dependências
Para incluir dependências estritamente no seu package, utilize o comando npm -i --save {nomedopackage}. Com este comando, o diretório 'node_modules' será criado dentro da estrutura do seu package e o arquivo 'package.json' será atualizado, incluindo a dependência.

#### Dependências para dev
Da mesma forma, caso queira incluir uma dependência que será utilizada apenas durante o desenvolvimento, utilize o comando npm i --save-dev {nomedopackage}. Com isso, ao buildar o seu package, a dependência não será inclusa.

#### Instalando dependências em versão específica
Para isso, utilize o comando npm i --save {nomedopackage}@{numerodaversao} -E.