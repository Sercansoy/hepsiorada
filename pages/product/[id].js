import { store } from "@/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useRouter } from "next/router";
import styles from "@/styles/Product.module.css";
import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { BsCartPlusFill, BsStarFill, BsStarHalf } from "react-icons/bs";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "react-headless-accordion";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";

const Product = ({ productData }) => {
  const [productCount, setProductCount] = useState(1);

  return (
    <>
      <Head>
        <title>Hepsiorada - {productData.title}</title>
      </Head>
      <div className={styles.ProductContainer}>
        <div className={styles.ProductInnerContainer}>
          <div className={styles.ProductImageContainer}>
            {/* <img src={productData.image} alt={productData.title} /> */}
            <InnerImageZoom className={styles.image} src={productData.image} />
          </div>
          <div className={styles.ProductInfoContainer}>
            <h1>{productData.title}</h1>
            <Link
              className={styles.category}
              href={`/products?category=${productData.category}`}
            >
              {productData.category}
            </Link>

            <Accordion>
              <AccordionItem>
                {({ open }) => (
                  <>
                    <AccordionHeader className={styles.ExpandDetailButton}>
                      <span>
                        Product Details
                        <MdOutlineKeyboardArrowRight
                          size={30}
                          style={{
                            transform: open ? "rotate(90deg)" : "rotate(0deg)",
                            transition: "0.2s ease all",
                          }}
                        />
                      </span>
                    </AccordionHeader>

                    <AccordionBody>
                      <p className={styles.description}>
                        {productData.description}
                      </p>
                    </AccordionBody>
                  </>
                )}
              </AccordionItem>
            </Accordion>

            <div className={styles.Rating}>
              <div className={styles.Stars}>
                {[...Array(parseInt(`${productData.rating.rate}`)).keys()].map(
                  (i) => (
                    <BsStarFill
                      size={30}
                      key={i}
                      style={{ color: "#f69f29" }}
                    />
                  )
                )}
                {productData.rating.rate -
                  parseInt(`${productData.rating.rate}`) >
                0 ? (
                  <BsStarHalf size={30} style={{ color: "#f69f29" }} />
                ) : null}
              </div>
            </div>
            <span className={styles.price}>{productData.price} ₺</span>
            <div className={styles.Cart}>
              <div className={styles.CartControl}>
                <div
                  className={styles.control}
                  onClick={() =>
                    setProductCount((prev) => (prev !== 1 ? prev - 1 : prev))
                  }
                >
                  <AiOutlineMinus />
                </div>
                <div className={styles.count}>{productCount}</div>
                <div
                  className={styles.control}
                  onClick={() => setProductCount((prev) => prev + 1)}
                >
                  <AiOutlinePlus />
                </div>
              </div>
              <div className={styles.AddCart}>
                <BsCartPlusFill className={styles.CartIcon} size={30} />
                Sepete Ekle
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  const productQuery = query(
    collection(store, "Products"),
    where("id", "==", Number(context.query.id))
  );
  const productSnap = await getDocs(productQuery);
  const productData = productSnap.docs.map((doc) => doc.data());

  return { props: { productData: productData[0] } };
}

export default Product;
