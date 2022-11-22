import React, { useState, useEffect } from "react";
import Helmet from "../components/Helmet";
import Grid from "../components/Grid/Grid";
import ProductCard from "../components/ProductCard/ProductCard";
import { useQuery } from "@tanstack/react-query";
import { getproducts } from "../action/getProduct";
import PageError from "../components/PageServerLoading/PageError";
import PageLoading from "../components/PageServerLoading/PageLoading";
import callApi from "../api";
import Filter from "./Filter";
import ReactPaginate from "react-paginate";
import Layout from "../components/Layout/Layout";
const CateLog = () => {
  const [item, setItem] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [posts, setPosts] = useState([]);

  const [pageCount, setpageCount] = useState(0);

  let limit = 4;

  async function fetchALL(current) {
    const response = await callApi(
      `products/getProductByOffsetLimit/${current}/${limit}`,
      "GET",
      null
    );
    const products = response;
    return products.data;
  }
  useEffect(() => {
    getproducts().then((json) => {
      setPosts(json);
      setSearchResults(json);
    });
  }, []);
  useEffect(() => {
    async function getALL() {
      const response = await callApi(
        `products/getProductByOffsetLimit/1/${limit}`,
        "GET",
        null
      );
      const total = response.headers.get("x-total-count");
      console.log(total);
      setpageCount(Math.ceil(total / limit));
      console.log(pageCount);
      setItem(response.data);
    }
    getALL();
  }, [limit]);

  const handleClickPaginate = async (data) => {
    const currentPage = data.selected + 1;
    console.log(currentPage);
    const fetch = await fetchALL(currentPage);
    setItem(fetch);
  };
  return (
    <Layout>
      <Helmet title="Sản phẩm">
        <div className="catelog">
          <Filter />
          <div className="catelog__content">
            <Grid col={4} mdCol={2} smCol={1} gap={20}>
              {item.map((item, index) => (
                <ProductCard
                  key={index}
                  Image={item.Image}
                  Name={item.Name}
                  Price={parseInt(item.Price)}
                  CategoryId={item.CategoryId}
                  _id={item._id}
                  Quantity={item.Quantity}
                />
              ))}
            </Grid>
            {/* <div style={{ width: "500px", margin: "auto" }}>
            <Pagination defaultCurrent={1} total={products.length} />
          </div> */}
          </div>
        </div>
        <ReactPaginate
          previousLabel={"PREV"}
          nextLabel={"NEXT"}
          pageCount={10}
          marginPagesDisplayed={3}
          pageRangeDisplayedge={6}
          onPageChange={handleClickPaginate}
          pageClassName={"page-item"}
          containerClassName={"pagination justify-content-center"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-link"}
          nextClassName={"page-link"}
        />
      </Helmet>
    </Layout>
  );
};
export default CateLog;
