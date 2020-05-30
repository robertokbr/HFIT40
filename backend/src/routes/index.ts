import express from 'express';
import usersRouter from './users.routes';
import sessionsRouter from './sessions.routes';
import ordersRouter from './orders.routes';

const routes = express();
routes.use(express.json());

routes.use('/orders', ordersRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);

export default routes;
