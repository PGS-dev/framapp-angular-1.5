class MainPageService {
    constructor($http, $state, BASE_URL) {
        'ngInject';

        this.$http = $http;
        this.$state = $state;
        this.BASE_URL = BASE_URL;
    }

    getProducts() {
        return this.$http.get(`${this.BASE_URL}products.json`)
                .then((response) => {
                return response.data;
    })
    .catch((response) => {
            console.log(response.statusText);
    });
    }
}

export default MainPageService;
