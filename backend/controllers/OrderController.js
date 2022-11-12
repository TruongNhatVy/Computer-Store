import * as OrderSvc from "../services/OrderSvc.js";

export const getFiltersOrder = async (req, res) => {
  try {
    const order = await OrderSvc.getFiltersOrder(req.query);

    return res.status(200).json(order);
  } catch (error) {
    res.status(500).json({
      Message: "Fail",
      Error: error,
    });
  }
};

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

export const getOrderById = async (req, res) => {
  try {
    const order = await OrderSvc.getOrderById(req.params);

    return res.status(200).json(order);
  } catch (error) {
    res.status(500).json({
      Message: "Fail",
      Error: error,
    });
  }
};

export const updateOrder = async (req, res) => {
  try {
    const { _id } = req.params;
    const order = req.body;

    await OrderSvc.updateOrder(_id, order);

    const orderUpdate = await OrderSvc.getOrderById(_id);

    return res.status(200).json(orderUpdate);
  } catch (error) {
    res.status(500).json({
      Message: "Fail",
      Error: error,
    });
  }
};
