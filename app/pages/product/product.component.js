class ProductController {
    constructor($mdMedia, $state, firebase, $firebaseObject) {
        'ngInject';
        this.$mdMedia = $mdMedia;
        this.$state = $state;
        this.firebase = firebase;
        this.$firebaseObject = $firebaseObject;
    }

    $onInit() {
        this.productKey = this.$state.params.id;
        this.getProduct(this.productKey);
    }

    getProduct(productKey) {
        const dbRefObjectProducts = this.firebase.database().ref('api/v1/products').child(productKey);
        this.productData = this.$firebaseObject(dbRefObjectProducts);
    }
}

const ProductViewComponent = {
    controller: ProductController,
    template: require('./product.html')
};

export default ProductViewComponent;
