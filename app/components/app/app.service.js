class DataService {
    constructor(firebase, $firebaseObject) {
        'ngInject';

        this.firebase = firebase;
        this.$firebaseObject = $firebaseObject;
    }

    getCategories() {
        const dbRefObjectCategories = this.firebase.database().ref('api/v1').child('categories');
        const categoriesData = this.$firebaseObject(dbRefObjectCategories);

        return categoriesData.$loaded().then(responseCategories => {
            return responseCategories;
        });
    }

    getCategory(categoryKey) {
        const dbRefObjectCategory = this.firebase.database().ref('api/v1/categories').child(categoryKey);
        const categoryData = this.$firebaseObject(dbRefObjectCategory);

        return categoryData.$loaded().then(responseCategory => {
            return responseCategory;
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
