/* eslint-disable camelcase */
import { Router } from 'express';
import { getRepository } from 'typeorm';
import CreateOrderService from '../services/CreateOrderService';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import Order from '../models/Order';

const ordersRouter = Router();
ordersRouter.use(ensureAuthenticated);
ordersRouter.get('/', async (request, response) => {
  const orderRepository = getRepository(Order);
  const orders = await orderRepository.find();

  return response.json(orders);
});

ordersRouter.post('/', async (request, response) => {
  try {
    const { amount } = request.body;
    const { id } = request.user;
    const createOrderService = new CreateOrderService();
    const order = await createOrderService.execute({
      user_id: id,
      amount,
    });

    return response.json(order);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default ordersRouter;
