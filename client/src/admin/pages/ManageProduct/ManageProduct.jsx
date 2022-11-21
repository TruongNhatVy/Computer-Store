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

const listDataOption = [{ name: "Hieu", value: 1 }];

const ManageProduct = () => {
  const [products, setProduct] = useState([]);
  const [page, setOffset] = useState(1);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/products/getProductsFilters?page=${page}`)
      .then((res) => setProduct(res.data));
  }, [page]);

  return (
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
        show={false}
        listDataOption={listDataOption}
        // handleSelect={(e) => {
        //   handleSelectRole(e);
        // }}
      />
      <TableBody>
        <TableCol
          listCol={[
            { title: "Id" },
            { title: "Name" },
            { title: "Quantity" },
            { title: "BrandId" },
            { title: "CategoryId" },
            { title: "Description" },
            { title: "Price" },
            { title: "Status" },
          ]}
        />
        <TableRows>
          {(products || []).map((item) => {
            return (
              <>
                <TableRow key={item}>
                  <TableCell>
                    <h6 className="mb-0 text-sm">{item._id}</h6>
                  </TableCell>
                  <TableCell>
                    <h6 className="mb-0 text-sm">{item.Name}</h6>
                  </TableCell>
                  <TableCell>
                    <h6 className="mb-0 text-sm">
                      {numberWithCommas(item.Quantity)}
                    </h6>
                  </TableCell>
                  <TableCell>
                    <h6 className="mb-0 text-sm">{item.BrandId}</h6>
                  </TableCell>
                  <TableCell>
                    <h6 className="mb-0 text-sm">{item.CategoryId}</h6>
                  </TableCell>
                  <TableCell>
                    <h6 className="mb-0 text-sm">{item.Description}</h6>
                  </TableCell>
                  <TableCell>
                    <h6 className="mb-0 text-sm">
                      {numberWithCommas(item.Price)}
                    </h6>
                  </TableCell>
                  <TableCell>
                    <h6 className="mb-0 text-sm">{item.Status}</h6>
                  </TableCell>
                  {/* <TableCell>
                    <button type="type" className="btn btn-sm btn-danger">
                      Remove
                    </button>
                  </TableCell> */}
                </TableRow>
              </>
            );
          })}
        </TableRows>
      </TableBody>
    </TableContainer>
  );
};

export default ManageProduct;
