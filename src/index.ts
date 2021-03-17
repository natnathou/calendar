import express, { Request, Response } from 'express';
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes';
import createStore from './helper/createStore';
import renderer from './helper/renderer';

const SERVER_PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static('public'));
app.get('*', (req: Request, res: Response) => {
  const store = createStore(req);
  const promises = matchRoutes(Routes, req.path)
    .map(({ route }) => {
      return route.loadData ? route.loadData(store.dispatch) : null;
    })
    .map((promise) => {
      if (promise) {
        return new Promise((resolve, reject) => {
          promise.then(resolve).catch(resolve);
          console.log(store.getState());
        });
      }
    });

  Promise.all(promises).then(() => {
    res.send(renderer(req, store));
  });
});

app.listen(SERVER_PORT, () => {
  console.log(`server is running on port, ${SERVER_PORT}`);
});
