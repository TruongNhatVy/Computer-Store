import TableBody from "../../components/Table/TableBody";
import TableCell from "../../components/Table/TableCell";
import TableCol from "../../components/Table/TableCol";
import TableContainer from "../../components/Table/TableContainer";
import TableHeader from "../../components/Table/TableHeader";
import TableRows from "../../components/Table/TableRows";
import TableRow from "../../components/Table/TableRow";
import { useEffect, useState } from "react";
import axios from "axios";
import ContainerMainLayoutAdmin from "../../layoutsAdmin/MainLayoutAdmin/ContainerMainLayoutAdmin";
import AddAccountPopup from "./AddAccountPopup";

const listDataOption = [{ name: "Hieu", value: 1 }];

const ManageAccount = () => {
  const [accounts, setAccount] = useState([]);
  const [page, setOffset] = useState(1);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/accounts/getAccountsFilters?page=${page}`)
      .then((res) => setAccount(res.data));
  }, [page]);

  return (
    <ContainerMainLayoutAdmin>
      <TableContainer
        showPagination={true}
        totalPages={(accounts || []).length}
        activePage={page}
        handleSelect={(e) => {
          setOffset(e);
        }}
      >
        <TableHeader
          showNewButton={true}
          show={false}
          listDataOption={listDataOption}
          handleShowPopup={(e) => setShowPopup(e)}
          // handleSelect={(e) => {
          //   handleSelectRole(e);
          // }}]
        />
        <TableBody>
          <TableCol
            listCol={[
              { title: "Id" },
              { title: "Name" },
              { title: "Email" },
              { title: "Phone" },
              { title: "Address" },
              { title: "Role" },
              { title: "Action" },
            ]}
          />
          <TableRows>
            {(accounts || []).map((item) => {
              return (
                <>
                  <TableRow key={item}>
                    <TableCell>
                      <h6 className="mb-0 text-sm">{item._id}</h6>
                    </TableCell>
                    <TableCell>
                      <h6 className="mb-0 text-sm">{item.name}</h6>
                    </TableCell>
                    <TableCell>
                      <h6 className="mb-0 text-sm">{item.email}</h6>
                    </TableCell>
                    <TableCell>
                      <h6 className="mb-0 text-sm">{item.phone}</h6>
                    </TableCell>
                    <TableCell>
                      <h6 className="mb-0 text-sm">{item.address}</h6>
                    </TableCell>
                    <TableCell>
                      <h6 className="mb-0 text-sm">{item.role}</h6>
                    </TableCell>
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

      <AddAccountPopup
        showPopup={showPopup}
        handleClosePopup={(e) => setShowPopup(e)}
      />
    </ContainerMainLayoutAdmin>
  );
};

export default ManageAccount;
