# Guia Prático de Containers com Docker

## 1. Introdução aos Containers

Os containers revolucionaram a forma como desenvolvemos e implantamos aplicações, oferecendo um ambiente isolado que garante consistência em qualquer plataforma. Diferente das máquinas virtuais, os containers compartilham o kernel do sistema operacional, tornando sua execução mais leve e eficiente.

O Docker é uma das ferramentas mais populares para gerenciar containers, permitindo criar, distribuir e executar aplicações de maneira simplificada.

---

## 2. Executando um Container pela Primeira Vez

Para verificar se o Docker está instalado corretamente, execute:

```sh
docker run hello-world
```

Esse comando baixa e executa um container que imprime uma mensagem de sucesso.

---

## 3. Gerenciando Containers

### Criando um Container com Nome Personalizado
Por padrão, o Docker atribui nomes aleatórios aos containers. Para definir um nome específico, use:

```sh
docker run --name meu_nginx nginx
```

### Rodando um Container em Background
Para executar um container sem bloquear o terminal, utilize `-d`:

```sh
docker run -d --name meu_nginx nginx
```

### Mapeando Portas
Para acessar um serviço dentro do container, mapeie as portas:

```sh
docker run -d -p 8080:80 nginx
```

Isso redireciona a porta `80` do container para a `8080` do host.

---

## 4. Listando e Parando Containers

### Verificando Containers em Execução
```sh
docker ps
```

### Listando Todos os Containers
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

Para remover um container em execução:
```sh
docker rm -f meu_nginx
```

---

## 5. Acessando um Container em Execução

### Conectando-se a um Container
```sh
docker attach meu_nginx
```

### Saindo sem Parar o Container
Pressione `CTRL + P` seguido de `CTRL + Q`.

---

## 6. Executando Comandos em Containers

### Rodando um Comando em um Novo Container
```sh
docker run nginx ls -la
```

### Acessando o Shell Interativo
```sh
docker run -it nginx bash
```

### Diferença entre `docker run` e `docker exec`
- `docker run`: Cria e inicia um novo container.
- `docker exec`: Executa comandos em um container já ativo.

Exemplo:
```sh
docker exec -it meu_nginx bash
```

### Removendo Containers Automaticamente Após a Execução
```sh
docker run --rm nginx ls -la
```

---

## 7. Removendo Múltiplos Containers

### Excluindo Containers Parados
```sh
docker rm $(docker ps -a -q)
```

### Forçando a Remoção de Todos os Containers
```sh
docker rm -f $(docker ps -a -q)
```

---

## 8. Expondo Serviços via Docker

Para rodar um servidor Nginx e disponibilizá-lo via porta:
```sh
docker run -d -p 8080:80 nginx
```

Agora, o serviço estará acessível em [http://localhost:8080](http://localhost:8080).

---

## 9. Resumo dos Comandos Essenciais

### Criando e Executando Containers
```sh
docker run [opções] imagem [comando]
```

### Listando Containers
```sh
docker ps        # Somente os em execução
docker ps -a     # Todos os containers
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
docker rm -f $(docker ps -a -q)   # Remove até os ativos
```
