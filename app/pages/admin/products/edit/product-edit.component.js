class productEditController {
    constructor($mdMedia, $state, dataService, productEditService) {
        'ngInject';

        this.$mdMedia = $mdMedia;
        this.$state = $state;
        this.dataService = dataService;
        this.productEditService = productEditService;
    }

    $onInit() {
        this.getCategories();
        this.getProduct();
    }

    getCategories() {
        this.dataService.getCategories()
            .then(data => {
                this.categoriesData = data;
            });
    }

    getProduct() {
        this.dataService.getProduct(this.$state.params.id)
            .then(data => {
                this.productData = data;
            });
    }

    updateProduct(inputs) {
        this.productEditService.updateProduct(inputs, this.$state.params.id);
    }
}

const ProductEditComponent = {
    controller: productEditController,
    template: require('./product-edit.html')
};

export default ProductEditComponent;
