import React from 'react'
import Header from "../includes/Header";
import Footer from "../includes/Footer";
import { Outlet } from 'react-router-dom';

const Master = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Master;