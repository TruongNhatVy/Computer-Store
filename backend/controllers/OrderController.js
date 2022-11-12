import * as OrderSvc from "../services/OrderSvc.js";

export const getOrderByAccountId = async (req, res) => {
  try {
    const order = await OrderSvc.getOrderByAccountId(req.params);
    return res.status(200).json(order);
  } catch (error) {
    res.status(500).json({
      Message: "Fail",
      Error: error,
    });
  }
};
