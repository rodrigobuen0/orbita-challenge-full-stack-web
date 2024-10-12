## Decisão da Arquitetura Utilizada

A aplicação foi desenvolvido com base no padrão MVC (Model-View-Controller) com back-end em Asp .NET Core e front-end em Vue.js:

- **Model**: Cuida da lógica de dados e da interação com o banco de dados.
- **View**: É responsável pela interface do usuário, utilizando Vue.js.
- **Controller**: Gerencia as regras de negócios e as requisições HTTP com autenticação baseada em JWT.

## Bibliotecas Utilizadas

### Back-end:
- Microsoft.AspNetCore.Authentication.JwtBearer
- Microsoft.AspNetCore.Identity.EntityFrameworkCore
- Microsoft.EntityFrameworkCore
- Microsoft.EntityFrameworkCore.Design
- Microsoft.EntityFrameworkCore.Tools
- Microsoft.IdentityModel.Tokens
- Pomelo.EntityFrameworkCore.MySql
- Swashbuckle.AspNetCore
- System.IdentityModel.Tokens.Jwt

### Front-end:
- axios
- vue
- vue-router
- vue-the-mask
- vuetify

## Melhorias Futuras

Com mais tempo, eu focaria em:
- **Testes Unitários**: Não implementei testes unitários devido à falta de experiência. Caso tivesse mais tempo, buscaria o conhecimento e implementaria os testes.
- **Melhoria de UI/UX**: Melhoraria a experiência do usuário.

## Requisitos Obrigatórios Não Entregues

Todos os requisitos obrigatórios foram atendidos.
