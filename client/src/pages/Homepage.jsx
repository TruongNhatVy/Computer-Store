import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import Sliders from "../components/Slider/Slider";
import Helmet from "../components/Helmet";
import sliderImage from "../assets/data-fake/data-img";
import Section from "../components/Section/Section";
import SectionBody from "../components/Section/SectionBody";
import SectionTitle from "../components/Section/SectionTitle";
import PolicyCard from "../components/Policy/PolicyCard";
import policy from "../assets/data-fake/policy-data";
import Grid from "../components/Grid/Grid";
// import productData from "../assets/data-fake/product-data";
import ProductCard from "../components/ProductCard/ProductCard";
import { productData, getProducts, getALLproducts } from "../api/getProduct";
import PageError from "../components/PageServerLoading/PageError";
import PageLoading from "../components/PageServerLoading/PageLoading";

const Homepage = () => {
  const [product, setProduct] = useState([]);
  const { isError, data, isLoading } = useQuery(
    ["products"],
    getALLproducts,
    {
      staleTime: 1000,
    }
  );
  console.log(data);

  useEffect(() => {
    console.log("components mounted");
  }, []);
  if (isError) {
    return (
      <div>
        <PageError />
      </div>
    );
  }
  if (isLoading) {
    return (
      <div>
        <PageLoading />
      </div>
    );
  }
  return (
    <div>
      {/* this is slider-content */}
      <Helmet title="Trang chủ">
        <Sliders data={sliderImage} />

        {/* this is policy section  */}
        <Section>
          <SectionBody>
            <Grid col={4} mdCol={2} smCol={1} gap={20}>
              {policy.map((item, index) => {
                return (
                  <PolicyCard
                    key={index}
                    name={item.name}
                    description={item.description}
                    icon={item.icon}
                    color={item.color}
                    size={item.size}
                  />
                );
              })}
            </Grid>
          </SectionBody>
        </Section>
        {/* end policy section */}
        {/* best policy section  */}
        <Section>
          <SectionTitle>Top sản phẩm bán nhiều nhất</SectionTitle>
          <SectionBody>
            <Grid col={4} mdCol={2} smCol={1} gap={20}>
              {data?.map((item, index) => {
                return (
                  <ProductCard
                    key={index}
                    img={item.Anh}
                    title={item.TenSanPham}
                    img2={item.Anh}
                    price={parseInt(item.Gia)}
                    category={item.MaDanhMuc}
                    id={item._id}
                  />
                );
              })}
            </Grid>
          </SectionBody>
        </Section>
      </Helmet>
    </div>
  );
};
export default Homepage;
