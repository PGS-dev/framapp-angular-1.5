class ProductService {
    constructor($state) {
        this.$state = $state;
    }

    getProductDetails(array) {
        console.log(this.$state.params.id);
        console.log(array);

        const productObject = {};
        array.forEach(function(e){
            obj[e[0]] = e[1]
        })

        return array.filter(n => n.guid === this.$state.params.id);
    }

}

export default ProductService;
