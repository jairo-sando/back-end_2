
import { CartsService } from "../services/cart.service.js";
const cartsService = new CartsService();

export const purchaseCart = async (req, res) => {
  try {
    const ticket = await cartsService.purchaseCart(
      req.params.cid,
      req.user
    );
    res.json({ status: "success", ticket });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
