class ProductCreateController {
    constructor($mdMedia, $location, firebase, $firebaseObject, productCreateService) {
        'ngInject';
        this.$mdMedia = $mdMedia;
        this.$location = $location;
        this.firebase = firebase;
        this.$firebaseObject = $firebaseObject;
        this.productCreateService = productCreateService;
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
        const dbRefObjectCategories = this.firebase.database().ref('api/v1').child('categories');
        this.categoriesDataFire = this.$firebaseObject(dbRefObjectCategories);
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
