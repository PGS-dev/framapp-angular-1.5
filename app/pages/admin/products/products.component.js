class ProductsAdminController {
    constructor($mdMedia, $location, firebase) {
        'ngInject';
        this.$mdMedia = $mdMedia;
        this.$location = $location;
        this.firebase = firebase;
    }

    $onInit() {
        this.redirectUser();
    }

    redirectUser() {
        this.firebase.auth().onAuthStateChanged(user => {
            if (!user) {
                this.$location.path('/');
            }
        });
    }
}

const ProductsAdminComponent = {
    controller: ProductsAdminController,
    template: require('./products.html')
};

export default ProductsAdminComponent;
