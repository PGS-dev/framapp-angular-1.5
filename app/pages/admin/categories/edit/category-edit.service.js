class CategoryEditService {
    constructor(firebase, toastService) {
        'ngInject';

        this.firebase = firebase;
        this.toastService = toastService;
    }

    updateCategory(inputs) {
        if(inputs != null) {
            const updateCategoryData = {
                'title': inputs.title
            };

            return this.firebase.database().ref(`api/v1/categories/${inputs.id}`).update(updateCategoryData)
                .then(this.responseSuccess(inputs.title))
                .catch(this.responseWarning);
        }
    }

    responseSuccess(response) {
        this.toastService.showSuccessToast(`Category "${response} has been updated.`);
    }

    responseWarning() {
        this.toastService.showSuccessToast(`Something went wrong.`);
    }
}

export default CategoryEditService;
