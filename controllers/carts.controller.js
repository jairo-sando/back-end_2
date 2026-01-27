import CartRepository from "../repositories/cart.repository.js";
import ProductRepository from "../repositories/product.repository.js";
import TicketRepository from "../repositories/ticket.repository.js";
import { v4 as uuidv4 } from "uuid";

const cartRepository = new CartRepository();
const productRepository = new ProductRepository();
const ticketRepository = new TicketRepository();

/* CREAR CARRITO */
export const createCart = async (req, res) => {
  try {
    const cart = await cartRepository.create({
      products: []
    });

    res.status(201).json({
      message: "Carrito creado",
      cart
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/* AGREGAR PRODUCTO AL CARRITO */
export const addProductToCart = async (req, res) => {
  try {
    const { cid, pid } = req.params;

    const cart = await cartRepository.getById(cid);
    if (!cart) {
      return res.status(404).json({ error: "Carrito no encontrado" });
    }

    const product = await productRepository.getById(pid);
    if (!product) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }

    const productIndex = cart.products.findIndex(
      item => item.product._id.toString() === pid
    );

    if (productIndex !== -1) {
      cart.products[productIndex].quantity += 1;
    } else {
      cart.products.push({
        product: pid,
        quantity: 1
      });
    }

    await cart.save();

    res.json({
      message: "Producto agregado al carrito",
      cart
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};




/* COMPRAR CARRITO */
export const purchaseCart = async (req, res) => {
  try {
    const { cid } = req.params;

    const cart = await cartRepository.getById(cid);
    if (!cart) {
      return res.status(404).json({ error: "Carrito no encontrado" });
    }

    let totalAmount = 0;
    const productsNotPurchased = [];

    for (const item of cart.products) {
      const product = await productRepository.getById(item.product._id);

      if (product.stock >= item.quantity) {
        product.stock -= item.quantity;
        totalAmount += product.price * item.quantity;
        await product.save();
      } else {
        productsNotPurchased.push(item);
      }
    }

    if (totalAmount > 0) {
      await ticketRepository.create({
        code: uuidv4(),
        amount: totalAmount,
        purchaser: req.user.email
      });
    }

    cart.products = productsNotPurchased;
    await cart.save();

    res.json({
      status: productsNotPurchased.length ? "partial" : "success",
      productsNotPurchased
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};