import { store } from "@/firebase";
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect } from "react";
import styles from "@/styles/Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import { updateProducts } from "@/store/productsSlice";
import { addProduct } from "@/store/cartSlice";
import Product from "@/components/Product/Product";

const Home = ({ dataProducts }) => {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateProducts(dataProducts));
  }, []);


  return (
    <div className={styles.Container}>
      <div className={styles.Products}>
        {products.map((prod) => (
          <Product key={prod.id} prod={prod} />
        ))}
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const productsRef = collection(store, "Products");
  const productsSnap = await getDocs(productsRef);
  const dataProducts = productsSnap.docs.map((doc) => doc.data());

  return { props: { dataProducts } };
}

export default Home;
