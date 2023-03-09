import React from "react";
import { Link } from "react-router-dom";
import { useSelector, shallowEqual } from "react-redux";
import CartIcons from "./CartIcons";

function ProductList() {
    const products = useSelector((store) => store.products, shallowEqual);
    const productCards = Object.keys(products).map(id => (
        <div className="col-md-3 mb-3" key={id}>
            <div className="card">
                <div className="card-body">
                    <h2 className="card-title text-center">
                        <Link to={`/products/${id}`}>{products[id].name}</Link>
                    </h2>
                        <CartIcons id={id} />
                </div>
            </div>
        </div>
    ));

    return (
        <div>
            <h3>Browse our featured products</h3>
                <div className="row">{productCards}</div>
        </div>
    );
};

export default ProductList;