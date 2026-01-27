
export class CartsService {
  async purchaseCart(cartId, user) {

    const result = {
      purchased: [],
      notPurchased: []
    };

    const cart = await this.cartsRepository.getById(cartId);

    for (const item of cart.products) {
      const product = await this.productsRepository.getById(item.product._id);

      if (product.stock >= item.quantity) {
        product.stock -= item.quantity;
        await this.productsRepository.update(product._id, product);

        result.purchased.push({
          product: product._id,
          quantity: item.quantity
        });
      } else {
        result.notPurchased.push({
          product: product._id,
          quantity: item.quantity
        });
      }
    }

    return result;
  }
}