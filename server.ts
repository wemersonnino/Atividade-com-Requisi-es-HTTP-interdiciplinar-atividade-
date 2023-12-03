import jsonServer from 'json-server';
import cors from 'cors';

const server = jsonServer.create();
const router = jsonServer.router('src/mock/data.json');
const middlewares = jsonServer.defaults();

server.use(cors());
server.use(middlewares);
server.use(router);

const PORT = 3001;

server.listen(PORT, () => {
    console.log(`JSON Server is running on port ${PORT}`);
});
