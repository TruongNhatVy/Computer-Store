import TableBody from "../../components/Table/TableBody";
import TableCell from "../../components/Table/TableCell";
import TableCol from "../../components/Table/TableCol";
import TableContainer from "../../components/Table/TableContainer";
import TableHeader from "../../components/Table/TableHeader";
import TableRows from "../../components/Table/TableRows";
import TableRow from "../../components/Table/TableRow";
import { useEffect, useState } from "react";

import axios from "axios";
import numberWithCommas from "../../../utils/ConvertNumber";
import { useCallback } from "react";
import ContainerMainLayoutAdmin from "../../layoutsAdmin/MainLayoutAdmin/ContainerMainLayoutAdmin";
import AddProductPopup from "./AddProductPopup";
import ConfirmRemove from "../ManageAccount/ConfirmRemoveAccount";
import UpdateProductPopup from "./UpdateProductPopup";

const listDataOption = [
  { name: "Trading", value: "Trading" },
  { name: "Stop trading", value: "Stop trading" },
  { name: "Sold out", value: "Sold out" },
];

const ManageProduct = () => {
  const [products, setProduct] = useState([]);
  const [filterStatus, setFilterStatus] = useState("");
  const [page, setOffset] = useState(1);
  const [brands, setBrand] = useState([]);
  const [categories, setCategory] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [showPopupConfirm, setShowPopupConfirm] = useState(false);
  const [showPopupUpdate, setShowPopupUpdate] = useState(false);
  const [idProduct, setIdProduct] = useState("");
  const [itemProduct, setItemProduct] = useState({});

  useEffect(() => {
    const fetchProducts = async () => {
      await axios
        .get(
          `http://localhost:5000/products/getProductsFilters?page=${page}&Status=${filterStatus}`
        )
        .then((res) => setProduct(res.data));
    };

    const fetchBrands = async () => {
      await axios
        .get(`http://localhost:5000/brands/getBrandFilters`)
        .then((res) => setBrand(res.data));
    };

    const fetchCategories = async () => {
      await axios
        .get(`http://localhost:5000/categories/getCategoriesFilters`)
        .then((res) => setCategory(res.data));
    };

    fetchProducts();
    fetchBrands();
    fetchCategories();
  }, [page, filterStatus]);

  const handleRemovePopup = useCallback((value) => {
    setShowPopupConfirm(true);
    setIdProduct(value);
  }, []);

  const handleShowPopupUpdate = useCallback((value) => {
    setShowPopupUpdate(true);
    setItemProduct(value);
  }, []);

  return (
    <ContainerMainLayoutAdmin>
      <TableContainer
        showPagination={true}
        totalPages={(products || []).length}
        activePage={page}
        handleSelect={(e) => {
          setOffset(e);
        }}
      >
        <TableHeader
          showNewButton={true}
          show={true}
          listDataOption={listDataOption}
          handleShowPopup={(e) => setShowPopup(e)}
          handleSelect={(e) => {
            setFilterStatus(e);
          }}
        />
        <TableBody>
          <TableCol
            listCol={[
              // { title: "Id" },
              { title: "Name" },
              { title: "Quantity" },
              { title: "BrandId" },
              { title: "CategoryId" },
              // { title: "Description" },
              { title: "Price" },
              { title: "Status" },
              { title: "Action" },
            ]}
          />
          <TableRows>
            {(products || []).map((item) => {
              return (
                <>
                  <TableRow key={item}>
                    {/* <TableCell>
                      <h5 className="mb-0 text-sm">{item._id}</h5>
                    </TableCell> */}
                    <TableCell>
                      <h5 className="mb-0 text-sm">{item.Name}</h5>
                    </TableCell>
                    <TableCell>
                      <h5 className="mb-0 text-sm">
                        {numberWithCommas(item.Quantity)}
                      </h5>
                    </TableCell>
                    <TableCell>
                      <h6 className="mb-0 text-sm">
                        {
                          (brands || []).find(
                            (element) => element._id === item.BrandId
                          )?.Name
                        }
                      </h6>
                    </TableCell>
                    <TableCell>
                      <h6 className="mb-0 text-sm">
                        {
                          (categories || []).find(
                            (element) => element._id === item.CategoryId
                          )?.Name
                        }
                      </h6>
                    </TableCell>
                    {/* <TableCell>
                    <h6 className="mb-0 text-sm">{item.Description}</h6>
                  </TableCell> */}
                    <TableCell>
                      <h5 className="mb-0 text-sm">
                        {numberWithCommas(item.Price)}
                      </h5>
                    </TableCell>
                    <TableCell>
                      <h5 className="mb-0 text-sm">{item.Status}</h5>
                    </TableCell>
                    <TableCell>
                      <button
                        type="type"
                        className="btn btn-sm btn-info"
                        onClick={() => handleShowPopupUpdate(item)}
                      >
                        <i className="fa-solid fa-pencil"></i>
                      </button>
                      <button
                        type="type"
                        className="btn btn-sm btn-danger"
                        onClick={() => handleRemovePopup(item._id)}
                      >
                        <i className="fas fa-trash-alt"></i>
                      </button>
                    </TableCell>
                  </TableRow>
                </>
              );
            })}
          </TableRows>
        </TableBody>
      </TableContainer>

      <AddProductPopup
        showPopup={showPopup}
        brands={brands}
        categories={categories}
        handleClosePopup={(e) => setShowPopup(e)}
      />
      <ConfirmRemove
        showPopup={showPopupConfirm}
        handleClosePopup={(e) => setShowPopupConfirm(e)}
        idItem={idProduct}
        // getListProduct={(e) => setProduct(e)}
      />
      <UpdateProductPopup
        showPopup={showPopupUpdate}
        handleClosePopup={(e) => setShowPopupUpdate(e)}
        itemProduct={itemProduct}
        getData={(e) => setProduct(e)}
      />
    </ContainerMainLayoutAdmin>
  );
};

export default ManageProduct;
