import React, { useState, useRef } from "react";
import Helmet from "../components/Helmet";
import Grid from "../components/Grid/Grid";
import ProductCard from "../components/ProductCard/ProductCard";
import productsData from "../assets/data-fake/product-data";
import category from "../assets/data-fake/category";
import Button from "../components/Button/Button";
import { Menu, Space } from "antd";
import { Pagination } from 'antd';

import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
  PieChartOutlined,
} from "@ant-design/icons";

const CateLog = () => {
  // const [isClick, setClick] = useState();
  // const [isBool, setBool] = useState(false);
  const productList = productsData?.getALLproducts();
  const [products, setProduct] = useState(productList);
  const ref = useRef(null);
  const toggleRef = () => {
    ref.current.classList.toggle("active");
  };

  const selectProduct = (type, item) => {
    switch (type) {
      case "CATEGORY":
        const slug = item.categoryslug;
        setProduct(productList.filter((p) => p.categoryslug === slug));
        break;
    }
  };
  function RenderItem(){
    return(
    <div className="catelog__filter">
    <div className="catelog__filter__widget__content">        
        <div className="catelog__filter__widget__title">
            {category.map((item, index) => (
              <Menu.SubMenu
                key={item.key}
                title={item.label}
                icon={
                  <box-icon type={item.type} name={item.icon}></box-icon>
                }
              >
                {item.children.map((item2) => (
                  <Menu.Item key={item2.key}>
                    <div onClick={() => selectProduct("CATEGORY", item2)}>
                      {item2.label}
                    </div>
                  </Menu.Item>
                ))}
              </Menu.SubMenu>
            ))}
          </div>
      
    </div>
  </div>
    )
  }
  
  return (
    <Helmet title="Sản phẩm">
      <div className="catelog">
        {/* <div className="catelog__filter" ref={ref}>
         c
            <div className="catelog__filter__widget__title">
              <box-icon name="align-left"></box-icon>
              Danh mục sản phẩm
            </div>
            <div className="catelog__filter__widget__content">
              {category?.map((item, index) => (
                <div
                  className={`item ${
                    isClick === item.id && !isBool ? "open" : ""
                  }`}
                  key={index}
                >
                  <div
                    className="item__widget"
                    onClick={() => (setBool(!isBool), setClick(item.id))}
                  >
                    <div className="widget__icon">
                      <box-icon
                        type={item.type}
                        size="md"
                        name={item.icon}
                      ></box-icon>
                    </div>
                    <div className="widget__content">{item.display}</div>
                    <div className="widget__icon-chervon">
                      <box-icon
                        type="bx"
                        name="chevron-down"
                        rotate={isClick === item.id && !isBool ? "180" : ""}
                      ></box-icon>
                    </div>
                  </div>
                  {item.children.map((item2, index2) => (
                    <div
                      className= {`item__sidebar ${item2.categoryslug ===isClick? "":`` }`}
                      key={index2}
                      onClick={() => selectProduct("CATEGORY", item2)}
                    >
                      {item2.displaychild}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="catelog__filter__toggle">
          <Button size="sm" onClick={toggleRef}>Bộ lọc</Button>
        </div> */}
        <Space>
        <Menu
          mode="inline"
          style={{
            width: 256,
          }}

        >
        <RenderItem />
        </Menu> 
      </Space>
        <div className="catelog__content">
          <Grid col={3} mdCol={2} smCol={1} gap={20}>
            {products?.map((item, index) => (
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
          <div style={{width:"500px",margin:"auto"}}>
          <Pagination 
           defaultCurrent={1} total={products.length}
        />
        </div>
        </div>
       
      </div>
    </Helmet>
  );
};
export default CateLog;
