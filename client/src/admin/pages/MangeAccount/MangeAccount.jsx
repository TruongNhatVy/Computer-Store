import TableBody from "../../components/Table/TableBody";
import TableCell from "../../components/Table/TableCell";
import TableCol from "../../components/Table/TableCol";
import TableContainer from "../../components/Table/TableContainer";
import TableHeader from "../../components/Table/TableHeader";
import TableRows from "../../components/Table/TableRows";
import TableRow from "../../components/Table/TableRow";
import { useEffect, useState } from "react";

import axios from "axios";

const data_dummy = [
  {
    id: 1,
    name: "Khuong Huy Hieu",
    phone: "0764509124",
    email: "abc@gmail.com",
  },
  {
    id: 2,
    name: "Truong Nhat Vy",
    phone: "0764509124",
    email: "abc@gmail.com",
  },
  {
    id: 3,
    name: "Phan The Hieu",
    phone: "0764509124",
    email: "abc@gmail.com",
  },
  {
    id: 4,
    name: "Thai Kim Luong",
    phone: "0764509124",
    email: "abc@gmail.com",
  },
  {
    id: 5,
    name: "Lam Chi Hien",
    phone: "0764509124",
    email: "abc@gmail.com",
  },
];

const listDataOption = [{ name: "Hieu", value: 1 }];

const ManaAccount = () => {
  const [listPokemon, setListPokemon] = useState([]);
  const [offset, setOffset] = useState(1);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`)
      .then((res) => setListPokemon(res.data));
  }, [offset]);

  return (
    <TableContainer
      showPagination={true}
      totalPages={(listPokemon?.results || []).length}
      activePage={offset}
      handleSelect={(e) => {
        setOffset(e);
      }}
    >
      <TableHeader
        showNewButton={true}
        show={true}
        listDataOption={listDataOption}
        // handleSelect={(e) => {
        //   handleSelectRole(e);
        // }}
      />
      <TableBody>
        <TableCol
          listCol={[{ title: "Hieu" }, { title: "Hien" }, { title: "Edit" }]}
        />
        <TableRows>
          {(listPokemon?.results || []).map((item) => {
            return (
              <>
                <TableRow key={item}>
                  <TableCell>
                    <h6 className="mb-0 text-sm">{item.name}</h6>
                  </TableCell>
                  <TableCell>
                    <h6 className="mb-0 text-sm">{item.name}</h6>
                  </TableCell>
                  <TableCell>
                    <button type="type" className="btn btn-sm btn-danger">
                      Remove
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

export default ManaAccount;
