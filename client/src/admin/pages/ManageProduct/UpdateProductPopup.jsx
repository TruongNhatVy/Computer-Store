import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useCallback } from "react";
import Popup from "../../components/Popup/Popup";

const UpdateProductPopup = ({
  showPopup,
  handleClosePopup,
  itemProduct,
  getData,
}) => {
  console.log(itemProduct);
  const [name, setName] = useState(itemProduct.name);
  const [email, setEmail] = useState(itemProduct.email);
  const [password, setPassword] = useState(itemProduct.password);
  const [phone, setPhone] = useState(itemProduct.phone);
  const [address, setAddress] = useState(itemProduct.address);
  const [role, setRole] = useState();
  const [a, setA] = useState("chao a");

  const handleClose = useCallback(
    (value) => {
      handleClosePopup(value);
    },
    [handleClosePopup]
  );

  useEffect(() => {
    setName(itemProduct.name);
    setEmail(itemProduct.email);
    setPassword(itemProduct.password);
    setPhone(itemProduct.phone);
    setAddress(itemProduct.address);
    setRole(itemProduct.role);
  }, [itemProduct]);

  const handleUpdateStaff = useCallback(async () => {
    const Product = {
      name: name,
      email: email,
      password: password,
      phone: phone,
      address: address,
      role: role,
    };

    await axios
      .put(
        `http://localhost:5000/Products/updateProduct/${itemProduct._id}`,
        Product
      )
      .then((res) => res.json())
      .catch((error) => error);

    handleClosePopup(false);

    axios
      .get(`http://localhost:5000/Products/getProductsFilters?page=1`)
      .then((res) => getData(res.data));
  }, [
    name,
    email,
    password,
    phone,
    address,
    role,
    handleClosePopup,
    itemProduct._id,
    getData,
  ]);

  return (
    <>
      <Popup
        showPopup={showPopup}
        name="Update Product"
        handleClosePopup={(e) => handleClose(e)}
        minWidth="800px"
        modelBody={
          <form>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Name</label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Email</label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Password</label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Phone</label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Address</label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Role</label>
              <input
                type="number"
                min="0"
                max="1"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Ex: 0 - 1"
                value={role}
                onChange={(e) => setRole(e.target.value)}
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

export default UpdateProductPopup;
