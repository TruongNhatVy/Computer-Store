import axios from "axios";
import { useState } from "react";
import { useCallback } from "react";
import Popup from "../../components/Popup/Popup";

const AddAccountPopup = ({ showPopup, handleClosePopup }) => {
  const [email, setEmail] = useState("");

  const handleClose = useCallback(
    (value) => {
      handleClosePopup(value);
    },
    [handleClosePopup]
  );

  const handleCreateStaff = useCallback(() => {
    const params = {
      name: email,
    };
    axios
      .post(`http://localhost:5000/accounts/getAccountsFilters?page=1}`, params)
      .then((res) => res);
  }, [email]);

  return (
    <>
      <Popup
        showPopup={showPopup}
        name="Add Account"
        handleClosePopup={(e) => handleClose(e)}
        minWidth="800px"
        modelBody={
          <form>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
                onChange={(e) => setEmail(e.target.value)}
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
              onClick={handleCreateStaff}
            >
              Create
            </button>
          </>
        }
      />
    </>
  );
};

export default AddAccountPopup;
