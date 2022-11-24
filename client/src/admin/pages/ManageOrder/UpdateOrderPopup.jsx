import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useCallback } from "react";
import numberWithCommas from "../../../utils/ConvertNumber";
import Popup from "../../components/Popup/Popup";

const UpdateOrderPopup = ({
  showPopup,
  handleClosePopup,
  itemOrder,
  // getData,
}) => {
  const [accountId, setAccountId] = useState(itemOrder.AccountId);
  const [date, setDate] = useState(itemOrder.Date);
  const [status, setStatus] = useState(itemOrder.Status);
  const [total, setTotal] = useState(itemOrder.Total);
  const [email, setEmail] = useState(itemOrder.Email);
  const [phone, setPhone] = useState(itemOrder.Phone);
  const [address, setAddress] = useState(itemOrder.Address);

  const handleClose = useCallback(
    (value) => {
      handleClosePopup(value);
    },
    [handleClosePopup]
  );

  useEffect(() => {
    setAccountId(itemOrder.AccountId);
    setDate(itemOrder.Date);
    setStatus(itemOrder.Status);
    setTotal(itemOrder.Total);
    setEmail(itemOrder.Email);
    setPhone(itemOrder.Phone);
    setAddress(itemOrder.Address);
  }, [itemOrder]);

  const handleUpdateStaff = useCallback(() => {
    const Order = {
      AccountId: accountId,
      Date: date,
      Total: total,
      Status: status,
      Email: email,
      Phone: phone,
      Address: address,
    };

    axios
      .put(`http://localhost:5000/orders/updateOrder/${itemOrder._id}`, Order)
      .then((res) => res.json())
      .catch((error) => error);

    handleClosePopup(false);

    // await axios
    //   .get(`http://localhost:5000/orders/getOrderFilters?page=1`)
    //   .then((res) => getData(res.data));
  }, [
    accountId,
    date,
    total,
    status,
    email,
    phone,
    address,
    handleClosePopup,
    itemOrder._id,
    // getData,
  ]);

  return (
    <>
      <Popup
        showPopup={showPopup}
        name="Update Order"
        handleClosePopup={(e) => handleClose(e)}
        minWidth="800px"
        modelBody={
          <form>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">AccountId</label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Name"
                value={accountId}
                disabled
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Date</label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Name"
                value={date}
                disabled
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Total</label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Name"
                value={numberWithCommas(total)}
                disabled
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlSelect1">Status</label>
              <select
                className="form-control"
                id="exampleFormControlSelect1"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="Processing">Processing</option>
                <option value="Unprocessed">Unprocessed</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Email</label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Name"
                value={email}
                disabled
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Phone</label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Name"
                value={phone}
                disabled
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Addres</label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Name"
                value={address}
                disabled
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            {/* <div className="form-group">
              <label htmlFor="exampleFormControlSelect1">Example select</label>
              <select className="form-control" id="exampleFormControlSelect1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div> */}
            {/* <div className="form-group">
              <label htmlFor="exampleFormControlSelect2">
                Example multiple select
              </label>
              <select
                multiple
                className="form-control"
                id="exampleFormControlSelect2"
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div> */}
            {/* <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">
                Example textarea
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows={3}
                defaultValue={""}
              />
            </div> */}
          </form>
        }
        modelFooter={
          <>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleUpdateStaff}
            >
              Update
            </button>
          </>
        }
      />
    </>
  );
};

export default UpdateOrderPopup;
