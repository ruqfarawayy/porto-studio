// import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { Link } from "react-router-dom";
import React from "react";
const { Header, Content, Footer } = Layout;
const Home = () => {
  return (
    <Layout className="layout">
      <Header
      theme="light"
      style={{display:'flex', flexDirection:'row'}}>
        <div
          style={{
            // width: "8rem",
            // height: "100%",
            display: "flex",
            alignItems: "center",
            // paddingTop: "0.6rem",
            // paddingBottom: "0.6rem",
            marginRight:'1rem'
          }}
        >
          <Link to="/" style={{ display: "flex", alignItems: "center" }}>
            <img
              style={{
                height: "2.4rem",
                objectFit: "contain",
                cursor: "pointer",
              }}
              src="/assets/img/logo.png"
            />
          </Link>
        </div>
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          items={[
            { key: "/home", label: "Home" },
            { key: "/products", label: "Products" },
            { key: "/contacts", label: "Contacts" },
          ]}
        />
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <div
          className="site-layout-content"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <h1>Selamat Datang</h1>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
};
export default Home;
