class GetDataService {
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
            .catch((response) => {
                this.responseError(response);
            });
    }

    getProducts() {
        return this.$http.get(`${this.BASE_URL}/products.json`)
            .then((response) => {
                return response.data;
            })
            .catch((response) => {
                this.responseError(response);
            });
    }

    responseError(response) {
        console.log(response.statusText);
    }

}

export default GetDataService;
