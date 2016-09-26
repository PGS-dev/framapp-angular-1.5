class ProductController {
    constructor(dataService, productService, $mdMedia) {
        'ngInject';
        this.dataService = dataService;
        this.productService = productService;
        this.$mdMedia = $mdMedia;
    }

    $onInit() {
        this.getProducts();
        this.data = [];
        this.productData = [];
    }

    getProducts() {
        this.dataService.getProducts()
            .then(data => {
                this.data = data;
                this.productData = this.productService.getProductDetails(this.data);
            })
    }

}

const ProductViewComponent = {
    controller: ProductController,
    template: require('./product.html')
};

export default ProductViewComponent;
