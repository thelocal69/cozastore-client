import React, { useState, useEffect } from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import { PRODUCTDETAILS, Select, Details, Description } from "./Style.js";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Count from "../../components/count/Count.js";
import Button from "../../components/btn/Button.js";
import SELECT from "../../components/mui/SELECT.js";
import CircularLading from "../../components/mui/CircularLading.js";
import Rating from "../../components/rating/Rating.js";
//import { getProductWithIdAction } from "../../Redux/Actions/Action";
//import { addToCart } from "../../Redux/Actions/Action";

const ShopDetail = () => {

  const dispatch = useDispatch();
  const { id } = useParams();
  const [error, setError] = useState(false);
  const { loading, product } = useSelector((state) => state.SingleProduct);
  const { loading: LoadingToAddProduct } = useSelector(
    (state) => state.addToCart
  );
  const [option, setOption] = useState({
    id: id,
    Color: "",
    Size: "",
    qnt: 1,
  });

  //   useEffect(
  //     () => dispatch(getProductWithIdAction(id)),

  //     [dispatch, id]
  //   );

  const image = [
    {
      original: product.image,
      thumbnail: product.image,
    },
  ];

  const handelOption = (val, type) => {
    setError(false);

    setOption({ ...option, [type]: val });
  };

  //   const handelAddToCart = () => {
  //     if (option.Size.length !== 0 && option.Color.length !== 0) {
  //       dispatch(addToCart(option));
  //     } else setError(true);
  //   };


  return (
    <>
      {loading ? (
        <CircularLading />
      ) : (
        <>
          <PRODUCTDETAILS>
            <div className="container">
              <ImageGallery
                items={image}
                showFullscreenButton={false}
                additionalClass="slider-MW"
                showNav={false}
                thumbnailPosition="left"
                useBrowserFullscreen={false}
                showPlayButton={false}
                autoPlay={true}
              />

              <Details>
                <h4>{product.title}</h4>
                <span>{`Price :${product.price}  $`}</span>
                <Rating rating={product.rating}></Rating>
                <div>{`Category :${product.category}`}</div>
                <Select>
                  <SELECT
                    id="Size"
                    label={"Size"}
                    options={["S", " M", "L", "XL"]}
                    returnVal={(val) => handelOption(val, "Size")}
                  ></SELECT>
                  <SELECT
                    id="Color"
                    label={"Color"}
                    options={["Red", "Blue", "White", "Grey"]}
                    returnVal={(val) => handelOption(val, "Color")}
                  ></SELECT>
                </Select>
                <Count
                  containerClass="containerBtn"
                  value={(val) => {
                    setOption({ ...option, qnt: val });
                  }}
                ></Count>
                {error && (
                  <div style={{ color: "red" }}>Add Your Color And Size </div>
                )}
                <Button
                  disabled={LoadingToAddProduct}
                  //onClick={handelAddToCart}
                  value="ADD TO CART"
                />
              </Details>
            </div>
            <Description className="container">
              <h3>DESCRIPTION</h3>
              <div>{product.description}</div>
            </Description>
          </PRODUCTDETAILS>
        </>
      )
      }
    </>
  );
}
export default ShopDetail;
