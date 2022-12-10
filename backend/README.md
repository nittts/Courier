<h1 align="center">
  Courier - API
</h1>

<p align = "left">
Este é o backend da aplicação Courier - Uma dashboard focada na usabilidade e praticidade. O objetivo dessa aplicação é a gestão de entregas, controle de rotas e gestão de recursos.
</p>

<blockquote align="center">“Lembre-se da lição e não da decepção. - Holo The Wise Wolf, Spice And Wolf</blockquote>

<hr/>

# **_Tabela de Conteudos_**

- [**_Tabela de Conteudos_**](#tabela-de-conteudos)
  - [**Endpoints**](#endpoints)
    - [**Autenticação nas rotas**](#autenticação-nas-rotas)
    - [**Rotas para Administradores / Managers**](#rotas-para-administradores--managers)
  - [**Branches**](#branches)
    - [**Query Branches**](#query-branches)
    - [**Branch por ID**](#branch-por-id)
    - [**Listar Todas as Branches**](#listar-todas-as-branches)
    - [**Listar Branch do Usuário**](#listar-branch-do-usuário)
    - [**Criar Branch**](#criar-branch)
    - [**Atualizar Branch**](#atualizar-branch)
    - [**Deletar branch**](#deletar-branch)
  - [**Cities**](#cities)
    - [**Query Cities**](#query-cities)
    - [**Cidade por ID**](#cidade-por-id)
    - [**Listar Todas as Cidades**](#listar-todas-as-cidades)
    - [**Criar Cidade**](#criar-cidade)
    - [**Atualizar Cidade**](#atualizar-cidade)
    - [**Deletar Cidade**](#deletar-cidade)
  - [**Parcels**](#parcels)
    - [**Query Parcels**](#query-parcels)
    - [**Pacote por ID**](#pacote-por-id)
    - [**Listar Todos os Pacotes**](#listar-todos-os-pacotes)
    - [**Criar Pacote**](#criar-pacote)
    - [**Atualizar Pacote**](#atualizar-pacote)
    - [**Deletar Pacote**](#deletar-pacote)

## **Endpoints**

A API possui ao total 43 endpoints, girando em torno da gestão da plataforma e gestão de recursos da Branch do usuário. CRUD dos recursos e filtragens
especificas dos mesmo.

| O url base da API é https://courier-backend.onrender.com/api/v1

<br/>
<hr/>
<br/>

### **Autenticação nas rotas**

<br/>

| :warning: Todas as Routas em excessão com a de **Login e Criação** de Usuário necessitam do token de Acesso do Usuário!

caso não seja provido, o retorno esperado será:

| `{{ METHOD }} /{{ ROUTE }} -  FORMATO DA RESPOSTA - STATUS 401`

```json
{
  "status": "Unauthorized",
  "message": "Missing Authorization Headers."
}
```

Caso ocorra alguma discrepancia no token, será retornando também sobre o erro, como exemplo caso seja um JWT mal formado:

| `{{ METHOD }} /{{ ROUTE }} -  FORMATO DA RESPOSTA - STATUS 401`

```json
{
  "status": "Unauthorized",
  "message": "JWT malformed."
}
```

<br/>
<hr/>
<br/>

### **Rotas para Administradores / Managers**

<br/>

Em adição as rotas protegidas, certas rotas de dados mais sensíveis apenas são **modificaveis e/ou lidas** por usuários com o nivel de **permissão abaixo do nivel 3**:

| :exclamation: 1: **"Admin"**,
<br/>
| :exclamation: 2: **"Managers"**

Caso a rota seja acessada sem a permissão necessária ou não sejam referentes ao próprio usuário requerente, será retornado:
<br/>

| `{{ METHOD }} /{{ ROUTE }} -  FORMATO DA RESPOSTA - STATUS 401`

```json
{
  "status": "Unauthorized",
  "message": "No admin Authorization."
}
```

ou

| `{{ METHOD }} /{{ ROUTE }} -  FORMATO DA RESPOSTA - STATUS 403`

```json
{
  "status": "Forbidden",
  "message": "Users are only allowed to update their own Resources."
}
```

<hr/>

## **Branches**

O Endpoint de branches gira em torno da manutenção, leitura e adição de novas branches(matrizes) em cada cidade registrada no BD, nela sendo possivel realizar as movimentações
básicas do CRUD com query por nome e ID da cidade.

<h2 align ='center'>Buscando Branches</h2>

### **Query Branches**

Para realizar o query da branch em questão é necessário prover o nome, ID da cidade ou ID da branch em questão.

`GET /branches?name=branch-1&city_id=1 -  FORMATO DA RESPOSTA - STATUS 200`

```json
{
  "message": "Success.",
  "count": 1,
  "results": [
    {
      "id": 1,
      "name": "branch-1",
      "address": "rua 1",
      "city_id": 1,
      "branch_lat": "123466778435",
      "branch_long": "12312312312"
    }
  ]
}
```

<br/>

### **Branch por ID**

Como também a busca diretamente pelo ID da branch.

`GET /branches/1 -  FORMATO DA RESPOSTA - STATUS 200`

```json
{
  "message": "Success.",
  "results": {
    "id": 1,
    "name": "branch-1",
    "address": "rua 1",
    "city_id": 1,
    "branch_lat": "123466778435",
    "branch_long": "12312312312"
  }
}
```

<br/>

### **Listar Todas as Branches**

|:warning: **Rota de ADMIN**

Rota que faz a busca de todas as rotas registradas no banco de dados.

`GET /branches/all -  FORMATO DA RESPOSTA - STATUS 200`

```json
{
  "message": "Success.",
  "count": 4,
  "results": [
    {
      "id": 1,
      "name": "branch-1",
      "address": "rua 1",
      "city_id": 1,
      "branch_lat": "123466778435",
      "branch_long": "12312312312"
    },
    {
      "id": 2,
      "name": "branch-2",
      "address": "rua 2",
      "city_id": 2,
      "branch_lat": "123466778435",
      "branch_long": "12312312312"
    },
    {
      "id": 3,
      "name": "branch-3",
      "address": "rua 3",
      "city_id": 3,
      "branch_lat": "123466778435",
      "branch_long": "12312312312"
    },
    {
      "id": 4,
      "name": "branch-4",
      "address": "rua 4",
      "city_id": 4,
      "branch_lat": "123466778435",
      "branch_long": "12312312312"
    }
  ]
}
```

<br/>

### **Listar Branch do Usuário**

Em adição da busca por branches usando ID diretamente como parametro, também é possível
a busca da branch pelo id do usuário logado.
Para isso a rota busca pelo id do usuário registrado no token, sendo essencial na rota em questão.

`GET /branches/here -  FORMATO DA RESPOSTA - STATUS 200`

```json
{
  "message": "Success.",
  "results": {
    "id": 1,
    "name": "branch-1",
    "address": "rua 1",
    "city_id": 1,
    "branch_lat": "123466778435",
    "branch_long": "12312312312"
  }
}
```

<br/>

<h2 align ='center'>Criando Branches</h2>

### **Criar Branch**

|:warning: **Rota de ADMIN**

A rota de criação de branches é usada primariamente para o registro de uma nova branch, caso uma nova filial seja criada por exemplo.

<br/>
A requisição requer as seguintes informações:
<br/>

`POST /branches -  FORMATO DA REQUISIÇÃO`

```json
{
  "name": "branch-1",
  "address": "rua 1",
  "city_id": 1,
  "branch_lat": "123466778435",
  "branch_long": "12312312312"
}
```

A resposta esperada será:

`POST /branches -  FORMATO DA RESPOSTA - STATUS 201`

```json
{
  "message": "Branch Created.",
  "results": {
    "id": 1,
    "name": "branch-1",
    "address": "rua 1",
    "city_id": 1,
    "branch_lat": "123466778435",
    "branch_long": "12312312312"
  }
}
```

<br/>

<h2 align ='center'> Possíveis erros </h2>

|:x: Somente serão aceitos criações de branches com o campo **_"city_id"_** válidos e existentes no banco de dados. Caso não seja provido a api retornará o campo de **_"results"_** vazio.

`POST /branches -  FORMATO DA RESPOSTA - STATUS 201`

```json
{
  "message": "Branch Created.",
  "results": {}
}
```

<br/>

|:x: Todos os campos são **obrigatórios**, caso algum esteja faltando será retornado:

`POST /branches -  FORMATO DA RESPOSTA - STATUS 400`

```json
{
  "statusCode": 400,
  "message": "{{field}} field is Required.",
  "status": "Bad Request"
}
```

<br/>

|:x: Latitude/Longitude tem o tamanho máximo mundial de 21 caracteres, caso sejam providos com tamanho maior do que citados será retornado:

`POST /branches -  FORMATO DA RESPOSTA - STATUS 400`

```json
{
  "statusCode": 400,
  "message": "Invalid Coordinates length.",
  "status": "Bad Request"
}
```

<br/>

|:x: Caso já exista uma branch com o mesmo **nome** da requisição, será retornado:

`POST /branches -  FORMATO DA RESPOSTA - STATUS 400`

```json
{
  "statusCode": 400,
  "message": "Branch Already Exists.",
  "status": "Bad Request"
}
```

<br/>

<h2 align ='center'>Atualizando Branches</h2>

### **Atualizar Branch**

|:warning: **Rota de ADMIN**

<br/>

A rota de atualização das branches segue o padrão de atualizando, requerindo o ID da branch como parametro e recebendo os valores no corpo da requisição.

<br/>

`PATCH /branches/1 -  FORMATO DA REQUISIÇÃO`

```json
{
  "name": "branch-1-atualizada",
  "address": "rua 1 nova",
  "city_id": 1,
  "branch_lat": "123466778435",
  "branch_long": "12312312312"
}
```

A resposta esperada será:

`PATCH /branches/1 - FORMATO DA RESPOSTA - STATUS 200`

```json
{
  "message": "Branch Updated.",
  "results": {
    "id": 1,
    "name": "branch-1-atualizada",
    "address": "rua 1 nova",
    "city_id": 1,
    "branch_lat": "123466778435",
    "branch_long": "12312312312"
  }
}
```

<br/>

<h2 align ='center'> Possíveis erros </h2>

| :x: Caso não seja encontrado a branch em questão, será retornado:

`PATCH /branches -  FORMATO DA RESPOSTA - STATUS 404`

```json
{
  "statusCode": 404,
  "message": "Branch not Found.",
  "status": "Not Found"
}
```

</br>

<h2 align ='center'>Removendo Branches</h2>

### **Deletar branch**

|:warning: **Rota de ADMIN**

Rota pra remoção de branch registrada por id:

`DELETE /branches/1 - FORMATO DA REQUISiÇÃO `

```json
// Não é necessário corpo na requisição
```

`DELETE /branches/1 - FORMATO DA RESPOSTA - STATUS 200`

```json
{
  "message": "Branch Deleted.",
  "results": {
    "id": 1,
    "name": "branch-1",
    "address": "rua 1",
    "city_id": 1,
    "branch_lat": "123466778435",
    "branch_long": "12312312312"
  }
}
```

<h2 align ='center'> Possíveis erros </h2>

| :x: Caso não seja encontrado a branch em questão, será retornado:

`DELETE /branches/1 -  FORMATO DA RESPOSTA - STATUS 404`

```json
{
  "statusCode": 404,
  "message": "Branch not Found.",
  "status": "Not Found"
}
```

</br>
<hr/>
</br>

## **Cities**

O Endpoint da mesma maneira que o endpoint de branches, gira em torno da manutenção, leitura e adição de novas cities(cidades) no BD, nela sendo possivel realizar as movimentações
básicas do CRUD com query por nome e CEP/Postcode.

<h2 align ='center'>Buscando Cities</h2>

### **Query Cities**

Para realizar o query da branch em questão é necessário prover o nome, o postcode ou ID da cidade em questão.

`GET /cities?name=cidade-1&postcode=96900000 -  FORMATO DA RESPOSTA - STATUS 200`

```json
{
  "message": "Success.",
  "count": 1,
  "results": [
    {
      "id": 1,
      "name": "Cidade 1",
      "postcode": "96900000"
    }
  ]
}
```

<br/>

### **Cidade por ID**

Como também a busca diretamente pelo ID da cidade.

`GET /cities/1 -  FORMATO DA RESPOSTA - STATUS 200`

```json
{
  "message": "Success.",
  "results": {
    "id": 1,
    "name": "Cidade 1",
    "postcode": "96900000"
  }
}
```

<br/>

### **Listar Todas as Cidades**

|:warning: **Rota de ADMIN**

Rota que faz a busca de todas as cidades registradas no banco de dados.

`GET /cities/all -  FORMATO DA RESPOSTA - STATUS 200`

```json
{
  "message": "Success.",
  "count": 4,
  "results": [
    {
      "id": 1,
      "name": "Cidade 1",
      "postcode": "96900000"
    },
    {
      "id": 2,
      "name": "Cidade 2",
      "postcode": "96900000"
    },
    {
      "id": 3,
      "name": "Cidade 3",
      "postcode": "96900000"
    },
    {
      "id": 4,
      "name": "Cidade 4",
      "postcode": "96900000"
    }
  ]
}
```

<br/>

<h2 align ='center'>Criando Cities</h2>

### **Criar Cidade**

|:warning: **Rota de ADMIN**

A rota de criação de cities é usada primariamente para o registro de uma nova cities, caso uma nova filial seja criada por exemplo.

<br/>
A requisição requer as seguintes informações:
<br/>

`POST /cities -  FORMATO DA REQUISIÇÃO`

```json
{
  "id": 1,
  "name": "Cidade 1",
  "postcode": "96900000"
}
```

A resposta esperada será:

`POST /cities -  FORMATO DA RESPOSTA - STATUS 201`

```json
{
  "message": "City Created.",
  "results": {
    "id": 1,
    "name": "Cidade 1",
    "postcode": "96900000"
  }
}
```

<br/>

<h2 align ='center'> Possíveis erros </h2>

|:x: Todos os campos são **obrigatórios**, caso algum esteja faltando será retornado:

`POST /cities -  FORMATO DA RESPOSTA - STATUS 400`

```json
{
  "statusCode": 400,
  "message": "{{field}} field is Required.",
  "status": "Bad Request"
}
```

<br/>

|:x: CEP/PostCode tem o tamanho máximo mundial de 12 caracteres, caso sejam providos com tamanho maior do que citados será retornado:

`POST /cities -  FORMATO DA RESPOSTA - STATUS 400`

```json
{
  "statusCode": 400,
  "message": "Invalid PostCode.",
  "status": "Bad Request"
}
```

<br/>

|:x: Caso já exista uma cidade com o mesmo **nome** da requisição, será retornado:

`POST /cities -  FORMATO DA RESPOSTA - STATUS 400`

```json
{
  "statusCode": 400,
  "message": "City Already Exists.",
  "status": "Bad Request"
}
```

<br/>

<h2 align ='center'>Atualizando Cities</h2>

### **Atualizar Cidade**

|:warning: **Rota de ADMIN**

<br/>

A rota de atualização das cidades segue o padrão de atualizando, requerindo o ID da cidade como parametro e recebendo os valores no corpo da requisição.

<br/>

`PATCH /cities/1 -  FORMATO DA REQUISIÇÃO`

```json
{
  "name": "Cidade 1 atualizada",
  "postcode": "123456789"
}
```

A resposta esperada será:

`PATCH /cities/1 - FORMATO DA RESPOSTA - STATUS 200`

```json
{
  "message": "Branch Updated.",
  "results": {
    "id": 1,
    "name": "Cidade 1 atualizada",
    "postcode": "123456789"
  }
}
```

<br/>

<h2 align ='center'> Possíveis erros </h2>

| :x: Caso não seja encontrado a branch em questão, será retornado:

`PATCH /cities -  FORMATO DA RESPOSTA - STATUS 404`

```json
{
  "statusCode": 404,
  "message": "City not Found.",
  "status": "Not Found"
}
```

</br>

<h2 align ='center'>Removendo Cities</h2>

### **Deletar Cidade**

|:warning: **Rota de ADMIN**

Rota pra remoção da cidade registrada por id:

`DELETE /cities/1 - FORMATO DA REQUISiÇÃO `

```json
// Não é necessário corpo na requisição
```

`DELETE /cities/1 - FORMATO DA RESPOSTA - STATUS 200`

```json
{
  "message": "Branch Deleted.",
  "results": {
    "id": 1,
    "name": "Cidade 1",
    "postcode": "123456789"
  }
}
```

<h2 align ='center'> Possíveis erros </h2>

| :x: Caso não seja encontrado a cidade em questão, será retornado:

`DELETE /branches/1 -  FORMATO DA RESPOSTA - STATUS 404`

```json
{
  "statusCode": 404,
  "message": "City not Found.",
  "status": "Not Found"
}
```

</br>
<hr/>
</br>

## **Parcels**

O Endpoint de parcels gira em torno da manutenção, leitura e adição de novas parcels(pacotes) no BD, sendo utilizados para registrar novos pacotes enviados por clientes que requisitaram o sistema e movimenta-los nela sendo possivel o CRUD básico com query por nome, ID do client e ID do shipment(carregamento).

<h2 align ='center'>Buscando Parcels</h2>

### **Query Parcels**

Para realizar o query do parcel em questão é necessário prover o nome, ID do client ou ID do shipment.

`GET /parcles?name=branch-1tobranch-2&client_id="uuid"&shipment_id="uuid" -  FORMATO DA RESPOSTA - STATUS 200`

```json
{
  "message": "Success.",
  "count": 1,
  "results": [
    {
      "id": "5c8686bc-282e-42be-9756-13d4ad3c0826",
      "name": "branch-1tobranch-2",
      "content": "[{prod_name, prod_weight},{prod_name, prod_weight}]",
      "volume_weight": 120,
      "admission_date": "Sat Dec 10 2022 17:10:38 GMT-0300 (Brasilia Standard Time)",
      "client_id": "821496f1-7d68-4b05-8925-e900991be5e4",
      "shipment_id": "6701f60a-f2e7-4638-9e75-ed89a2829d2e"
    }
  ]
}
```

<br/>

### **Pacote por ID**

Como também a busca diretamente pelo ID da cidade.

`GET /parcels/5c8686bc-282e-42be-9756-13d4ad3c0826 -  FORMATO DA RESPOSTA - STATUS 200`

```json
{
  "message": "Success.",
  "results": {
    "id": "5c8686bc-282e-42be-9756-13d4ad3c0826",
    "name": "branch-1tobranch-2",
    "content": "[{prod_name, prod_weight},{prod_name, prod_weight}]",
    "volume_weight": 120,
    "admission_date": "Sat Dec 10 2022 17:10:38 GMT-0300 (Brasilia Standard Time)",
    "client_id": "821496f1-7d68-4b05-8925-e900991be5e4",
    "shipment_id": "6701f60a-f2e7-4638-9e75-ed89a2829d2e"
  }
}
```

<br/>

### **Listar Todos os Pacotes**

Rota que faz a busca de todas os pacotes registrados no banco de dados.

`GET /parcels/all -  FORMATO DA RESPOSTA - STATUS 200`

```json
{
  "message": "Success.",
  "count": 1,
  "results": [
    {
      "id": "5c8686bc-282e-42be-9756-13d4ad3c0826",
      "name": "branch-1tobranch-2",
      "content": "[{prod_name, prod_weight},{prod_name, prod_weight}]",
      "volume_weight": 120,
      "admission_date": "Sat Dec 10 2022 17:10:38 GMT-0300 (Brasilia Standard Time)",
      "client_id": "821496f1-7d68-4b05-8925-e900991be5e4",
      "shipment_id": "6701f60a-f2e7-4638-9e75-ed89a2829d2e"
    }
  ]
}
```

<br/>

<h2 align ='center'>Criando Parcels</h2>

### **Criar Pacote**

A rota de criação de pacotes é usada primariamente para o registro de um novo pacote a ser entregue, caso um novo carregamento seja criada ou para ficar em standy esperando um disponivel por exemplo.

<br/>
A requisição requer as seguintes informações:
<br/>

`POST /parcels -  FORMATO DA REQUISIÇÃO`

```json
{
  "name": "branch-1tobranch-2",
  "content": "[{prod_name, prod_weight},{prod_name, prod_weight}]",
  "volume_weight": 120,
  "client_id": "821496f1-7d68-4b05-8925-e900991be5e4",
  "shipment_id": "6701f60a-f2e7-4638-9e75-ed89a2829d2e"
}
```

A resposta esperada será:

`POST /parcels -  FORMATO DA RESPOSTA - STATUS 201`

```json
{
  "message": "Parcel Created.",
  "results": {
    "id": "5c8686bc-282e-42be-9756-13d4ad3c0826",
    "name": "branch-1tobranch-2",
    "content": "[{prod_name, prod_weight},{prod_name, prod_weight}]",
    "volume_weight": 120,
    "admission_date": "Sat Dec 10 2022 17:10:38 GMT-0300 (Brasilia Standard Time)",
    "client_id": "821496f1-7d68-4b05-8925-e900991be5e4",
    "shipment_id": "6701f60a-f2e7-4638-9e75-ed89a2829d2e"
  }
}
```

<br/>

<h2 align ='center'> Possíveis erros </h2>

|:x: Todos os campos são **obrigatórios**, caso algum esteja faltando será retornado:

`POST /parcels -  FORMATO DA RESPOSTA - STATUS 400`

```json
{
  "statusCode": 400,
  "message": "{{field}} field is Required.",
  "status": "Bad Request"
}
```

<br/>

<h2 align ='center'>Atualizando Parcels</h2>

### **Atualizar Pacote**

<br/>

A rota de atualização dos pacotes segue o padrão de atualizando, requerindo o ID do pacote como parametro e recebendo os valores no corpo da requisição.

<br/>

`PATCH /parcels/5c8686bc-282e-42be-9756-13d4ad3c0826 -  FORMATO DA REQUISIÇÃO`

```json
{
  "name": "branch-1tobranch-3",
  "content": "[{prod_name, prod_weight},{prod_name, prod_weight}, {prod_name, prod_weight}]",
  "volume_weight": 150
}
```

A resposta esperada será:

`PATCH /parcels/5c8686bc-282e-42be-9756-13d4ad3c0826 - FORMATO DA RESPOSTA - STATUS 200`

```json
{
  "message": "Parcel Updated.",
  "results": {
    "id": "5c8686bc-282e-42be-9756-13d4ad3c0826",
    "name": "branch-1tobranch-3",
    "content": "[{prod_name, prod_weight},{prod_name, prod_weight}, {prod_name, prod_weight}]",
    "volume_weight": 150,
    "admission_date": "Sat Dec 10 2022 17:10:38 GMT-0300 (Brasilia Standard Time)",
    "client_id": "821496f1-7d68-4b05-8925-e900991be5e4",
    "shipment_id": "6701f60a-f2e7-4638-9e75-ed89a2829d2e"
  }
}
```

<br/>

<h2 align ='center'> Possíveis erros </h2>

| :x: Caso não seja encontrado o pacote em questão, será retornado:

`PATCH /parcels -  FORMATO DA RESPOSTA - STATUS 404`

```json
{
  "statusCode": 404,
  "message": "Parcel not Found.",
  "status": "Not Found"
}
```

</br>

<h2 align ='center'>Removendo Parcels</h2>

### **Deletar Pacote**

Rota pra remoção do pacote registrada por id:

`DELETE /parcels/5c8686bc-282e-42be-9756-13d4ad3c0826 - FORMATO DA REQUISiÇÃO `

```json
// Não é necessário corpo na requisição
```

`DELETE /parcels/5c8686bc-282e-42be-9756-13d4ad3c0826 - FORMATO DA RESPOSTA - STATUS 200`

```json
{
  "message": "Parcel Deleted.",
  "results": {
    "id": "5c8686bc-282e-42be-9756-13d4ad3c0826",
    "name": "branch-1tobranch-2",
    "content": "[{prod_name, prod_weight},{prod_name, prod_weight}]",
    "volume_weight": 120,
    "admission_date": "Sat Dec 10 2022 17:10:38 GMT-0300 (Brasilia Standard Time)",
    "client_id": "821496f1-7d68-4b05-8925-e900991be5e4",
    "shipment_id": "6701f60a-f2e7-4638-9e75-ed89a2829d2e"
  }
}
```

<h2 align ='center'> Possíveis erros </h2>

| :x: Caso não seja encontrado o pacote em questão, será retornado:

`DELETE /parcels/5c8686bc-282e-42be-9756-13d4ad3c0826 -  FORMATO DA RESPOSTA - STATUS 404`

```json
{
  "statusCode": 404,
  "message": "Parcel not Found.",
  "status": "Not Found"
}
```

</br>
<hr/>
</br>
