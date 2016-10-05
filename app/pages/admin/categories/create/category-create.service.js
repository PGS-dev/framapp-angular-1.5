class CategoryCreateService {
    constructor($http, firebase, toastService) {
        'ngInject';

        this.$http = $http;
        this.firebase = firebase;
        this.toastService = toastService;
    }

    createNewCategory(inputs) {
        inputs.id = inputs.title.replace(/ /g, "-").toLowerCase();
        if (inputs.id && inputs.title && inputs.description) {
            return this.firebase.database().ref(`api/v1/categories/${inputs.id}`).set({
                id: inputs.id,
                title: inputs.title,
                description: inputs.description
            });
        }
    }
}

export default CategoryCreateService;
