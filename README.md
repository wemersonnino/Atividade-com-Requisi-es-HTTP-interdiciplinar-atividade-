# Projeto de Reservas de Laboratórios

Este projeto é uma aplicação web desenvolvida em React para gerenciar reservas de laboratórios. Ele permite a reserva de laboratórios por usuários, exibição da lista de laboratórios disponíveis, visualização e gerenciamento de agendamentos.

Currently, two official plugins are available:

## Funcionalidades
> Cadastro de Laboratórios: Permite o cadastro de novos laboratórios com nome e quantidade de computadores.
> Lista de Laboratórios: Exibe a lista de laboratórios cadastrados, com opções para edição e exclusão.
> Reserva de Laboratórios: Usuários podem fazer reservas de laboratórios, informando nome, e-mail, data e laboratório desejado.
> Agendamentos: Exibe a lista de agendamentos, com opções para edição e exclusão.

## Instalação e Execução

1. Clone o repositório:
``` bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
```

2. Acesse o diretório do projeto:

```bash
cd Atividade-com-Requisições-HTTP(interdiciplinar-atividade)
````

3. Instale as dependências:

```bash
npm install

or 
yarn install
```

4. Inicie a aplicação:

```bash
npm start

or 
yarn dev
```
Acesse a aplicação em http://localhost:3000 no navegador.

## Estrutura do Projeto
- src/components: Contém os componentes reutilizáveis da aplicação.
- src/pages: Páginas da aplicação.
- src/services: Funções e configurações relacionadas a serviços externos (ex: API).

## API Backend

O projeto assume a existência de uma API backend para a comunicação com o servidor. Certifique-se de ter a API backend configurada corretamente para o pleno funcionamento da aplicação.

- Configure o servidor backend `json-server` para que o `CRUD` funcione:

``` shel
npm run json-server

or
yarn run json-server

```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## Contribuições
Contribuições da Yasmin 

Outras contribuições são bem-vindas! Sinta-se à vontade para abrir problemas (issues) e enviar pull requests com melhorias.

## Contact
Wemerson Nino - @wemersonnino - wemersonnino@yahoo.com.br

Yasmin - @yasmin - 

Project Link: https://github.com/your_username/repo_name



Licença
Este projeto está sob a licença MIT.