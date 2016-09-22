class GetDataService {
    constructor($http, BASE_URL) {
        'ngInject';

        this.$http = $http;
        this.BASE_URL = BASE_URL;
    }

    getCategories() {
        return this.$http.get(`${this.BASE_URL}/categories.json`).then((response) => {
            return response.data;
        })
        .catch((response) => {
            console.log(response.statusText);
        });
    }

    getProducts() {
        return this.$http.get(`${this.BASE_URL}/products.json`).then((response) => {
            return response.data;
        })
        .catch((response) => {
            console.log(response.statusText);
        });
    }

}

export default GetDataService;
