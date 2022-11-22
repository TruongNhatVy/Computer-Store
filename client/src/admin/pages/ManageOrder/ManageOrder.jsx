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

const ManageOrder = () => {
  const [orders, setOrder] = useState([]);
  const [page, setOffset] = useState(1);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/orders/getOrderFilters?page=${page}`)
      .then((res) => setOrder(res.data));
  }, [page]);

  return (
    <TableContainer
      showPagination={true}
      totalPages={(orders || []).length}
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
            { title: "AccountId" },
            { title: "Date" },
            { title: "Total" },
            { title: "Status" },
            // { title: "Email" },
            // { title: "Phone" },
            // { title: "Address" },
            { title: "Action" },
          ]}
        />
        <TableRows>
          {(orders || []).map((item) => {
            return (
              <>
                <TableRow key={item}>
                  <TableCell>
                    <h6 className="mb-0 text-sm">{item._id}</h6>
                  </TableCell>
                  <TableCell>
                    <h6 className="mb-0 text-sm">{item.AccountId}</h6>
                  </TableCell>
                  <TableCell>
                    <h6 className="mb-0 text-sm">{item.Date}</h6>
                  </TableCell>
                  <TableCell>
                    <h6 className="mb-0 text-sm">
                      {numberWithCommas(item.Total)}
                    </h6>
                  </TableCell>
                  <TableCell>
                    <h6 className="mb-0 text-sm">{item.Status}</h6>
                  </TableCell>
                  {/* <TableCell>
                    <h6 className="mb-0 text-sm">{item.Email}</h6>
                  </TableCell>
                  <TableCell>
                    <h6 className="mb-0 text-sm">{item.Phone}</h6>
                  </TableCell>
                  <TableCell>
                    <h6 className="mb-0 text-sm">{item.Address}</h6>
                  </TableCell> */}
                  <TableCell>
                    <button type="type" className="btn btn-sm btn-info">
                      <i class="fa-solid fa-pencil"></i>
                    </button>
                    <button type="type" className="btn btn-sm btn-danger">
                      <i class="fas fa-trash-alt"></i>
                    </button>
                  </TableCell>
                </TableRow>
              </>
            );
          })}
        </TableRows>
      </TableBody>
    </TableContainer>
  );
};

export default ManageOrder;
