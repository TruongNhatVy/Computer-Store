import { useCallback, useState } from "react";
import Popup from "../../components/Popup/Popup";

const ConfirmRemove = ({ showPopup, handleClosePopup, idItem }) => {
  const handleClose = useCallback(
    (value) => {
      handleClosePopup(value);
    },
    [handleClosePopup]
  );

  const handleRemove = useCallback(() => {
    // idItem: follow to call api this here
  }, []);

  return (
    <>
      <Popup
        showPopup={showPopup}
        name="Remove Account"
        nameButton="Create"
        handleClosePopup={(e) => handleClose(e)}
        minWidth="500px"
        modelBody={`Are you sure remove this trademark ?`}
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
