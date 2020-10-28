<img src="https://i.ibb.co/5Gr2mFr/undraw-a-better-world-9xfd.png" alt="mulher em pé em frente a uma janela" border="0" width = "200" />

Após meu primeiro contato com protocolos HTTP, construí uma API para aplicar o método GET seguindo as [instruções](https://github.com/reprograma/on7-porto-s8-projeto-pratico "instruções") da semana 08 do curso de back-end da {reprograma}.

O projeto consiste de uma API simples que utiliza o método HTTP GET para listar e filtrar informações de três arquivos json com temas diferentes.

##### Pacotes utilizados

- Express
- Nodemon

##### Métodos aplicados

- find
- map
- filter
- push
---

A pasta models contém três arquivos JSON, dos quais podemos acessar determinados endpoints.

## Arquivo de jogos

```json
{
  "id": 1,
  "titulo": "Fall Guys",
  "dataLancamento": "2020"
}
```

##### Endpoints disponíveis

| Recurso      | Descrição                         |
| ------------ | --------------------------------- |
| `/jogos`     | Retorna todos os jogos            |
| `/jogos/:id` | Retorna apenas um jogo específico |

## Arquivo de músicas

```json
{
  "id": 1,
  "titulo": "Evidências",
  "duracao": "04:39"
}
```

##### Endpoints disponíveis

| Recurso        | Descrição                            |
| -------------- | ------------------------------------ |
| `/musicas`     | Retorna todas as músicas             |
| `/musicas/:id` | Retorna apenas uma música específica |
| `/artistas`     | Retorna a lista de artistas               |
| `/artistas/:id` | Retorna o artista e lista de músicas dele |
| `/albuns`                 | Retorna o álbum com a lista de músicas daquele album 
| `/albuns/[nome-do-album]` | Retorna um álbum específico filtrado pelo nome       |

## Arquivo de séries

```json
{
  "id": 1,
  "titulo": "Suits",
  "duracao": "9 temporadas"
}
```

##### Endpoints disponíveis

| Recurso       | Descrição                           |
| ------------- | ----------------------------------- |
| `/series`     | Retorna todas as séries             |
| `/series/:id` | Retorna apenas uma série específica |

---

---

---

*This project consists of a simple API that uses the HTTP GET method to list and filter information from three json files with different themes.*

##### Packages

- *Express*
- *Nodemon*

##### Applied methods

- *find*
- *map*
- *filter*
- *push*
---

*The models folder contains three JSON files, from which we can access certain endpoints.*

## Games

```json
{
  "id": 1,
  "titulo": "Fall Guys",
  "dataLancamento": "2020"
}
```

##### Endpoints

| *Endpoint*      | *Description*                         |
| ------------ | --------------------------------- |
| `/jogos`     | *List all games*            |
| `/jogos/:id` | *List a specific game* |

## Musics

```json
{
  "id": 1,
  "titulo": "Evidências",
  "duracao": "04:39"
}
```

##### Endpoints

| *Endpoint*        | *Description*                            |
| -------------- | ------------------------------------ |
| `/musicas`     | *List all musics*             |
| `/musicas/:id` | *List a specific music* |
| `/artistas`     | *List all artists*               |
| `/artistas/:id` | *List a specific artist and its musics* |
| `/albuns`                 | *List all records* | 
| `/albuns/[nome-do-album]` | *List a specific record and its musics*      |

## TV shows

```json
{
  "id": 1,
  "titulo": "Suits",
  "duracao": "9 temporadas"
}
```

##### Endpoints

| *Endpoint*       | *Description*                           |
| ------------- | ----------------------------------- |
| `/series`     | *List all TV shows*             |
| `/series/:id` | *List a specific TV show* |


