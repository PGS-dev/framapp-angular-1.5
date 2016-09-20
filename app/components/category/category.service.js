class CategoryService {
    constructor($http, $state, appConfig) {
        'ngInject';

        this.$http = $http;
        this.$state = $state;
        this.appConfig = appConfig;
    }

    getCategories() {
        return this.$http.get(this.appConfig + 'categories' + '.json')
                .then((response) => {
                return response.data;
    })
    .catch((response) => {
            console.log(response.statusText);
    });
    }
}

export default CategoryService;
