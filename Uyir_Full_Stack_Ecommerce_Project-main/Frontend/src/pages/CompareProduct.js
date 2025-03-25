import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Color from "../components/Color";
import Meta from "../components/Meta";
import watch from "../images/watch.jpg";
import Container from "../components/Container";

const CompareProduct = () => {
  return (
    <>
      <Meta title={"Compare Products"} />
      <BreadCrumb title="Compare Products" />
      <Container class1="compare-product-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-3">
            <div className="compare-product-card position-relative">
              <img
                src="https://d1sl07a7h3d3fr.cloudfront.net/admin/product/f4da7a55-ab52-433a-aab6-0357a67826f4-Pearl-Millet-Desi-600x600.jpg"
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="product-card-image">
                <img src="https://d1sl07a7h3d3fr.cloudfront.net/admin/product/f4da7a55-ab52-433a-aab6-0357a67826f4-Pearl-Millet-Desi-600x600.jpg" alt="watch" />
              </div>
              <div className="compare-product-details">
                <h5 className="title">
                 
                </h5>
                <h6 className="price mb-3 mt-3">$ 100</h6>

                <div>
                  <div className="product-detail">
                    <h5>Brand:</h5>
                    <p>UyirOrganic</p>
                  </div>
                  <div className="product-detail">
                    <h5>Type:</h5>
                    <p>Millet</p>
                  </div>
                  <div className="product-detail">
                    <h5>Availablity:</h5>
                    <p>In Stock</p>
                  </div>
                  <div className="product-detail">
                    <h5>Color:</h5>
                    <Color />
                  </div>
                  <div className="product-detail">
                    <h5>Quantity:</h5>
                    <div className="d-flex gap-10">
                      <p>Gram</p>
                      <p>Kilogram</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="compare-product-card position-relative">
              <img
                src="images/cross.svg"
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="product-card-image">
                <img src={watch} alt="watch" />
              </div>
              <div className="compare-product-details">
                <h5 className="title">
                  Pearl Millet
                </h5>
                <h6 className="price mb-3 mt-3">₹ 100</h6>

                <div>
                  <div className="product-detail">
                    <h5>Brand:</h5>
                    <p>UyirOrganic</p>
                  </div>
                  <div className="product-detail">
                    <h5>Type:</h5>
                    <p>Millet</p>
                  </div>
                  <div className="product-detail">
                    <h5>Availablity:</h5>
                    <p>In Stock</p>
                  </div>
                  <div className="product-detail">
                    <h5>Color:</h5>
                    <Color />
                  </div>
                  <div className="product-detail">
                    <h5>Size:</h5>
                    <div className="d-flex gap-10">
                      <p>S</p>
                      <p>M</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CompareProduct;
