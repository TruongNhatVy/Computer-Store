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

  useEffect(() => {
    axios
      .get(
        `http://localhost:5000/products/getProductsFilters?page=${page}&Status=${filterStatus}`
      )
      .then((res) => setProduct(res.data));
  }, [page, filterStatus]);

  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:5000/brands/getBrandFilters`)
  //     .then((res) => setBrand(res.data));
  // }, [brands]);

  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:5000/categories/getCategoriesFilters`)
  //     .then((res) => setCategory(res.data));
  // }, [categories]);

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
          handleSelect={(e) => {
            setFilterStatus(e);
          }}
        />
        <TableBody>
          <TableCol
            listCol={[
              { title: "Id" },
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
                    <TableCell>
                      <h5 className="mb-0 text-sm">{item._id}</h5>
                    </TableCell>
                    <TableCell>
                      <h5 className="mb-0 text-sm">{item.Name}</h5>
                    </TableCell>
                    <TableCell>
                      <h5 className="mb-0 text-sm">
                        {numberWithCommas(item.Quantity)}
                      </h5>
                    </TableCell>
                    <TableCell>
                      <h6 className="mb-0 text-sm">{item.BrandId}</h6>
                    </TableCell>
                    <TableCell>
                      <h6 className="mb-0 text-sm">{item.CategoryId}</h6>
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
                      <button type="type" className="btn btn-sm btn-info">
                        <i className="fa-solid fa-pencil"></i>
                      </button>
                      <button type="type" className="btn btn-sm btn-danger">
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
    </ContainerMainLayoutAdmin>
  );
};

export default ManageProduct;
