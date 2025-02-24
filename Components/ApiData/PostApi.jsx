import axios from 'axios'
const api= axios.create({
baseURL:'https://fakestoreapi.com',

});

// get electronics product
export const getElectronicsProduct=()=>{
    return api.get("/products/category/electronics")
};

// get men's cloting product

export const getMenProduct=()=>{
    return api.get("/products/category/men's clothing")
}
// get women's cloting product

export const getWomenProduct=()=>{
    return api.get("/products/category/women's clothing")
}
// get all cart items

export const getAllCartItems=()=>{
    return api.get("/carts")
}

// add to cart items

export const addToCartItems=(items)=>{
    return api.post("/carts",{
        body:JSON.stringify(
            {
                userId:{items},
                products:[{productId:items,quantity:1}]
            }
        )
    })
}

// delete cart items

export const deteteCartItems=(id)=>{
    return api.delete(`/carts",${id}`)
}


