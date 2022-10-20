import React from "react";

import Helmet from "../components/Helmet";
import Section from "../components/Section/Section";
import SectionTitle from "../components/Section/SectionTitle";
import SectionBody from "../components/Section/SectionBody";
import Grid from "../components/Grid/Grid";
import ProductCard from "../components/ProductCard/ProductCard";
import ProductView from "../components/ProductView/ProductView";
import { useParams } from "react-router-dom";
import productsData from "../assets/data-fake/product-data";

const Product = () => {
  const params = useParams();
  const product = productsData.getProductById(params.id);
  console.log(product);
  const relatedProducts = productsData.getProducts(params.id);
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);
  return (
    <Helmet title={product.title}>
      <Section>
        <SectionBody>
          <ProductView product={product} />
        </SectionBody>
      </Section>
      <Section>
        <SectionTitle>Khám phá thêm</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {relatedProducts.map((item, index) => (
              <ProductCard
                key={index}
                img={item.img}
                title={item.title}
                img2={item.img2}
                price={parseInt(item.price)}
                category={item.category}
                id={item.id}
              />
            ))}
          </Grid>
        </SectionBody>
      </Section>
    </Helmet>
  );
};

export default Product;
