import { useState } from 'react';
import {  Divider, Radio, Table  } from 'antd';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotals,
  removeFromCart,
} from "../redux/reducer/cartslice";


const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
  {
    title: 'NameProduct',
    dataIndex: 'NameProduct',
  },
  {
    title: 'DateTime',
    dataIndex: 'DateTime',
  },
  {
    title: 'Process',
    dataIndex: 'Process',
    render:(text) => <a style={{color:'red'}}>{text} Detail</a>
  },
  
];

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: (record) => ({
    disabled: record.name === 'Disabled User',
    // Column configuration not to be checked
    name: record.name,
  }),
};
const History = () => {
  const cart = useSelector((state) => state.cart);
  console.log(cart.cartItems)
  return (

    <div class="table-container">
    <table>
      <caption>Our Client Data</caption>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>AccountId</th>
        <th>Date</th>
        <th>Quantity</th>
        <th>Process</th>
      </tr>
      {cart.cartItems && cart.cartItems.map(cart => (
        <tr>
          <td>{cart._id}</td>
          <td>mukit</td>
          <td></td>
          <td>Bangladesh</td>
        </tr>
      ))}
      
      </table>
  </div>
  );
};
export default History