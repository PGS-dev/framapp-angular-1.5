class DataService {
    constructor($http, BASE_URL) {
        'ngInject';

        this.$http = $http;
        this.BASE_URL = BASE_URL;
    }

    getCategories() {
        return this.$http.get(`${this.BASE_URL}/categories.json`)
            .then((response) => {
                return response.data;
            })
            .catch(this.responseError);
    }

    getProducts() {
        return this.$http.get(`${this.BASE_URL}/products.json`)
            .then((response) => {
                return response.data;
            })
            .catch(this.responseError);
    }

    responseError(response) {
        console.log(response);
    }

}

export default DataService;
