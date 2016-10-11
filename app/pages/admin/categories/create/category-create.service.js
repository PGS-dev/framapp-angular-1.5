class CategoryCreateService {
    constructor(firebase, toastService) {
        'ngInject';

        this.firebase = firebase;
        this.toastService = toastService;
    }

    createNewCategory(inputs) {
        inputs.id = inputs.title.replace(/ /g, "-").toLowerCase();

        if (inputs.id && inputs.title && inputs.description) {
            return this.firebase.database().ref(`api/v1/categories/${inputs.id}`).set(inputs)
                .then(this.responseSuccess(inputs.title))
                .catch(this.responseWarning);
        }
    }

    responseSuccess(response) {
        this.toastService.showSuccessToast(`Category "${response} has been added.`);
    }

    responseWarning() {
        this.toastService.showSuccessToast(`Something went wrong.`);
    }
}

export default CategoryCreateService;
