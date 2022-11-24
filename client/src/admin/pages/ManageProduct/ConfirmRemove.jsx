import axios from "axios";
import { useEffect } from "react";
import { useCallback, useState } from "react";
import Popup from "../../components/Popup/Popup";

const ConfirmRemove = ({
  showPopup,
  handleClosePopup,
  idItem,
  // getListProduct,
}) => {
  const [listProduct, setListProduct] = useState([]);

  // useEffect(() => {
  //   getListProduct(listProduct);
  // }, [getListProduct, listProduct]);

  const handleClose = useCallback(
    (value) => {
      handleClosePopup(value);
    },
    [handleClosePopup]
  );

  const handleRemove = useCallback(async () => {
    await axios
      .delete(`/Products/deleteProduct/${idItem}`)
      .then((res) => res)
      .catch((error) => error);

    handleClosePopup(false);

    // await axios
    //   .get(`http://localhost:5000/Products/getProductsFilters?page=1`)
    //   .then((res) => setListProduct(res.data));
  }, [idItem, handleClosePopup]);

  return (
    <>
      <Popup
        showPopup={showPopup}
        name="Remove Product"
        nameButton="RemoveProduct"
        handleClosePopup={(e) => handleClose(e)}
        minWidth="500px"
        modelBody={`Are you sure remove this Product ?`}
        modelFooter={
          <button
            type="button"
            className="btn btn-danger"
            onClick={handleRemove}
          >
            Remove
          </button>
        }
      />
    </>
  );
};

export default ConfirmRemove;
