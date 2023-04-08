import React from "react";
import styles from "./Navbar.module.css";
import { BsCart4 } from "react-icons/bs";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { cart } = useSelector((state) => state.cart);

  return (
    <nav className={styles.Navigation}>
      <div className={styles.Container}>
        <span className={styles.Logo}>Hepsiorada</span>
        <input className={styles.Search} placeholder="Search..." />
        <div className={styles.CartWrapper}>
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