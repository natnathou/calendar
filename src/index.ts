import express, { Request, Response } from 'express';
import createStore from './helper/createStore';
import renderer from './helper/renderer';

const SERVER_PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static('public'));

app.get('*', (req: Request, res: Response) => {
  const store = createStore(req);
  res.send(renderer(req, store));
});

app.listen(SERVER_PORT, () => {
  console.log(`server is running on port, ${SERVER_PORT}`);
});
