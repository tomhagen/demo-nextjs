import React, { Component, Fragment } from "react";
import Head from "next/head";
import Dashboard from "../../layout/dashboard";

class Admin extends Component {
  render() {
    return (
      <Fragment>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta name="description" content />
          <meta name="author" content />
          <title>SB Admin 2 - Dashboard</title>
        </Head>
        <Dashboard />
      </Fragment>
    );
  }
}
export default Admin;
