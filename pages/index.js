import { store } from "@/firebase";
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect } from "react";
import styles from "@/styles/Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import { updateProducts } from "@/store/productsSlice";
import Product from "@/components/Product/Product";
import { useRouter } from "next/router";
import Head from "next/head";

const Home = ({ dataProducts }) => {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(updateProducts(dataProducts));
  }, []);

  return (
    <>
      <Head>
        <title>Hepsiorada</title>
      </Head>
      <div className={styles.Container}>
        <div className={styles.Products}>
          {products.map((prod) => (
            <Product
              onClick={() => router.push(`/product/${prod.id}`)}
              key={prod.id}
              prod={prod}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps() {
  const productsRef = collection(store, "Products");
  const productsSnap = await getDocs(productsRef);
  const dataProducts = productsSnap.docs.map((doc) => doc.data());

  return { props: { dataProducts } };
}

export default Home;
