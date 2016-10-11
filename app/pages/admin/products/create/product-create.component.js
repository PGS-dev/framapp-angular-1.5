class ProductCreateController {
    constructor($mdMedia, $location, firebase, productCreateService, dataService) {
        'ngInject';

        this.$mdMedia = $mdMedia;
        this.$location = $location;
        this.firebase = firebase;
        this.productCreateService = productCreateService;
        this.dataService = dataService;
    }

    $onInit() {
        this.redirectUser();
        this.getCategories();
    }

    redirectUser() {
        this.firebase.auth().onAuthStateChanged(user => {
            if (!user) {
                this.$location.path('/');
            }
        });
    }

    getCategories() {
        this.dataService.getCategories()
            .then(data => {
                this.categoriesData = data;
            });
    }

    createNewProduct(inputs) {
        this.productCreateService.createNewProduct(inputs);
    }
}

const ProductCreateComponent = {
    controller: ProductCreateController,
    template: require('./product-create.html')
};

export default ProductCreateComponent;
