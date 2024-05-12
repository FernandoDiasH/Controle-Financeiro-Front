## Passo a passo para a migrar o modulo de Contatos
### Nexus
1. Atualize a branch master e envie as alterações.
2. Pare os serviços do nexus e inicie apenas o banco de dados com os comandos a baixo.
```sh
nxcServiceStop
/etc/init.d/postgressql start
```
3. Migre a estrutura antiga das tabelas para a estrutura nova.
```sh
admNcall bd atualiza  
```
4. Corrija as referências das tabelas ligação e chat para os dados migrados.
```sh
admNcall db atualiza contato
```
### Nchat
1. Atualize a branch master dos projetos do nchat e envie as aterações.
2. Reinicie os projetos do nchat.
```sh
admNcall nchat restart
```
### Nexmail
1. Atualize a branch master do nexmail e envie as alterações.
2. Reinicie os serviços do nexmail.
```sh
supervisorctl restart all
```
### Nexomni
1. Atualize a branch master do Nexomni e envie as alterações.
2. Realize o build do projeto. 
```sh
ng build 
# Ou, se não tiver o ng instalado globalmente, execute na raiz do projeto
npx ng build 
```
3.Mova a pasta gerada no build para a pasta /sistema .
#### Por último inicie os serviços do Nexus
```sh
nxcServiceStart
```
### Problemas que podem ocorrer
* Caso apareça algum erro quando acessar o modulo de contato, limpe os cache e recarregue a pagina.
* Caso apareça algum erro quando abrir a tela de campanha tanto voz quanto chat, verifique se o arquivo '/var/log/ncall/importar-mailing.log' esta com o usuario configurado para www-data:www-data.
```sh
# para corrigir 
chown www-data:www-data /var/log/ncall/importar-mailing.log
```