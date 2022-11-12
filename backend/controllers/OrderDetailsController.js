import * as OrderDetailsSvc from "../services/OrderDetailsSvc.js";

export const getOrderDetailsByOrderId = async (req, res) => {
  try {
    const orderDetails = await OrderDetailsSvc.getOrderDetailsByOrderId(req.params);
    return res.status(200).json(orderDetails);
  } catch (error) {
    res.status(500).json({
      Message: "Fail",
      Error: error,
    });
  }
};
