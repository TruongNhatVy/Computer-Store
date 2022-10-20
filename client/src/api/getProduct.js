import axios from "axios";
 export const getALLproducts = async()=>{
        const response = await axios.get("http://localhost:5000/getAllProducts")
        const products = response.data
        return products.data
    }
export const getALLproductsid = async(_id)=>{
    const response = await axios.get("http://localhost:5000/getAllProducts")
    const products = response.data
    return products.data.find(e => e._id===_id)
}

 export const getProducts = async (count) => {
    const response = await axios.get("http://localhost:5000/getAllProducts")
    const products = response.data  
    const max = products.data.length - count
    const min = 0
    const start = Math.floor(Math.random() * (max - min) + min)
    return products.data.slice(start, start + count)
}
const productData={
    getALLproducts,
    getProducts
}
export  {productData}