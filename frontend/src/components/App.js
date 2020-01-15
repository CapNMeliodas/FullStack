import React from "react";
import ReactDOM from "react-dom";
import DataProvider from "./DataProvider";
import Table from "./Table";
import BadgeList from "./BadgeList"
import Form from "./Form";
import FormAddBadge from "./FormAddBadge";


const App = () => (
  <React.Fragment>
      <FormAddBadge endpoint="api/my_badges/"/>
      <DataProvider endpoint="api/my_badges/"
                    render={data => <BadgeList data={data} />} />
  </React.Fragment>
);

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : null;
