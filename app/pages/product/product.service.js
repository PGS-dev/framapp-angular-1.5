class ProductService {
    constructor($state) {
        this.$state = $state;
    }

    getProductDetails(array) {
        return array.filter(n => n.guid === this.$state.params.id);
    }

}

export default ProductService;
