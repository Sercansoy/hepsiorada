import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { BsCart4 } from "react-icons/bs";
import { useSelector } from "react-redux";
import Link from "next/link";

const Navbar = ({ setShowCartModal, style }) => {
  const { cart } = useSelector((state) => state.cart);

  return (
    <nav style={style} className={styles.Navigation}>
      <div className={styles.Container}>
        <Link href={"/"} className={styles.Logo}>
          Hepsiorada
        </Link>
        <input className={styles.Search} placeholder="Search..." />
        <div
          className={styles.CartWrapper}
          onClick={() => setShowCartModal((prev) => !prev)}
        >
          <BsCart4 className={styles.Cart} />
          {cart.length > 0 ? (
            <div className={styles.Badge}>{cart.length}</div>
          ) : null}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
