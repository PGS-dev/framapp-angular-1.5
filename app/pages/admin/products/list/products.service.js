class ProductsAdminService {
    setKeyConvertToArray(productData) {
        for (let key in productData) {
            if (productData.hasOwnProperty(key)) {
                    const productKey = {'productKey': key};
                    productData[key] = Object.assign({}, productData[key], productKey)
            }
        }
        const productArrayData = Object.keys(productData).map((k) => productData[k]);
        return productArrayData.filter(n=> n.title != null);
    }
}

export default ProductsAdminService;
