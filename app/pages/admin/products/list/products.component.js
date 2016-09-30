class ProductsAdminController {
    constructor($mdMedia, $location, firebase, dataService) {
        'ngInject';
        this.$mdMedia = $mdMedia;
        this.$location = $location;
        this.firebase = firebase;
        this.dataService = dataService;
    }

    $onInit() {
        this.redirectUser();
        this.getProducts();
    }

    redirectUser() {
        this.firebase.auth().onAuthStateChanged(user => {
            if (!user) {
                this.$location.path('/');
            }
        });
    }

    getProducts() {
        this.dataService.getProducts()
            .then(data => {
                this.data = data;
            })
    }
}

const ProductsAdminComponent = {
    controller: ProductsAdminController,
    template: require('./products.html')
};

export default ProductsAdminComponent;
