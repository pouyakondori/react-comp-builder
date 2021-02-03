import React, {useState} from "react";
import "./App.css";
import {Layout, Menu, Breadcrumb, Tooltip} from "antd";
import testDatasource1 from "./datasource/data.json";
import testDatasource2 from "./datasource/data2.json";
import Builder from "./components/Builder";
function App() {
  const { Header, Content, Footer } = Layout;
  const [selectedDataSourceKey, setSelectedDataSourceKey] = useState(2)

  const dataSources = [
    {data: testDatasource1, title: "Test Datasource 1", key: 1, description: "This is your First Datasource"},
    {data: testDatasource2, title: "Test Datasource 2", key: 2, description: "This is your Second Datasource"},
    {data: testDatasource1, title: "Our Datasource", key: 3, description: "This is Our Datasource"},
  ]

  const selectedDatasource = dataSources.filter(ds => ds.key === selectedDataSourceKey)[0].data
  return (
    <div className="App">
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[selectedDataSourceKey]}>
            {dataSources.map(ds => <Menu.Item onClick={() => setSelectedDataSourceKey(ds.key)}><Tooltip title={ds.description}>{ds.title}</Tooltip></Menu.Item>)}
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content">
          <Builder components={[selectedDatasource]}/>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Sample code for nested JSON component factory
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
