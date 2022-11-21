import callApi from "../api"
export async function getproducts(){
    const response = await callApi(`products/getProductByOffsetLimit/${1}/${4}`, "GET", null);
    const products = response;
    return products.data;
}
export async function getproductfilter(){
    const response = await callApi(`categories/getCategoriesFilters`, "GET", null);
    const products = response;
    return products.data;
}

// export async function getproducts(id=null,{rejectValue}){
//     const response = await callApi("products/getAllProducts", "GET", null);
//     const products = response.data;
//     return products.data;
// }

