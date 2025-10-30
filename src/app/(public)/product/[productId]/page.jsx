"use client";
import ProductDescription from "@/components/public/product/ProductDescription";
import ProductDetails from "@/components/public/product/ProductDetails";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";


const Product = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState();
  const products = useSelector((state) => state.product.list);

  const fetchProduct = async () => {
    const product = products.find((product) => product.id === productId);
    setProduct(product);
  };

  useEffect(() => {
    if (products.length > 0) {
      fetchProduct();
    }
    scrollTo(0, 0);
  }, [productId, products]);

  return (
    <div className="mx-6">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrums */}
        <div className="  text-gray-600 text-sm mt-8 mb-5">
          Home / Products / {product?.category}
        </div>

        {/* Product Details */}
        {product && <ProductDetails product={product} />}

        {/* Description & Reviews */}
        {product && <ProductDescription product={product} />}
      </div>
    </div>
  );
};

export default Product;
