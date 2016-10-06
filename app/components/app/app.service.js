class DataService {
    constructor($http, BASE_URL, firebase) {
        'ngInject';

        this.$http = $http;
        this.BASE_URL = BASE_URL;
        this.firebase = firebase;
    }

    getCategories() {
        return this.$http.get(`${this.BASE_URL}/categories.json`)
            .then((response) => {
                return response.data;
            })
            .catch(this.responseError);
    }

    getProducts() {
        const productsArray = this.firebase.database().ref('api/v1').child('products');
        productsArray.on("value", snap => {
            this.sendProducts(snap.val());
        })
    }

    sendProducts(data) {
        console.log(data);
    }

    responseError(response) {
        console.log(response);
    }
}

export default DataService;
