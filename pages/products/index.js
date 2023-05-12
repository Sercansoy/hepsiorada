import React from "react";

const Products = () => {
  return <div>Products</div>;
};

export async function getServerSideProps(context) {
  // console.log(context);

  return { props: {} };
}

export default Products;
