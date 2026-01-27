
import CartRepository from "../repositories/cart.repository.js";
import ProductRepository from "../repositories/product.repository.js";
import TicketRepository from "../repositories/ticket.repository.js";
import { v4 as uuidv4 } from "uuid";

export class CartsService {
  constructor() {
    this.cartsRepository = new CartRepository();
    this.productsRepository = new ProductRepository();
    this.ticketRepository = new TicketRepository();
  }

  async purchaseCart(cartId, user) {
    const cart = await this.cartsRepository.getById(cartId);

    let total = 0;
    const notPurchased = [];

    for (const item of cart.products) {
      const product = await this.productsRepository.getById(item.product._id);

      if (product.stock >= item.quantity) {
        product.stock -= item.quantity;
        total += product.price * item.quantity;
        await this.productsRepository.update(product._id, product);
      } else {
        notPurchased.push(item);
      }
    }

    const ticket = await this.ticketRepository.create({
      code: uuidv4(),
      amount: total,
      purchaser: user.email
    });

    cart.products = notPurchased;
    await this.cartsRepository.update(cart._id, cart);

    return ticket;
  }
}