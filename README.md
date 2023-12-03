# Projeto de Reservas de Laboratórios 🌐 Web Dev

<div style="display: inline_block">
<img align="center" alt="Wemerson-Nino-React" height="40" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg">
<img align="center" alt="Wemerson-Nino-httpp" height="40" width="40" src="https://user-images.githubusercontent.com/25181517/192107854-765620d7-f909-4953-a6da-36e1ef69eea6.png">
<img align="center" alt="Wemerson-Nino-Rest" height="40" width="40" src="https://user-images.githubusercontent.com/25181517/192107858-fe19f043-c502-4009-8c47-476fc89718ad.png">
<img align="center" alt="Wemerson-Nino-Bootstrap" height="40" width="40" src="https://user-images.githubusercontent.com/25181517/183898054-b3d693d4-dafb-4808-a509-bab54cf5de34.png">
</div><br>

Este projeto é uma aplicação web desenvolvida em React para gerenciar reservas de laboratórios. Ele permite a reserva de laboratórios por usuários, exibição da lista de laboratórios disponíveis, visualização e gerenciamento de agendamentos.

Currently, two official plugins are available:

## Funcionalidades 🔨 
> Cadastro de Laboratórios: Permite o cadastro de novos laboratórios com nome e quantidade de computadores.
> Lista de Laboratórios: Exibe a lista de laboratórios cadastrados, com opções para edição e exclusão.
> Reserva de Laboratórios: Usuários podem fazer reservas de laboratórios, informando nome, e-mail, data e laboratório desejado.
> Agendamentos: Exibe a lista de agendamentos, com opções para edição e exclusão.

## Instalação e Execução 📜

1. Clone o repositório:
``` bash
git clone https://github.com/wemersonnino/Atividade-com-Requisi-es-HTTP-interdiciplinar-atividade-.git
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

## Estrutura do Projeto :atm:
- src/components: Contém os componentes reutilizáveis da aplicação.
- src/pages: Páginas da aplicação.
- src/services: Funções e configurações relacionadas a serviços externos (ex: API).

## API Backend :capital_abcd:

O projeto assume a existência de uma API backend para a comunicação com o servidor. Certifique-se de ter a API backend configurada corretamente para o pleno funcionamento da aplicação.
Para rodar o servidor backend se faz necessário abri um outro terminal e rodar o comando abaixo.

- Configure o servidor backend `json-server` para que o `CRUD` funcione:

``` shel
npm run json-server

or
yarn run json-server

```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## Contribuições :chocolate_bar:
Contribuições da Yasmin 

Outras contribuições são bem-vindas! Sinta-se à vontade para abrir problemas (issues) e enviar pull requests com melhorias.

## Contact :mailbox_with_no_mail:
Wemerson Nino - @wemersonnino - wemersonnino@yahoo.com.br

Yasmin - @yasmin - 

Project Link: https://github.com/your_username/repo_name



Licença
Este projeto está sob a licença MIT.
