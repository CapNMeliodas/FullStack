import React from "react";
import ReactDOM from "react-dom";
import DataProvider from "./DataProvider";
import Table from "./Table";
import Form from "./Form";

const AppSale = () => (
  <React.Fragment>
      <DataProvider endpoint="api/on_sale"
                    render={data => <Table data={data} />} />
  </React.Fragment>
);

const wrapper = document.getElementById("app_sale");
wrapper ? ReactDOM.render(<AppSale />, wrapper) : null;
