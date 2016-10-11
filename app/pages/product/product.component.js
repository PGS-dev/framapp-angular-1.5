class ProductController {
    constructor($mdMedia, $state, dataService) {
        'ngInject';

        this.$mdMedia = $mdMedia;
        this.$state = $state;
        this.dataService = dataService;

    }

    $onInit() {
        this.getProduct();
    }

    getProduct() {
        this.dataService.getProduct(this.$state.params.id)
            .then(data => {
                this.productData = data;
            });
    }
}

const ProductViewComponent = {
    controller: ProductController,
    template: require('./product.html')
};

export default ProductViewComponent;
