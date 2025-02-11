# Guia Prático de Containers com Docker

## 1. Rodando seu Primeiro Container
Para testar se o Docker está instalado corretamente, utilize o seguinte comando:

```sh
docker run hello-world
```

Este comando baixa a imagem `hello-world` (caso ainda não esteja no sistema) e executa um container que imprime uma mensagem de confirmação.

---

## 2. Nomeando e Executando Containers

### Criando um Container com Nome Específico
Se não for definido, o Docker atribui nomes aleatórios aos containers. Para especificar um nome, utilize `--name`:

```sh
docker run --name meu_nginx nginx
```

### Rodando um Container em Segundo Plano
Para executar um container sem que ele bloqueie o terminal, use a flag `-d`:

```sh
docker run -d --name meu_nginx nginx
```

### Redirecionando Portas
Para acessar um serviço rodando dentro do container, mapeie portas com `-p`:

```sh
docker run -d -p 8080:80 nginx
```

Isso redireciona a porta `80` do container para a porta `8080` do host.

---

## 3. Gerenciando Containers

### Listando Containers
Containers em execução:

```sh
docker ps
```

Todos os containers (incluindo os parados):

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
Removendo normalmente:

```sh
docker rm meu_nginx
```

Forçando a remoção de um container em execução:

```sh
docker rm -f meu_nginx
```

---

## 4. Conectando-se a um Container

### Acessando a Execução de um Container
```sh
docker attach meu_nginx
```

### Saindo sem Parar o Container
Pressione `CTRL + P`, seguido de `CTRL + Q`.

---

## 5. Executando Comandos e Removendo Containers Após a Execução

### Executando um Comando em um Novo Container
```sh
docker run nginx ls -la
```

### Acessando um Container com Bash
```sh
docker run -it nginx bash
```

### Diferença entre `docker run` e `docker exec`
- `docker run`: Cria e inicia um novo container.
- `docker exec`: Executa comandos dentro de um container em execução.

Exemplo de `docker exec`:

```sh
docker exec -it meu_nginx bash
```

### Removendo Containers Automaticamente Após a Execução
```sh
docker run --rm nginx ls -la
```

---

## 6. Removendo Múltiplos Containers

### Excluindo Containers Parados
```sh
docker rm $(docker ps -a -q)
```

### Excluindo Todos os Containers, Incluindo os Ativos
```sh
docker rm -f $(docker ps -a -q)
```

---

## 7. Expondo Serviços via Docker
Para rodar um servidor Nginx e disponibilizar via porta:

```sh
docker run -d -p 8080:80 nginx
```

Agora, o servidor estará acessível em [http://localhost:8080](http://localhost:8080).

---

## 8. Acesso Interativo ao Container

### Acessando o Terminal de um Container
```sh
docker exec -it meu_nginx bash
```

### Diferença entre `docker exec` e `docker attach`
- `docker exec`: Permite rodar um processo extra dentro do container (ex.: abrir um shell bash).
- `docker attach`: Conecta diretamente ao processo principal do container.

---

## 9. Resumo dos Comandos Essenciais

### Criando e Executando Containers
```sh
docker run [opções] imagem [comando]
```

### Listando Containers
```sh
docker ps        # Somente em execução
docker ps -a     # Todos
```

### Gerenciando Containers
```sh
docker stop <nome|id>
docker start <nome|id>
docker rm <nome|id>
docker rm -f <nome|id>   # Forçado
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
docker rm -f $(docker ps -a -q)   # Remove até os em execução
```
