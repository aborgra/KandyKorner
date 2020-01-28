import React, { useContext } from "react"
import { ProductContext } from "./ProductProvider"
import Product from "./Product"
import { ProductTypesContext } from "../productTypes/ProductTypesProvider"
import "./Product.css"

export default () => {
    const { products } = useContext(ProductContext)
    const  {productTypes } = useContext(ProductTypesContext)

    return (
      <>
      <h3 className="products__title">Products</h3>
        <div className="products">
        {
            products.map(product => {
              const productType = productTypes.find(pt => pt.id === product.typeId)

           return <Product key={product.id} 
           product={product}
           productType = {productType}
           />
          })
        }
        </div>
        </>
    )
}
