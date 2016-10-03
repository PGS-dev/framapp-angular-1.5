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
        this.getCategories();
        this.getCategoryFromURL = this.$location.search().category;
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
            .then(productsData => {
                this.productsData = productsData;
            })
    }

    getCategories() {
        this.dataService.getCategories()
            .then(categoriesData => {
                this.categoriesData = categoriesData;
            })
    }
}

const ProductsAdminComponent = {
    controller: ProductsAdminController,
    template: require('./products.html')
};

export default ProductsAdminComponent;
