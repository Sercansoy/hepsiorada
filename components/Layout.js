import React, { useState } from "react";
import Navbar from "./Navbar/Navbar";
import CartModal from "./CartModal/CartModal";

const Layout = ({ children }) => {
  const [showCartModal, setShowCartModal] = useState(false);

  return (
    <>
      <Navbar
        style={{ marginRight: showCartModal ? "500px" : "0px" }}
        setShowCartModal={setShowCartModal}
      />
      <CartModal
        showCartModal={showCartModal}
        setShowCartModal={setShowCartModal}
      />
      <div
        style={{
          marginRight: showCartModal ? "500px" : "0px",
          transition: "all 0.3s ease",
        }}
      >
        {children}
      </div>
    </>
  );
};

export default Layout;
