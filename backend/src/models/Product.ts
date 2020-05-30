/* eslint-disable camelcase */
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
class Product {
  id: string;

  img: string;

  name: string;

  price: number;

  desc: string;
}

export default Product;
