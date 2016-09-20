class MainPageService {
    constructor($http, $state, appConfig) {
        'ngInject';

        this.$http = $http;
        this.$state = $state;
        this.appConfig = appConfig;
    }

    getProducts() {
        return this.$http.get(this.appConfig + 'products' + '.json')
                .then((response) => {
                return response.data;
    })
    .catch((response) => {
            console.log(response.statusText);
    });
    }
}

export default MainPageService;
