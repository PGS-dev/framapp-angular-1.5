class DataService {
    constructor(firebase, toastService, $firebaseObject) {
        'ngInject';

        this.firebase = firebase;
        this.toastService = toastService;
        this.$firebaseObject = $firebaseObject;
    }

    getCategories() {
        const dbRefObjectCategories = this.firebase.database().ref('api/v1').child('categories');
        const categoriesData = this.$firebaseObject(dbRefObjectCategories);

        return categoriesData.$loaded().then(responseCategories => {
            return responseCategories;
        });
    }

    getProductsByCategory(category) {
        const dbRefObjectProducts = this.firebase.database().ref('api/v1').child('products').orderByChild('category').equalTo(category);
        const productData = this.$firebaseObject(dbRefObjectProducts);

        return productData.$loaded().then(responseProducts => {
            return responseProducts;
        });
    }

    getProducts() {
        const dbRefObjectProducts = this.firebase.database().ref('api/v1').child('products');
        const productsData = this.$firebaseObject(dbRefObjectProducts);

        return productsData.$loaded().then(responseProducts => {
            return responseProducts;
        });
    }

    getPromotedProducts() {
        const dbRefObjectProducts = this.firebase.database().ref('api/v1').child('products').orderByChild('promoted').equalTo(true);
        const productsData = this.$firebaseObject(dbRefObjectProducts);

        return productsData.$loaded().then(responseProducts => {
            return responseProducts;
        });
    }

    getProduct(productKey) {
        const dbRefObjectProduct = this.firebase.database().ref('api/v1/products').child(productKey);
        const productData = this.$firebaseObject(dbRefObjectProduct);

        return productData.$loaded().then(responseProduct => {
            return responseProduct;
        });
    }

}

export default DataService;
