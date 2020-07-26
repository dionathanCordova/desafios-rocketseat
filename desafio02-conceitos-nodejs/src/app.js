const express = require("express");
const cors = require("cors");

const { uuid } = require("uuidv4");

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

app.get("/repositories", (request, response) => {
  return response.json(repositories);
});

app.post("/repositories", (request, response) => {
  const { title, url, techs } = request.body;

  const repository = { id: uuid(), title, url, techs, likes: 0};
  repositories.push(repository);

  return response.json(repository);
});

app.put("/repositories/:id", (request, response) => {
  const { id } = request.params;
  const { title, url, techs } = request.body;

  const repoIndex = repositories.findIndex(repository => repository.id === id);

  if( repoIndex < 0 ) {
    return response.status(400).json({'error':'Error on catch the repository'});
  }

  const updateRepository = {
    id,
    title,
    url,
    techs,
    likes: repositories[repoIndex].likes
  }

  repositories[repoIndex] = updateRepository;

  return response.json(updateRepository);
});

app.delete("/repositories/:id", (request, response) => {
  const { id } = request.params;

  const findIndex = repositories.findIndex(repo => repo.id === id);

  if( findIndex < 0 ) {
    return response.status(400).json({'error':'Error on catch the repository'});
  }

  repositories.splice(findIndex, 1);

  return response.status(204).json({'OK': 'Repository removed'})
});

app.post("/repositories/:id/like", (request, response) => {
  const { id } = request.params;

  const findIndex = repositories.findIndex(repo => repo.id === id);

  if( findIndex < 0 ) {
    return response.status(400).json({'error':'Error on catch the repository'});
  }

  repositories[findIndex].likes++;

  return response.status(200).json(repositories[findIndex]);
});

module.exports = app;
