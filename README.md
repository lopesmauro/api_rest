# API REST


## Estrutura do Projeto7

```bash

/api_rest
│
├── /src/
│   ├── /config/
│   ├── /controllers/
│   ├── /database/
│   ├── /middlewares/
│   ├── /models/
│   ├── /routes/
│   ├── /services/
│   ├── /types/
│   └── index.ts
│
├── /node_modules/
├── .editorconfig
├── .env
├── .gitignore
├── .sequelizerc
├── docker-compose.yml
├── eslint.config.mjs
├── package-lock.json
├── package.json
├── README.md
└── tsconfig.json

```

## Pré-requisitos

Se você ainda não tiver o Docker instalado, execute os seguintes comandos:

```bash
sudo apt update
sudo apt install docker.io docker-compose
sudo docker --version
```

## Como Iniciar o Projeto

### Passo 1: Clonar o repositório

```bash
git clone https://github.com/lopesmauro/api_rest.git
cd api_rest
npm i
```

### Passo 2: Definir Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto para definir as variáveis de ambiente, como o usuário e a senha do banco de dados. Exemplo:

```env
DB_HOST=localhost
DB_PORT=3307
DB_USER=root
DB_PASSWORD=root
DB_NAME=database_api_rest
NODE_ENV= development

TOKEN_SECRET=ajsnnsmsjJNHDSBD373738R98737RHbhdbcdhbh
TOKEN_EXPIRATION=7d
```

### Psso 3: Criar o arquivo `docker-compose.yml`

Aqui está o conteúdo do arquivo docker-compose.yml:

```yaml
version: '3.8'

services:
  mysql:
    image: mysql:latest
    container_name: container_bd_api
    restart: always
    ports:
      - "3307:3306"
    environment:
      MYSQL_ROOT_PASSWORD: root
      MYSQL_DATABASE: database_api_rest
      MYSQL_USER: user
      MYSQL_PASSWORD: root
    volumes:
      - mysql_data:/var/lib/mysql

volumes:
  mysql_data: {}
```

### Passo 4: Iniciar os Contêineres com Docker Compose

```bash
docker-compose up -d
```

### Passo 5: Acessar o Banco de Dados (Opcional)

```bash
sudo docker exec -it container_bd_api mysql -u user -p
```
### Passo 6: Rodar o conteiner do Redis

```bash
docker run --name cache-api-rest -p 6379:6379 -d redis
```
