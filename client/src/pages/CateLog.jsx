import React, { useState, useEffect } from "react";
import Helmet from "../components/Helmet";
import Grid from "../components/Grid/Grid";
import ProductCard from "../components/ProductCard/ProductCard";
import productsData from "../assets/data-fake/product-data";
import items from "../assets/data-fake/category";
import { Pagination } from "antd";

import { Menu } from "antd";
const pageSize = 6;

const CateLog = () => {
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const productList = await productsData?.getALLproducts();
    setProduct(productList);
  };
  const proc = productsData?.proc();
  const [products, setProduct] = useState([]);
  const [current, setCurrent] = useState("");
  const selectProduct = (type, item) => {
    switch (type) {
      case "CATEGORY":
        const slug = item.categoryslug;
        setProduct(proc.filter((p) => p.categoryslug === slug));
        break;
    }
  };
  function RenderItem() {
    return (
      <div className="catelog__filter">
        <div className="catelog__filter__widget__content">
          <div className="catelog__filter__widget__title">
            <Menu
              style={{
                width: "100%",
              }}
              defaultSelectedKeys={["1"]}
              mode="horizontal"
              selectedKeys={[current]}
            >
              {items.map((item, index) => {
                return (
                  <Menu.SubMenu
                    key={item.key}
                    title={item.label}
                    icon={item.icon}
                  >
                    {item.children.map((item2) => (
                      <Menu.Item key={item2.key}>
                        <div
                          onClick={() => {
                            selectProduct("CATEGORY", item2);
                          }}
                        >
                          {item2.label}
                        </div>
                      </Menu.Item>
                    ))}
                  </Menu.SubMenu>
                );
              })}
            </Menu>
          </div>
        </div>
      </div>
    );
  }
  const Log = () => {
    return <RenderItem />;
  };

  return (
    <Helmet title="Sản phẩm">
      <div className="catelog">
        <Log />
        <div className="catelog__content">
          <Grid col={3} mdCol={2} smCol={1} gap={20}>
            {products?.map((item, index) => (
              <ProductCard
                key={index}
                img={item.img}
                title={item.title}
                img2={item.img2}
                Price={parseInt(item.price)}
                category={item.category}
                _id={item._id}
                rating={item.rating}
              />
            ))}
          </Grid>
          <div style={{ width: "500px", margin: "auto" }}>
            <Pagination defaultCurrent={1} total={products.length} />
          </div>
        </div>
      </div>
    </Helmet>
  );
};
export default CateLog;
