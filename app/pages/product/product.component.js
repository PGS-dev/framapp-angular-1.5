class ProductController {
    constructor(productService, $mdMedia, $state, firebase, $firebaseArray) {
        'ngInject';
        this.productService = productService;
        this.$mdMedia = $mdMedia;
        this.$state = $state;
        this.firebase = firebase;
        this.$firebaseArray = $firebaseArray;
    }

    $onInit() {
        this.getProducts();
    }

    getProducts() {
        const dbRefObjectProducts = this.firebase.database().ref('api/v1/products').orderByChild('guid').equalTo(this.$state.params.id);
        this.productData = this.$firebaseArray(dbRefObjectProducts);
    }

}

const ProductViewComponent = {
    controller: ProductController,
    template: require('./product.html')
};

export default ProductViewComponent;
