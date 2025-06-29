import "./ProductList.css";
import {useTitle} from "../../../Utils/UseTitle.ts";
import {useEffect, useState} from "react";
import type {ProductModel} from "../../../Models/ProductModel.ts";
import {productService} from "../../../Services/ProductService.ts";
import {notify} from "../../../Utils/Notify.ts";
import {ProductCard} from "../ProductCard/Productcard.tsx";

export function ProductList() {
    useTitle("Products")

    const [products, setProducts] =useState<ProductModel[]>([])

    useEffect(() => {
        productService.getAllProducts()
            .then(dbProducts=>{
                    setProducts(dbProducts)

                }
            )
            .catch(err => notify.error(err));
    }, []);
    

    return (
        <div className="ProductList">

			<h3>רשימת המוצרים שלנו:</h3>
            {products.map(product=> <ProductCard key={product.id} product={product}/>)};

        </div>
    );
}
