import React from "react";
import styles from "./CartModal.module.css";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "@/store/cartSlice";

const CartModal = ({ showCartModal, setShowCartModal }) => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div
      style={{
        transform: showCartModal ? "translate(0px)" : "translateX(800px)",
      }}
      className={styles.CartModalContainer}
    >
      <div className={styles.InnerModalContainer}>
        <div className={styles.ModalHeader}>
          <span>SEPETİM</span>
          <AiOutlineClose
            className={styles.ModalCloseBtn}
            onClick={() => setShowCartModal(false)}
            size={30}
          />
        </div>
        <div className={styles.ModalBody}>
          <ul className={styles.CartItems}>
            {cart.map((cartItem, i) => (
              <li className={styles.CartItem} title={cartItem.title} key={i}>
                <img
                  className={styles.CartItemImg}
                  src={cartItem.image}
                  alt={cartItem.title}
                />
                <span className={styles.CartItemTitle}>
                  {cartItem.title}...<b>({cartItem.count})</b>
                </span>
                <span className={styles.CartItemPrice}>
                  {cartItem.price * cartItem.count} ₺
                </span>
                <button
                  className={styles.CartItemDelete}
                  onClick={() => dispatch(deleteProduct(cartItem.id))}
                >
                  Sil
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
