# Guia Essencial de Containers com Docker

## 1. Entendendo Containers e Docker

Os containers trouxeram uma nova forma de desenvolver e implantar aplicações, proporcionando um ambiente isolado e consistente. Diferente das máquinas virtuais, eles compartilham o kernel do sistema operacional, tornando a execução mais eficiente.

O Docker é uma das ferramentas mais populares para criar, gerenciar e distribuir containers, facilitando o desenvolvimento e a escalabilidade de aplicações.

---

## 2. Executando um Container pela Primeira Vez

Para verificar se o Docker está instalado corretamente, use o seguinte comando:

```sh
docker run hello-world
```

Este comando baixa e executa um container simples que exibe uma mensagem de confirmação.

---

## 3. Gerenciando Containers

### Criando um Container com Nome Definido
O Docker atribui nomes aleatórios aos containers por padrão. Para especificar um nome, utilize:

```sh
docker run --name meu_nginx nginx
```

### Executando um Container em Background
Para rodar um container sem que ele ocupe o terminal, utilize `-d`:

```sh
docker run -d --name meu_nginx nginx
```

### Configurando Portas
Para disponibilizar um serviço do container para o host, faça o mapeamento de portas:

```sh
docker run -d -p 8080:80 nginx
```

Isso conecta a porta `80` do container à porta `8080` do sistema host.

---

## 4. Listando e Gerenciando Containers

### Verificando Containers em Execução
```sh
docker ps
```

### Listando Todos os Containers (Incluindo os Parados)
```sh
docker ps -a
```

### Parando um Container
```sh
docker stop meu_nginx
```

### Reiniciando um Container Parado
```sh
docker start meu_nginx
```

### Removendo um Container
```sh
docker rm meu_nginx
```

Para remover um container ativo:
```sh
docker rm -f meu_nginx
```

---

## 5. Interagindo com um Container

### Conectando-se a um Container
```sh
docker attach meu_nginx
```

### Saindo sem Encerrar o Processo
Pressione `CTRL + P`, seguido de `CTRL + Q`.

---

## 6. Executando Comandos em Containers

### Executando um Comando em um Novo Container
```sh
docker run nginx ls -la
```

### Abrindo um Terminal Interativo
```sh
docker run -it nginx bash
```

### Diferença entre `docker run` e `docker exec`
- `docker run`: Cria e inicia um novo container.
- `docker exec`: Executa um comando em um container já ativo.

Exemplo de uso do `docker exec`:
```sh
docker exec -it meu_nginx bash
```

### Removendo Containers Automaticamente Após a Execução
```sh
docker run --rm nginx ls -la
```

---

## 7. Removendo Múltiplos Containers

### Eliminando Containers Parados
```sh
docker rm $(docker ps -a -q)
```

### Forçando a Remoção de Todos os Containers
```sh
docker rm -f $(docker ps -a -q)
```

---

## 8. Expondo Serviços com Docker

Para rodar um servidor Nginx e expô-lo via porta:
```sh
docker run -d -p 8080:80 nginx
```

O serviço estará acessível em [http://localhost:8080](http://localhost:8080).

---

## 9. Resumo dos Comandos Principais

### Criando e Executando Containers
```sh
docker run [opções] imagem [comando]
```

### Listando Containers
```sh
docker ps        # Apenas os em execução
docker ps -a     # Todos os containers
```

### Gerenciando Containers
```sh
docker stop <nome|id>
docker start <nome|id>
docker rm <nome|id>
docker rm -f <nome|id>   # Remoção forçada
```

### Executando Comandos Dentro de um Container
```sh
docker exec -it <nome|id> <comando>
```

### Acessando o Terminal Bash
```sh
docker exec -it <nome|id> bash
```

### Removendo Containers
```sh
docker rm $(docker ps -a -q)
docker rm -f $(docker ps -a -q)   # Remove até os ativos
```
