### API NODE COM NGINX

Para lista os usuarios acesse a rota usando o curl:

curl --request GET \
  --url http://localhost:8080/ \
  --header 'User-Agent: insomnia/8.4.5'

Para ver usuario apos o nome FULLCYCLE use a rota com o curl, o numero do id e necessario como parametro da url:

curl --request GET \
  --url http://localhost:8080/1 \
  --header 'User-Agent: insomnia/8.4.5'

Caso queira cadastrar novo usuario utilize a rota do curl:

curl --request POST \
  --url http://localhost:8080/create \
  --header 'Content-Type: application/json' \
  --header 'User-Agent: insomnia/8.4.5' \
  --data '{
	"name":"gabriel 2"
}'

Ao roda a aolicação serão cadastrados 3 usuarios:
 - Gabriel
 - Maria
 - Melissa