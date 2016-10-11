class ProductsAdminService {
    setKeyConvertToArray(productData) {
        for (let key in productData) {
            if (productData.hasOwnProperty(key)) {
                const productKey = {'productKey': key};
                productData[key] = Object.assign({}, productData[key], productKey)
            }
        }
        return Object.keys(productData).map((k) => productData[k]);
    }
}

export default ProductsAdminService;
