import React from "react";
import {
  LocalShipping,
  International,
  Warehouse,
  ShoppingApproved,
} from "../UI/Icons/Icons";

const ProductFeatures = (props) => {
  return (
    <React.Fragment>
      {props.product.treat_approved ? (
        <span className="shop-card-product-features" title="Treat Aproved">
          <ShoppingApproved />
          {props.showText ? (
            <span className="feature-text">treat Aproved</span>
          ) : null}
        </span>
      ) : null}
      {props.product.fulfilled_by_treat ? (
        <span className="shop-card-product-features" title="Fullfiled By Treat">
          <Warehouse />
          {props.showText ? (
            <span className="feature-text">Fullfiled By Treat</span>
          ) : null}
        </span>
      ) : null}
      {props.product.shipped_from_abroad ? (
        <span
          className="shop-card-product-features"
          title="International Shipping"
        >
          <International />
          {props.showText ? (
            <span className="feature-text">Shipped From Abroad</span>
          ) : null}
        </span>
      ) : (
        <span className="shop-card-product-features" title="Local Shipping">
          <LocalShipping />
          {props.showText ? (
            <span className="feature-text">Local Shippping</span>
          ) : null}
        </span>
      )}
    </React.Fragment>
  );
};

export default ProductFeatures;
