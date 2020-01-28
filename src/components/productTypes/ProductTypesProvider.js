import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const ProductTypesContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const ProductTypesProvider = (props) => {
    const [productTypes, setProductTypes] = useState([])

    const getProductTypes = () => {
        return fetch("http://localhost:8080/productTypes")
            .then(res => res.json())
            .then(setProductTypes)
    }

    const addProductTypes = productType=> {
        return fetch("http://localhost:8080/productTypes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(productType)
        })
            .then(getProductTypes)
    }

    /*
        Load all Products when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getProductTypes()
    }, [])

    useEffect(() => {
        console.log("****  ProductType APPLICATION STATE CHANGED  ****")
    }, [productTypes])

    return (
        <ProductTypesContext.Provider value={{
            productTypes, addProductTypes
        }}>
            {props.children}
        </ProductTypesContext.Provider>
    )
}