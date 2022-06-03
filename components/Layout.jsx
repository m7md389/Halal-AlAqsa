import React from "react";
import Head from "next/head";
import Navbar from "/components/Navbar";
import Footer from "/components/Footer";
import layoutStyles from "../styles/Layout.module.scss";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Head>
        <link rel="icon" href="/logo.png" />
      </Head>

      <header>
        <Navbar />
      </header>
      <main className={layoutStyles.main}>{children}</main>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
