import React from "react";
import Product from "@/components/templates/Product/Product";

export default function ProductPage({ params }) {
  const idProduct = params.id;

  return (
    <>
      <Product id={idProduct}/>
    </>
  );
}
//
