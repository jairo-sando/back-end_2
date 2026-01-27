
export const purchaseCart = async (req, res) => {
  try {
    const result = await cartsService.purchaseCart(
      req.params.cid,
      req.user
    );

    res.json({
      status: "success",
      result
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};