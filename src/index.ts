import express, { Request, Response } from 'express';
import createStore from './helper/createStore';

const server_port = process.env.PORT || 3000;

import renderer from './helper/renderer';
let reload: any;
let port: any;

if (process.env.NODE_ENV == 'development') {
  reload = require('reload');
  port = 3000;
} else {
  port = process.env.PORT;
}

const app = express();

app.use(express.static('public'));

app.get('/', (req: Request, res: Response) => {
  const store = createStore(req);
  res.send(renderer(req, store));
});

app.listen(server_port, () => {
  console.log(`server is running on port, ${server_port}`);
});

if (process.env.NODE_ENV == 'development') {
  reload(app);
}
