 # COMANDO CONSUL
 - consul agent -server -bootstrap-expect=3 -node=consulserver02 -bind=172.18.0.2 -data-dir=/var/lib/consul -config-dir =/etc/consul.d