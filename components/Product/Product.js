import React from "react";
import styles from "./Product.module.css";
import { BsCartPlusFill, BsStarFill, BsStarHalf } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addProduct } from "@/store/cartSlice";

const Product = ({ prod }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.Product}>
      <img className={styles.Image} src={prod.image} alt="product" />
      <span className={styles.Title}>{prod.title.substring(0, 40)}...</span>
      <span className={styles.Desc}>
        {prod.description.substring(0, 50)}...
      </span>
      <div className={styles.Rating}>
        <div className={styles.Stars}>
          {[...Array(parseInt(`${prod.rating.rate}`)).keys()].map((i) => (
            <BsStarFill key={i} style={{ color: "#f69f29" }} />
          ))}
          {prod.rating.rate - parseInt(`${prod.rating.rate}`) > 0 ? (
            <BsStarHalf style={{ color: "#f69f29" }} />
          ) : null}
        </div>
        {prod.rating.rate}
      </div>
      <span className={styles.Price}>{prod.price} ₺</span>
      <button
        className={styles.AddCart}
        onClick={() => dispatch(addProduct(prod))}
      >
        <BsCartPlusFill className={styles.CartIcon} />
        Sepete Ekle
      </button>
    </div>
  );
};

export default Product;
