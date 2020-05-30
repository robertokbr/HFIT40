/* eslint-disable camelcase */
import { getRepository } from 'typeorm';

import Order from '../models/Order';

interface Request {
  user_id: string;
  amount: number;
}

class CreateOrderService {
  public async execute({ user_id, amount }: Request): Promise<Order> {
    const orderRepository = getRepository(Order);

    const order = orderRepository.create({
      user_id,
      amount,
    });
    await orderRepository.save(order);
    return order;
  }
}

export default CreateOrderService;
